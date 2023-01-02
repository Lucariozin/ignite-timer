import styled, { css } from 'styled-components'

export const Container = styled.div`
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

export const HistoryListContainer = styled.div`
  margin-top: 2.2rem;
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    min-width: 48rem;
  }
`

const BaseRow = css`
  display: flex;
  gap: 3.5rem;
  padding: 0 1.5rem;
  border-top: 4px solid ${({ theme }) => theme.palette.gray[600]};

  & > div:nth-child(1) {
    max-width: 24.5rem;
    width: 100%;
  }

  & > div:nth-child(2) {
    min-width: 4.5rem;
  }

  & > div:nth-child(3) {
    min-width: 10rem;
  }

  & > div:nth-child(4) {
    min-width: 8.25rem;
  }
`

export const HistoryListHeader = styled.header`
  ${BaseRow}

  margin-right: 6px;
  border-radius: 8px 8px 0 0;
  background-color: ${({ theme }) => theme.palette.gray[500]};

  & > div {
    font-weight: 700;
  }
`

export const Item = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  text-align: left;
  padding: 1.2rem 0;
`

export const HistoryListScrollContainer = styled.div`
  height: 26.3rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.gray[400]};
    border-radius: 20px;
  }

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.palette.gray[400]};
`

export const HistoryRow = styled.div`
  ${BaseRow}

  background-color: ${({ theme }) => theme.palette.gray[550]};

  & > div {
    font-weight: 400;
    color: ${({ theme }) => theme.palette.gray[200]};
  }
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
