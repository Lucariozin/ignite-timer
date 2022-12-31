import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { useCycle } from '@contexts/CycleContext'

import { CycleStatus } from './components/CycleStatus'

import { Container, HistoryListContainer, HistoryListHeader, HistoryListScrollContainer, HistoryRow, Item, Title } from './styles'

export const History = () => {
  const { historyList } = useCycle()

  const formatMinutesAmount = (minutesAmount: number) => {
    const formattedMinutesAmount = minutesAmount === 1 ? `${minutesAmount} minuto` : `${minutesAmount} minutos`

    return formattedMinutesAmount
  }

  const formatStartDate = (startDate: Date) => {
    const formattedDate = formatDistance(startDate, new Date(), { locale: ptBR, addSuffix: true })

    return formattedDate
  }

  console.log(historyList)

  return (
    <Container>
      <Title>Meu histórico</Title>

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
              <HistoryRow key={cycle.id}>
                <Item>{cycle.taskName}</Item>
                <Item>{minutesAmount}</Item>
                <Item>{startDate}</Item>

                <CycleStatus cycle={cycle} />
              </HistoryRow>
            )
          })}

        </HistoryListScrollContainer>
      </HistoryListContainer>
    </Container>
  )
}
