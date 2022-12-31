import { useForm, SubmitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { cycleFormZodSchema } from './cycleFormZodSchema'

import { Circle } from 'phosphor-react'

import {
  CycleForm,
  InputsContainer,
  CountDownDisplayContainer,
  DigitCard,
  Separator,
} from './styles'

import { useCycle } from '@contexts/CycleContext'

import { StartNewCycleButton } from './components/StartNewCycleButton'
import { InterruptCycleButton } from './components/InterruptCycleButton'
import { MinutesAmountContainer } from './components/MinutesAmountContainer'
import { TaskNameContainer } from './components/TaskNameContainer'

export interface CycleFormInputs {
  taskName: string
  minutesAmount: string
}

export const Home = () => {
  const { register, handleSubmit, watch, setValue } = useForm<CycleFormInputs>({
    resolver: zodResolver(cycleFormZodSchema),
  })
  
  const taskName = watch('taskName')
  const minutesAmount = watch('minutesAmount')

  const { currentCycle, secondsPassed, startNewCycle, interruptCurrentCycle } = useCycle()

  const minutes = Math.floor(secondsPassed / 60)
  const seconds = Math.floor(secondsPassed % 60)

  const countDownMinutes = String(currentCycle && !currentCycle.finishDate && !currentCycle.interruptDate ? minutes === 0 && seconds > 0 ? currentCycle.minutesAmount - 1 : currentCycle.minutesAmount - minutes : 0).padStart(2, '0')
  const countDownSeconds = String(seconds > 0 ? 60 - seconds : 0).padStart(2, '0')

  console.log(countDownMinutes + ":" + countDownSeconds)

  const handleCycleFormSubmit: SubmitHandler<CycleFormInputs> = (data, event) => {
    event?.preventDefault()

    if (startNewCycleButtonIsDisabled) return

    startNewCycle({
      taskName: data.taskName,
      minutesAmount: Number(data.minutesAmount)
    })
  }

  const startNewCycleButtonIsDisabled = !taskName || !minutesAmount
  const interruptCycleButtonIsVisible = currentCycle && !currentCycle.interruptDate && !currentCycle.finishDate

  return (
    <CycleForm onSubmit={handleSubmit(handleCycleFormSubmit)}>
      <InputsContainer>
        <TaskNameContainer register={register} />

        <MinutesAmountContainer minutesAmount={minutesAmount} register={register} setValue={setValue} />
      </InputsContainer>

      <CountDownDisplayContainer>
        <DigitCard>{countDownMinutes[0]}</DigitCard>
        <DigitCard>{countDownMinutes[1]}</DigitCard>

        <Separator>
          <Circle weight="fill" />
          <Circle weight="fill" />
        </Separator>

        <DigitCard>{countDownSeconds[0]}</DigitCard>
        <DigitCard>{countDownSeconds[1]}</DigitCard>
      </CountDownDisplayContainer>

      {interruptCycleButtonIsVisible ? (
        <InterruptCycleButton interruptCurrentCycle={interruptCurrentCycle} />
      ) : (
        <StartNewCycleButton isDisabled={startNewCycleButtonIsDisabled} />
      )}
    </CycleForm>
  )
}
