import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0 3rem 0 3.375rem;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: 0 0rem 0 0.375rem;
  }
`

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-top: 3.125rem;
`

export const HistoryListSideScrollContainer = styled.div`
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const EmptyHistoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 6rem;
`

export const EmptyHistoryListText = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.gray[300]};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 1.8rem;
  }
`

export const EmptyHistoryListImg = styled.img`
  max-width: 25rem;
  width: 100%;
`
