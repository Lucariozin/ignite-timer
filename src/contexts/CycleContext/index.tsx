import { createContext, useCallback, useContext, useEffect, useReducer, useState } from 'react'

import { reducer } from './reducer'

import { persistCycleContextStateInLocalStorage, recoverCycleContextStateFromLocalStorage } from './persistence/cycleContextState'

import { Cycle, CycleContextData, CycleContextProviderProps, StartNewCycleParams } from './types'

const initialState: CycleContextData = {
  currentCycle: null,
  historyList: [],
  secondsPassed: 0,
  cycleDispatch: () => {},
  startNewCycle: (params: StartNewCycleParams) => {},
  interruptCurrentCycle: () => {},
  finishCurrentCycle: () => {},
}

const CycleContext = createContext<CycleContextData>(initialState)

export const CycleContextProvider = ({ children }: CycleContextProviderProps) => {
  const [state, cycleDispatch] = useReducer(reducer, initialState)

  const { currentCycle, historyList } = state

  const [currentCycleIntervalID, setCurrentCycleIntervalID] = useState<NodeJS.Timer>()

  const startNewCycle = useCallback(({ taskName, minutesAmount }: StartNewCycleParams) => {
    clearInterval(currentCycleIntervalID)

    const id = String(Math.floor(new Date().getTime() * Math.random()))

    const newCycle: Cycle = {
      id,
      taskName,
      minutesAmount,
      startDate: new Date(),
    }

    cycleDispatch({
      type: 'START_NEW_CYCLE',
      payload: {
        newCycle,
      },
    })
  }, [currentCycleIntervalID, cycleDispatch])

  const interruptCurrentCycle = useCallback(() => {
    cycleDispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
    })

    clearInterval(currentCycleIntervalID)
  }, [currentCycleIntervalID, cycleDispatch])

  const finishCurrentCycle = useCallback(() => {
    if (!currentCycle || currentCycle?.finishDate || currentCycle?.interruptDate) return

    cycleDispatch({
      type: 'FINISH_CURRENT_CYCLE',
    })

    clearInterval(currentCycleIntervalID)
  }, [currentCycle, currentCycleIntervalID, cycleDispatch])

  useEffect(() => {
    if (!currentCycle) return

    const currentCycleIsInTheHistoryList = historyList.find((cycle) => cycle.id === currentCycle.id)

    if (!currentCycleIsInTheHistoryList) {
      cycleDispatch({
        type: 'ADD_CURRENT_CYCLE_TO_HISTORY_LIST',
      })

      return
    }

    cycleDispatch({
      type: 'UPDATE_CURRENT_CYCLE_ON_HISTORY_LIST',
      payload: {
        currentCycleId: currentCycle.id,
        newCycleData: { ...currentCycle },
      },
    })
  }, [currentCycle])

  useEffect(() => {
    if (!currentCycle || currentCycle?.finishDate || currentCycle?.interruptDate) return

    const intervalId = setInterval(() => {
      const newSecondsPassed = (new Date().getTime() - currentCycle.startDate.getTime()) / 1000
      const minutesPassed = Math.floor(newSecondsPassed / 60)

      if (minutesPassed > currentCycle.minutesAmount) {
        finishCurrentCycle()

        return
      }

      cycleDispatch({
        type: 'SET_SECONDS_PASSED',
        payload: {
          newSecondsPassed,
        },
      })
    }, 1000)

    setCurrentCycleIntervalID(intervalId)

    return () => clearInterval(intervalId)
  }, [currentCycle])

  useEffect(() => {
    const newState = recoverCycleContextStateFromLocalStorage()

    if (!newState) return

    cycleDispatch({
      type: 'UPDATE_ALL_STATE',
      payload: {
        newState,
      },
    })

    const { currentCycle } = newState

    if (!currentCycle || currentCycle.finishDate || currentCycle.interruptDate) return
  }, [])

  useEffect(() => {
    if (!historyList.length || !currentCycle) return

    persistCycleContextStateInLocalStorage(state)
  }, [state])

  const value: CycleContextData = {
    ...state,
    cycleDispatch,
    startNewCycle,
    interruptCurrentCycle,
    finishCurrentCycle,
  }

  return (
    <CycleContext.Provider value={value}>
      {children}
    </CycleContext.Provider>
  )
}

export const useCycle = () => useContext(CycleContext)
