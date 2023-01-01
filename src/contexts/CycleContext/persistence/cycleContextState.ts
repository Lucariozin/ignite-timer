import { CycleContextData } from '../types'

export const localStorageStateID = 'ignite-timer:state:1'

export const persistCycleContextStateInLocalStorage = (state: CycleContextData) => {
  const stateToJSON = JSON.stringify(state)

  localStorage.setItem(localStorageStateID, stateToJSON)
}

export const recoverCycleContextStateFromLocalStorage = (): CycleContextData | null => {
  const stateFromLocalStorage = localStorage.getItem(localStorageStateID)

  if (!stateFromLocalStorage || stateFromLocalStorage === 'undefined') return null

  const parsedState: CycleContextData = JSON.parse(stateFromLocalStorage)

  if (!parsedState.currentCycle) return null

  const formattedCurrentCycle: CycleContextData['currentCycle'] = {
    ...parsedState.currentCycle,
    startDate: new Date(parsedState.currentCycle.startDate),
    finishDate: parsedState.currentCycle.finishDate ? new Date(parsedState.currentCycle.finishDate) : undefined,
    interruptDate: parsedState.currentCycle.interruptDate ? new Date(parsedState.currentCycle.interruptDate) : undefined,
  }

  const formattedHistoryList: CycleContextData['historyList'] = parsedState.historyList.map((cycle) => ({
    id: cycle.id,
    minutesAmount: cycle.minutesAmount,
    taskName: cycle.taskName,
    startDate: new Date(cycle.startDate),
    finishDate: cycle.finishDate ? new Date(cycle.finishDate) : undefined,
    interruptDate: cycle.interruptDate ? new Date(cycle.interruptDate) : undefined,
  }))

  return {
    ...parsedState,
    currentCycle: formattedCurrentCycle,
    historyList: formattedHistoryList,
  }
}
