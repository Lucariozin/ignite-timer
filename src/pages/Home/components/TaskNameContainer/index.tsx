import { UseFormRegister } from 'react-hook-form'

import { CycleFormInputs } from '@contexts/CycleFormContext/types'
import { useCycle } from '@contexts/CycleContext'

import { Container, Label, TaskNameInput } from './styles'

interface TaskNameContainerProps {
  isError: boolean
  register: UseFormRegister<CycleFormInputs>
}

export const TaskNameContainer = ({ register, isError = false }: TaskNameContainerProps) => {
  const { historyList } = useCycle()

  const dataListOptions = historyList.reverse().slice(0, 5).map((cycle) => ({ id: cycle.id, taskName: cycle.taskName }))

  return (
    <Container>
      <Label htmlFor="task-name">Vou trabalhar em</Label>

      <TaskNameInput
        type="text"
        id="task-name"
        placeholder="Dê um nome para o seu projeto"
        list="saved-projects-list"
        defaultValue=""
        {...register('taskName')}
        isError={isError}
      />

      <datalist id="saved-projects-list">

        {dataListOptions.map((option) => (
          <option key={option.id} value={option.taskName}>{option.taskName}</option>
        ))}

      </datalist>
    </Container>
  )
}
