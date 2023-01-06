import { Cycle, CycleContextData } from '../types'

export const localStorageStateID = 'ignite-timer:state:1'

export const persistCycleContextStateInLocalStorage = (state: CycleContextData) => {
  const historyListOrderedByStartDate = state.historyList.sort((a, b) => a.startDate.getTime() - b.startDate.getTime())

  const stateToJSON = JSON.stringify({ ...state, historyList: historyListOrderedByStartDate })

  localStorage.setItem(localStorageStateID, stateToJSON)
}

const formatCycle = (cycle: Cycle) => ({
  ...cycle,
  startDate: new Date(cycle.startDate),
  finishDate: cycle.finishDate ? new Date(cycle.finishDate) : undefined,
  interruptDate: cycle.interruptDate ? new Date(cycle.interruptDate) : undefined,
})

export const recoverCycleContextStateFromLocalStorage = (): CycleContextData | null => {
  const stateFromLocalStorage = localStorage.getItem(localStorageStateID)

  if (!stateFromLocalStorage || stateFromLocalStorage === 'undefined') return null

  const parsedState: CycleContextData = JSON.parse(stateFromLocalStorage)

  if (!parsedState.currentCycle) return null

  const formattedCurrentCycle: Cycle = formatCycle(parsedState.currentCycle)
  const formattedHistoryList: CycleContextData['historyList'] = parsedState.historyList.map((cycle) => formatCycle(cycle))

  const historyListOrderedByStartDate = formattedHistoryList.sort((a, b) => a.startDate.getTime() - b.startDate.getTime())

  return {
    ...parsedState,
    currentCycle: formattedCurrentCycle,
    historyList: historyListOrderedByStartDate,
  }
}
