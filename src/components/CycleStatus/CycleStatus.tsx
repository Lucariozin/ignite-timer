import { Cycle } from '@contexts/CycleContext/types'

import { Container, StatusBall } from './CycleStatus.styles'

export type Status = 'in-progress' | 'interrupted' | 'finished'

interface CycleStatusProps {
  cycle: Cycle
}

export const CycleStatus = ({ cycle }: CycleStatusProps) => {
  const isInterrupted = !!cycle.interruptDate
  const isFinished = !!cycle.finishDate

  const currentStatus: Status = !isInterrupted && !isFinished ? 'in-progress' : isInterrupted ? 'interrupted' : 'finished'

  const statusTexts = {
    'in-progress': 'Em andamento',
    'interrupted': 'Interrompido',
    'finished': 'Concluído',
  }

  const currentStatusText = statusTexts[currentStatus]

  return (
    <Container>
      <StatusBall status={currentStatus} data-testid="status-ball" />

      {currentStatusText}
    </Container>
  )
}
