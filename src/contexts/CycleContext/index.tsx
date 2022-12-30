import { createContext, useContext, useEffect, useReducer } from 'react'

import { reducer } from './reducer'

import { CycleContextData, CycleContextProviderProps } from './types'

const initialState: CycleContextData = {
  currentCycle: null,
  historyList: [],
  CycleDispatch: () => {}
}

const CycleContext = createContext<CycleContextData>(initialState)

export const CycleContextProvider = ({ children }: CycleContextProviderProps) => {
  const [state, CycleDispatch] = useReducer(reducer, initialState)

  const { currentCycle, historyList } = state

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

  return (
    <CycleContext.Provider value={{ ...state, CycleDispatch }}>
      {children}
    </CycleContext.Provider>
  )
}

export const useCycle = () => useContext(CycleContext)
