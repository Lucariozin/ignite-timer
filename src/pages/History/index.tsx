import { useCycle } from '@contexts/CycleContext'

import { HistoryList } from './components/HistoryList'

import {
  Container,
  EmptyHistoryListContainer,
  EmptyHistoryListImg,
  EmptyHistoryListText,
  HistoryListSideScrollContainer,
  Title,
} from './styles'

export const History = () => {
  const { historyList } = useCycle()

  const historyListIsEmpty = !historyList.length

  return (
    <Container>
      {historyListIsEmpty ? (
        <EmptyHistoryListContainer>
          <EmptyHistoryListText>Você ainda não iniciou nenhum projeto...</EmptyHistoryListText>

          <EmptyHistoryListImg src="/img/empty-list-image.png" alt="" />
        </EmptyHistoryListContainer>
      ) : (
        <>
          <Title>Meu histórico</Title>

          <HistoryListSideScrollContainer>
            <HistoryList historyList={historyList} />
          </HistoryListSideScrollContainer>
        </>
      )}
    </Container>
  )
}
