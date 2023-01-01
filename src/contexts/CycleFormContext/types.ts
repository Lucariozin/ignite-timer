import { ReactNode } from 'react'

export interface CycleFormContextProviderProps {
  children: ReactNode
}

export interface CycleFormInputs {
  taskName: string
  minutesAmount: string
}
