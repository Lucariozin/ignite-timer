import { Minus, Plus } from 'phosphor-react'

import { CycleForm, InputsContainer, Label, TaskInput, MinutesAmountInput, Span, MinutesAmountContainer, SubtractButton, AddButton } from './styles'

export const Home = () => {
  return (
    <CycleForm>
      <InputsContainer>
        <Label htmlFor="task">Vou trabalhar em</Label>
        <TaskInput type="text" id="task" placeholder="Dê um nome para o seu projeto" />

        <Label htmlFor="minutes-amount">durante</Label>

        <MinutesAmountContainer>
          <SubtractButton type="button" title="Subtrair cinco minutos">
            <Minus size={16} />
          </SubtractButton>

          <MinutesAmountInput type="number" id="minutes-amount" placeholder="00" />

          <AddButton type="button" title="Somar cinco minutos">
            <Plus size={16} />
          </AddButton>
        </MinutesAmountContainer>

        <Span>minutos.</Span>
      </InputsContainer>
    </CycleForm>
  )
}
