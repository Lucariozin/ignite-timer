import { Cycle, CycleContextData } from '../types'

export const localStorageStateID = 'ignite-timer:state:1'

export const persistCycleContextStateInLocalStorage = (state: CycleContextData) => {
  const stateToJSON = JSON.stringify(state)

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

  return {
    ...parsedState,
    currentCycle: formattedCurrentCycle,
    historyList: formattedHistoryList,
  }
}
