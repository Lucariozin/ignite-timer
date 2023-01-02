import styled from 'styled-components'

export const CycleForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 42.5rem;
  width: 100%;
  margin: 4.5rem auto 0 auto;
`

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;

  & label:nth-child(3) {
    font-weight: 500;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    align-items: center;
  }
`

export const CountDownDisplayContainer = styled.div`
  display: flex;
  max-width: 40.5rem;
  width: 100%;
  align-items: center;
  gap: 1rem;
  margin-top: 3.75rem;

  ${({ theme }) => theme.breakpoints.down(640)} {
    max-width: 34rem;
  }

  ${({ theme }) => theme.breakpoints.down(500)} {
    max-width: 28rem;
  }

  ${({ theme }) => theme.breakpoints.down(410)} {
    max-width: 23rem;
  }
`

export const DigitCard = styled.span`
  display: flex;
  max-height: 12.375rem;
  align-items: center;
  padding: 1rem;

  font-family: 'Roboto Mono', sans-serif;
  font-weight: 700;
  font-size: 10rem;

  background-color: ${({ theme }) => theme.palette.gray[550]};
  border-radius: 8px;
  user-select: none;

  ${({ theme }) => theme.breakpoints.down(640)} {
    font-size: 8rem;
    max-height: 10.375rem;
  }

  ${({ theme }) => theme.breakpoints.down(500)} {
    font-size: 6rem;
    max-height: 8.375rem;
  }

  ${({ theme }) => theme.breakpoints.down(410)} {
    font-size: 4rem;
    max-height: 6.375rem;
  }
`

export const Separator = styled.span`
  display: flex;
  margin: 0 auto;
  gap: 1.8rem;
  margin-top: 2rem;
  flex-direction: column;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.palette.green[500]};
  user-select: none;

  ${({ theme }) => theme.breakpoints.down(640)} {
    margin-top: 1rem;
    font-size: 1.8rem;
  }

  ${({ theme }) => theme.breakpoints.down(410)} {
    margin-top: 1rem;
    font-size: 1rem;
  }
`
