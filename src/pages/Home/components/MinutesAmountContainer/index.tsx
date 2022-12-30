import { Minus, Plus } from 'phosphor-react'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'

import { CycleFormInputs } from '@pages/Home'

import { AddButton, Container, Label, MinutesAmountInput, Span, SubtractButton } from './styles'

interface MinutesAmountContainerProps {
  minutesAmount: string
  register: UseFormRegister<CycleFormInputs>
  setValue: UseFormSetValue<CycleFormInputs>
}

export const MinutesAmountContainer = ({ minutesAmount, register, setValue }: MinutesAmountContainerProps) => {
  const handleSubtractMinutesAmount = () => {
    const calculation = Number(minutesAmount) - 5
    const newMinutesAmount = String(calculation >= 5 ? calculation : 5)

    setValue('minutesAmount', newMinutesAmount)
  }

  const handleAddMinutesAmount = () => {
    const calculation = Number(minutesAmount) + 5
    const newMinutesAmount = String(calculation <= 60 ? calculation : 60)

    setValue('minutesAmount', newMinutesAmount)
  }

  return (
    <>
      <Label htmlFor="minutes-amount">durante</Label>

      <Container>
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
      </Container>

      <Span>minutos.</Span>
    </>
  )
}