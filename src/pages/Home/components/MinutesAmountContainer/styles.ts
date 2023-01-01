import styled from 'styled-components'

interface ContainerProps {
  isError: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 4.5rem;
  transition: border .1s;
  border-bottom: 2px solid ${({ theme, isError }) => isError ? theme.palette.red[500] : theme.palette.gray[400]};
  padding: 8px 0;

  &:has(input:focus-visible) {
    border-bottom: 2px solid ${({ theme, isError }) => isError ? theme.palette.red[500] : theme.palette.green[400]};
  }
`

const BaseAddOrSubtractButton = styled.button`
  max-height: 16px;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.gray[400]};
  cursor: pointer;
  border-radius: 2px;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.green[400]};
  }
`

export const SubtractButton = styled(BaseAddOrSubtractButton)``

export const AddButton = styled(BaseAddOrSubtractButton)``

export const MinutesAmountInput = styled.input`
  max-width: 1.3125rem;
  font-size: 1.125rem;
  font-weight: 700;
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.palette.gray[400]};
  background-color: transparent;

  &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const Label = styled.label`
  font-size: 1.125rem;
  font-weight: 700;
`

export const Span = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
`
