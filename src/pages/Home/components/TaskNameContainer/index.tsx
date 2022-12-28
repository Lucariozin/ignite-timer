import { UseFormRegister } from "react-hook-form"

import { CycleFormInputs } from "../.."

import { Label, TaskNameInput } from "./styles"

interface TaskNameContainerProps {
  register: UseFormRegister<CycleFormInputs>
}

export const TaskNameContainer = ({ register }: TaskNameContainerProps) => {
  return (
    <>
      <Label htmlFor="task-name">Vou trabalhar em</Label>

      <TaskNameInput
        type="text"
        id="task-name"
        placeholder="Dê um nome para o seu projeto"
        list="saved-projects-list"
        defaultValue=""
        {...register('taskName')}
      />

      <datalist id="saved-projects-list">
        <option value="Projeto 1">Projeto 1</option>
        <option value="Projeto 2">Projeto 2</option>
        <option value="Projeto 3">Projeto 3</option>
        <option value="Projeto 4">Projeto 4</option>
      </datalist>
    </>
  )
}
