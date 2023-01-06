import { HandPalm } from 'phosphor-react'

import { Button } from '@components/Button'

interface InterruptCycleButtonProps {
  interruptCurrentCycle: () => void
}

export const InterruptCycleButton = ({ interruptCurrentCycle }: InterruptCycleButtonProps) => {
  return (
    <Button type="button" variant="red" onClick={interruptCurrentCycle}>
      <HandPalm size={28} /> Interromper
    </Button>
  )
}
