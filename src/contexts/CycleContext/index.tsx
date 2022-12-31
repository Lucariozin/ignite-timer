import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react'

import { reducer } from './reducer'

import { Cycle, CycleContextData, CycleContextProviderProps, StartNewCycleParams } from './types'

const initialState: CycleContextData = {
  currentCycle: null,
  historyList: [],
  secondsPassed: 0,
  CycleDispatch: () => {},
  startNewCycle: (params: StartNewCycleParams) => {},
  interruptCurrentCycle: () => {},
  finishCurrentCycle: () => {},
}

const CycleContext = createContext<CycleContextData>(initialState)

export const CycleContextProvider = ({ children }: CycleContextProviderProps) => {
  const [state, CycleDispatch] = useReducer(reducer, initialState)

  const { currentCycle, historyList } = state

  const [currentCycleIntervalID, setCurrentCycleIntervalID] = useState(0)

  const startNewCycle = useCallback(({ taskName, minutesAmount }: StartNewCycleParams) => {
    clearInterval(currentCycleIntervalID)

    const id = String(Math.floor(new Date().getTime() * Math.random()))

    const newCycle: Cycle = {
      id,
      taskName,
      minutesAmount,
      startDate: new Date(),
    }

    CycleDispatch({
      type: 'START_NEW_CYCLE',
      payload: {
        newCycle,
      },
    })
  }, [currentCycleIntervalID])

  const interruptCurrentCycle = useCallback(() => {
    CycleDispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
    })

    clearInterval(currentCycleIntervalID)
  }, [currentCycleIntervalID])

  const finishCurrentCycle = useCallback(() => {
    if (!currentCycle || currentCycle?.finishDate || currentCycle?.interruptDate) return

    CycleDispatch({
      type: 'FINISH_CURRENT_CYCLE',
    })

    clearInterval(currentCycleIntervalID)
  }, [currentCycle, currentCycleIntervalID])

  useEffect(() => {
    if (!currentCycle) return

    const currentCycleIsInTheHistoryList = historyList.find((cycle) => cycle.id === currentCycle.id)

    if (!currentCycleIsInTheHistoryList) {
      CycleDispatch({
        type: 'ADD_CURRENT_CYCLE_TO_HISTORY_LIST',
      })

      return
    }

    CycleDispatch({
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
      const minutesPassed = newSecondsPassed / 60

      if (minutesPassed > currentCycle.minutesAmount) {
        finishCurrentCycle()

        return
      }

      CycleDispatch({
        type: 'SET_SECONDS_PASSED',
        payload: {
          newSecondsPassed,
        },
      })
    }, 1000)

    setCurrentCycleIntervalID(intervalId)

    return () => clearInterval(intervalId)
  }, [currentCycle])

  return (
    <CycleContext.Provider value={{ ...state, CycleDispatch, startNewCycle, interruptCurrentCycle, finishCurrentCycle }}>
      {children}
    </CycleContext.Provider>
  )
}

export const useCycle = () => useContext(CycleContext)
