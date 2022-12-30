import { Cycle } from './types'

type Payload = {
  newCycle?: Cycle
  currentCycleId?: string
  newCycleData?: Partial<Cycle>
} | null

export type ActionTypes =
  | 'START_NEW_CYCLE'
  | 'FINISH_CURRENT_CYCLE'
  | 'INTERRUPT_CURRENT_CYCLE'
  | 'ADD_CURRENT_CYCLE_TO_HISTORY_LIST'
  | 'UPDATE_CURRENT_CYCLE_ON_HISTORY_LIST'

export type CycleActions = {
  type: ActionTypes
  payload?: Payload
}
