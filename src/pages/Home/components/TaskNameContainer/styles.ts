import styled from 'styled-components'

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

export const TaskNameInput = styled(Input)`
  max-width: 18.5rem;
`
