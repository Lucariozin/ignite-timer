import { SubmitHandler } from 'react-hook-form'

import { Circle } from 'phosphor-react'

import { useCycleForm } from '@contexts/CycleFormContext'
import { CycleFormInputs } from '@contexts/CycleFormContext/types'

import { useCycle } from '@contexts/CycleContext'

import { StartNewCycleButton } from './components/StartNewCycleButton'
import { InterruptCycleButton } from './components/InterruptCycleButton'
import { MinutesAmountContainer } from './components/MinutesAmountContainer'
import { TaskNameContainer } from './components/TaskNameContainer'

import {
  CycleForm,
  InputsContainer,
  CountDownDisplayContainer,
  DigitCard,
  Separator,
} from './Home.styles'

export const Home = () => {
  const { register, handleSubmit, watch, reset, setValue, clearErrors, formState: { errors } } = useCycleForm()

  const taskName = watch('taskName')
  const minutesAmount = watch('minutesAmount')

  const { currentCycle, secondsPassed, startNewCycle, interruptCurrentCycle } = useCycle()

  const minutes = Math.floor(secondsPassed / 60)
  const seconds = Math.floor(secondsPassed % 60)

  const countDownMinutes = String(currentCycle && !currentCycle.finishDate && !currentCycle.interruptDate ? minutes === 0 && seconds > 0 ? currentCycle.minutesAmount - 1 : currentCycle.minutesAmount - minutes : 0).padStart(2, '0')
  const countDownSeconds = String(seconds > 0 ? 60 - seconds : 0).padStart(2, '0')

  const startNewCycleButtonIsDisabled = !taskName || !minutesAmount || !!errors.minutesAmount || !!errors.taskName
  const interruptCycleButtonIsVisible = currentCycle && !currentCycle.interruptDate && !currentCycle.finishDate

  document.title = interruptCycleButtonIsVisible ? `${countDownMinutes}:${countDownSeconds}` : 'Ignite Timer'

  const clearMinutesAmountError = () => clearErrors('minutesAmount')

  const handleInterruptCurrentCycle = () => {
    interruptCurrentCycle()

    reset()
  }

  const handleCycleFormSubmit: SubmitHandler<CycleFormInputs> = (data) => {
    if (startNewCycleButtonIsDisabled) return

    startNewCycle({
      taskName: data.taskName,
      minutesAmount: Number(data.minutesAmount)
    })

    reset()
  }

  return (
    <CycleForm onSubmit={handleSubmit(handleCycleFormSubmit)}>
      <InputsContainer>
        <TaskNameContainer register={register} isError={!!errors.taskName?.message} />

        <MinutesAmountContainer
          minutesAmount={minutesAmount}
          register={register}
          setValue={setValue}
          clearMinutesAmountError={clearMinutesAmountError}
          isError={!!errors.minutesAmount?.message}
        />
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
        <InterruptCycleButton interruptCurrentCycle={handleInterruptCurrentCycle} />
      ) : (
        <StartNewCycleButton isDisabled={startNewCycleButtonIsDisabled} />
      )}
    </CycleForm>
  )
}
