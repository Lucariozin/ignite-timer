import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Cycle } from '@contexts/CycleContext/types'

import { CycleStatus } from '@components/CycleStatus'

import { HistoryListContainer, HistoryListHeader, HistoryListScrollContainer, HistoryRow, Item } from './HistoryList.styles'

interface HistoryListProps {
  historyList: Cycle[]
}

export const HistoryList = ({ historyList }: HistoryListProps) => {
  if (!historyList || typeof historyList === 'number' || typeof historyList === 'string') return null

  const formatMinutesAmount = (minutesAmount: number) => {
    const formattedMinutesAmount = minutesAmount === 1 ? `${minutesAmount} minuto` : `${minutesAmount} minutos`

    return formattedMinutesAmount
  }

  const formatStartDate = (startDate: Date) => {
    const formattedDate = formatDistance(startDate, new Date(), { locale: ptBR, addSuffix: true })

    return formattedDate
  }

  console.log('HISTORY LIST COMPONENT', historyList)
  console.log('\n ---------------------------------------------------')

  return (
    <HistoryListContainer>
      <HistoryListHeader>
        <Item>Tarefa</Item>
        <Item>Duração</Item>
        <Item>Início</Item>
        <Item>Status</Item>
      </HistoryListHeader>

      <HistoryListScrollContainer>

        {historyList.map((cycle) => {
          const minutesAmount = formatMinutesAmount(cycle.minutesAmount)
          const startDate = formatStartDate(cycle.startDate)

          return (
            <HistoryRow key={cycle.id} data-testid="history-row">
              <Item>{cycle.taskName}</Item>
              <Item>{minutesAmount}</Item>
              <Item>{startDate}</Item>

              <CycleStatus cycle={cycle} />
            </HistoryRow>
          )
        })}

      </HistoryListScrollContainer>
    </HistoryListContainer>
  )
}
