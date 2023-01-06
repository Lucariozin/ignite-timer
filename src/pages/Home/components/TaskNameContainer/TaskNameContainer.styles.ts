import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`

export const Label = styled.label`
  font-size: 1.125rem;
  font-weight: 700;
  white-space: nowrap;
`

const Input = styled.input`
  width: 100%;
  font-size: 1.125rem;
  font-weight: 700;
  padding: 8px;
  outline: 0;
  color: ${({ theme }) => theme.palette.gray[400]};
  background-color: transparent;
  border: 0;
`

interface TaskNameInputProps {
  isError: boolean
}

export const TaskNameInput = styled(Input)<TaskNameInputProps>`
  max-width: 18.5rem;
  transition: border .1s;
  border-bottom: 2px solid ${({ theme, isError }) => isError ? theme.palette.red[500] : theme.palette.gray[400]};

  &:focus-visible {
    ${({ theme, isError }) => !isError && css`
      border-bottom: 2px solid ${theme.palette.green[400]};
    `}
  }
`
