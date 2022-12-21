import styled from 'styled-components'

export const CycleForm = styled.form`
  max-width: 41rem;
  width: 100%;
  margin: 4.5rem auto 0 auto;
`

export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & label:nth-child(3) {
    font-weight: 500;
  }
`

export const Label = styled.label`
  font-size: 1.125rem;
  font-weight: 700;
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
  border-bottom: 2px solid ${({ theme }) => theme.palette.gray[400]};
`

export const TaskInput = styled(Input)`
  max-width: 17rem;
`

export const MinutesAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 4.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.palette.gray[400]};
  padding: 8px 0;
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

export const Span = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
`
