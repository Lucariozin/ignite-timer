import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { Minus, Plus } from 'phosphor-react'

import { CycleFormInputs } from '@contexts/CycleFormContext/types'

import { Wrapper, AddButton, Container, Label, MinutesAmountInput, Span, SubtractButton } from './styles'

interface MinutesAmountContainerProps {
  minutesAmount: string
  isError: boolean
  register: UseFormRegister<CycleFormInputs>
  setValue: UseFormSetValue<CycleFormInputs>
  clearMinutesAmountError: () => void
}

export const MinutesAmountContainer = ({ minutesAmount, register, setValue, clearMinutesAmountError, isError = false }: MinutesAmountContainerProps) => {
  const handleSubtractMinutesAmount = () => {
    const calculation = Number(minutesAmount) - 5
    const newMinutesAmount = String(calculation >= 5 ? calculation : 5)

    setValue('minutesAmount', newMinutesAmount)

    clearMinutesAmountError()
  }

  const handleAddMinutesAmount = () => {
    const calculation = !minutesAmount ? 5 : Number(minutesAmount) + 5
    const newMinutesAmount = String(calculation <= 60 ? calculation : 60)

    setValue('minutesAmount', newMinutesAmount)

    clearMinutesAmountError()
  }

  return (
    <Container>
      <Label htmlFor="minutes-amount">durante</Label>

      <Wrapper isError={isError}>
        <SubtractButton type="button" title="Subtrair cinco minutos" onClick={handleSubtractMinutesAmount}>
          <Minus size={16} />
        </SubtractButton>

        <MinutesAmountInput
          type="number"
          id="minutes-amount"
          placeholder="00"
          defaultValue=""
          {...register('minutesAmount')}
        />

        <AddButton type="button" title="Somar cinco minutos" onClick={handleAddMinutesAmount}>
          <Plus size={16} />
        </AddButton>
      </Wrapper>

      <Span>minutos.</Span>
    </Container>
  )
}
