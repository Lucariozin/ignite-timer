import { Dispatch, ReactNode } from 'react'

import { ActionTypes, CycleActions } from './actions'

export interface Cycle {
  id: string
  taskName: string
  minutesAmount: number
  startDate: Date
  finishDate?: Date
  interruptDate?: Date
}

export interface CycleContextData {
  currentCycle: Cycle | null
  historyList: Cycle[]
  secondsPassed: number
  cycleDispatch: Dispatch<CycleActions>
  startNewCycle: ({ taskName, minutesAmount }: StartNewCycleParams) => void,
  interruptCurrentCycle: () => void,
  finishCurrentCycle: () => void,
}

export type ActionsFunctionsObj = {
  [K in ActionTypes]: () => CycleContextData
}

export interface CycleContextProviderProps {
  children: ReactNode
}

export interface StartNewCycleParams {
  taskName: string
  minutesAmount: number
}
