import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Cycle } from '@contexts/CycleContext/types'

import { CycleStatus } from '@components/CycleStatus'

import { HistoryListContainer, HistoryListHeader, HistoryListScrollContainer, HistoryRow, Item } from './HistoryList.styles'
import { useState } from 'react'

interface HistoryListProps {
  historyList: Cycle[]
}

export const HistoryList = ({ historyList }: HistoryListProps) => {
  // if (!historyList || typeof historyList === 'number' || typeof historyList === 'string') return null

  const [newHistoryList, setNewHistoryList] = useState([
    {
      id: '1',
      minutesAmount: 5,
      startDate: new Date(),
      taskName: 'Projeto 1',
      finishDate: undefined,
      interruptDate: undefined,
    },
    {
      id: '2',
      minutesAmount: 10,
      startDate: new Date(new Date().getTime() - 1000),
      taskName: 'Projeto 2',
      finishDate: new Date(),
      interruptDate: undefined,
    },{
      id: '3',
      minutesAmount: 30,
      startDate: new Date(new Date().getTime() - 4000),
      taskName: 'Projeto 3',
      finishDate: undefined,
      interruptDate: new Date(),
    },
  ])

  const formatMinutesAmount = (minutesAmount: number) => {
    const formattedMinutesAmount = minutesAmount === 1 ? `${minutesAmount} minuto` : `${minutesAmount} minutos`

    return formattedMinutesAmount
  }

  const formatStartDate = (startDate: Date) => {
    const formattedDate = formatDistance(startDate, new Date(), { locale: ptBR, addSuffix: true })

    return formattedDate
  }

  return (
    <HistoryListContainer>
      <HistoryListHeader>
        <Item>Tarefa</Item>
        <Item>Duração</Item>
        <Item>Início</Item>
        <Item>Status</Item>
      </HistoryListHeader>

      <HistoryListScrollContainer>

        {newHistoryList.map((cycle) => {
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
