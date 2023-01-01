import { Cycle, CycleContextData } from './types'

type Payload = {
  newCycle?: Cycle
  currentCycleId?: string
  newCycleData?: Partial<Cycle>
  newSecondsPassed?: number
  newState?: CycleContextData
} | null

export type ActionTypes =
  | 'START_NEW_CYCLE'
  | 'FINISH_CURRENT_CYCLE'
  | 'INTERRUPT_CURRENT_CYCLE'
  | 'SET_SECONDS_PASSED'
  | 'ADD_CURRENT_CYCLE_TO_HISTORY_LIST'
  | 'UPDATE_CURRENT_CYCLE_ON_HISTORY_LIST'
  | 'UPDATE_ALL_STATE'

export type CycleActions = {
  type: ActionTypes
  payload?: Payload
}
