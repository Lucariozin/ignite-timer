import { CycleActions } from './actions'
import { ActionsFunctionsObj, Cycle, CycleContextData } from './types'

export const reducer = (state: CycleContextData, action: CycleActions): CycleContextData => {
  const { type, payload } = action

  const actionsFunctionsObj: ActionsFunctionsObj = {
    'START_NEW_CYCLE': () => {
      if (!payload?.newCycle) return state

      const currentCycle: Cycle = { ...payload.newCycle }

      return {
        ...state,
        currentCycle,
      }
    },
    'FINISH_CURRENT_CYCLE': () => {
      if (!state.currentCycle) return state

      const currentCycle: Cycle = { ...state.currentCycle, finishDate: new Date() }

      return {
        ...state,
        currentCycle,
      }
    },
    'INTERRUPT_CURRENT_CYCLE': () => {
      if (!state.currentCycle) return state

      const currentCycle: Cycle = { ...state.currentCycle, interruptDate: new Date() }

      return {
        ...state,
        currentCycle,
      }
    },
    'ADD_CURRENT_CYCLE_TO_HISTORY_LIST': () => {
      if (!state.currentCycle) return state

      const currentCycle: Cycle = { ...state.currentCycle }
      const historyList: Cycle[] = [currentCycle, ...state.historyList]

      return {
        ...state,
        historyList,
      }
    },
    'UPDATE_CURRENT_CYCLE_ON_HISTORY_LIST': () => {
      if (!state.currentCycle || !payload?.currentCycleId || !payload.newCycleData) return state

      const { currentCycleId, newCycleData } = payload

      const newHistoryList = state.historyList.map((cycle) => cycle.id === currentCycleId ? { ...cycle, ...newCycleData } : cycle)

      return {
        ...state,
        historyList: newHistoryList,
      }
    },
  }

  const actionFunction = actionsFunctionsObj[type]

  if (actionFunction) return actionFunction()

  return state
}
