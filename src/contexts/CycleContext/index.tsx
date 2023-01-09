import { createContext, useCallback, useContext, useEffect, useReducer, useState } from 'react'

import { useCycleForm } from '@contexts/CycleFormContext'

import { reducer } from './reducer'

import { persistCycleContextStateInLocalStorage, recoverCycleContextStateFromLocalStorage } from './persistence/cycleContextState'
import { compareCycles } from './utils/compareCycles'

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
  const { reset, setValue } = useCycleForm()

  const [state, cycleDispatch] = useReducer(reducer, initialState)

  const { currentCycle, historyList } = state

  const [currentCycleIntervalID, setCurrentCycleIntervalID] = useState<NodeJS.Timer>()

  const startNewCycle = useCallback(({ taskName, minutesAmount }: StartNewCycleParams) => {
    // clearInterval(currentCycleIntervalID)

    const id = String(Math.floor(new Date().getTime() * Math.random()))

    const newCycle: Cycle = {
      id,
      taskName,
      minutesAmount,
      startDate: new Date(),
    }

    console.log('START NEW CYCLE', newCycle)
    console.log('\n ---------------------------------------------------')

    cycleDispatch({
      type: 'START_NEW_CYCLE',
      payload: {
        newCycle,
      },
    })
  }, [cycleDispatch])

  const interruptCurrentCycle = useCallback(() => {
    if (!currentCycle || currentCycle?.finishDate || currentCycle?.interruptDate) return

    console.log('INTERRUPT CURRENT CYCLE', currentCycle)
    console.log('\n ---------------------------------------------------')

    cycleDispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
    })

    // clearInterval(currentCycleIntervalID)

    reset()
  }, [currentCycle, cycleDispatch, reset])

  const finishCurrentCycle = useCallback(() => {
    if (!currentCycle || currentCycle?.finishDate || currentCycle?.interruptDate) return

    console.log('FINISH CURRENT CYCLE', currentCycle)
    console.log('\n ---------------------------------------------------')

    cycleDispatch({
      type: 'FINISH_CURRENT_CYCLE',
    })

    // clearInterval(currentCycleIntervalID)

    reset()
  }, [currentCycle, cycleDispatch, reset])

  useEffect(() => {
    if (!currentCycle) return

    const currentCycleIsInTheHistoryList = historyList.find((cycle) => cycle.id === currentCycle.id)

    if (!currentCycleIsInTheHistoryList) {
      console.log('ADD CURRENT CYCLE TO HISTORY LIST', currentCycle)
      console.log('\n ---------------------------------------------------')

      cycleDispatch({
        type: 'ADD_CURRENT_CYCLE_TO_HISTORY_LIST',
      })

      return
    }

    if (currentCycleIsInTheHistoryList.finishDate || currentCycleIsInTheHistoryList.interruptDate) return

    const currentCyclesAreEqual = compareCycles(currentCycle, currentCycleIsInTheHistoryList)

    console.log('CURRENT CYCLES ARE EQUAL', currentCyclesAreEqual)
    console.log('\n ---------------------------------------------------')

    if (currentCyclesAreEqual) return

    console.log('UPDATE CURRENT CYCLE ON HISTORY LIST', currentCycle)
    console.log('\n ---------------------------------------------------')

    cycleDispatch({
      type: 'UPDATE_CURRENT_CYCLE_ON_HISTORY_LIST',
      payload: {
        currentCycleId: currentCycle.id,
        newCycleData: { ...currentCycle },
      },
    })
  }, [currentCycle, historyList, cycleDispatch])

  useEffect(() => {
    if (!currentCycle || currentCycle?.finishDate || currentCycle?.interruptDate) return

    const intervalId = setInterval(() => {
      const newSecondsPassed = (new Date().getTime() - currentCycle.startDate.getTime()) / 1000
      const minutesPassed = Math.floor(newSecondsPassed / 60)

      if (minutesPassed > currentCycle.minutesAmount) {
        console.log('FINISH CURRENT CYCLE', currentCycle)
        console.log('\n ---------------------------------------------------')

        finishCurrentCycle()

        return
      }

      console.log('SET SECONDS PASSED', newSecondsPassed)
      console.log('\n ---------------------------------------------------')

      cycleDispatch({
        type: 'SET_SECONDS_PASSED',
        payload: {
          newSecondsPassed,
        },
      })
    }, 1000)

    setCurrentCycleIntervalID(intervalId)

    return () => clearInterval(intervalId)
  }, [currentCycle, cycleDispatch, finishCurrentCycle])

  useEffect(() => {
    const newState = recoverCycleContextStateFromLocalStorage()

    if (!newState) return

    console.log('UPDATE ALL STATE', newState)
    console.log('\n ---------------------------------------------------')

    cycleDispatch({
      type: 'UPDATE_ALL_STATE',
      payload: {
        newState,
      },
    })

    const { currentCycle } = newState

    if (currentCycle && !currentCycle.interruptDate && !currentCycle.finishDate) {
      setValue('taskName', currentCycle.taskName)
      setValue('minutesAmount', String(currentCycle.minutesAmount))
    }
  }, [setValue, cycleDispatch])

  useEffect(() => {
    if (!historyList.length || !currentCycle) return

    console.log('PERSIST CYCLE CONTEXT STATE', state)
    console.log('\n ---------------------------------------------------')

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
