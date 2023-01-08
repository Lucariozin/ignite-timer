import { Cycle } from '../types'

export const compareCycles = (cycleOne: Cycle, cycleTwo: Cycle) => {
  let cyclesAreEqual = true

  if (cycleOne.id !== cycleTwo.id) cyclesAreEqual = false

  if (cycleOne.taskName !== cycleTwo.taskName) cyclesAreEqual = false

  if (cycleOne.minutesAmount !== cycleTwo.minutesAmount) cyclesAreEqual = false

  if (cycleOne.startDate.getTime() !== cycleTwo.startDate.getTime()) cyclesAreEqual = false

  if (!cycleOne.interruptDate && cycleTwo.interruptDate || cycleOne.interruptDate && !cycleTwo.interruptDate) cyclesAreEqual = false

  if (cycleOne.interruptDate && cycleTwo.interruptDate && (cycleOne.interruptDate.getTime() !== cycleTwo.interruptDate.getTime())) cyclesAreEqual = false

  if (!cycleOne.finishDate && cycleTwo.finishDate || cycleOne.finishDate && !cycleTwo.finishDate) cyclesAreEqual = false

  if (cycleOne.finishDate && cycleTwo.finishDate && (cycleOne.finishDate.getTime() !== cycleTwo.finishDate.getTime())) cyclesAreEqual = false

  return cyclesAreEqual
}
