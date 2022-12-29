import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Circle } from 'phosphor-react'

import {
  CycleForm,
  InputsContainer,
  CountDownDisplayContainer,
  DigitCard,
  Separator,
} from './styles'

import { StartNewCycleButton } from './components/StartNewCycleButton'
import { InterruptCycleButton } from './components/InterruptCycleButton'
import { MinutesAmountContainer } from './components/MinutesAmountContainer'
import { TaskNameContainer } from './components/TaskNameContainer'

export interface CycleFormInputs {
  taskName: string
  minutesAmount: string
}

interface Cycle {
  id: string
  taskName: string
  minutesAmount: number
  startDate: Date
  finishDate?: Date
  interruptDate?: Date
}

interface StartNewCycleParams {
  taskName: string
  minutesAmount: number
}

const cycleFormZodSchema = zod.object({
  taskName: zod
    .string()
    .trim()
    .min(1, 'O nome da sua tarefa não pode estar em branco'),
  minutesAmount: zod
    .string()
    .trim()
    .min(1, 'A duração mínima é de 5 minutos')
    .max(2, 'A duração máxima é de 60 minutos')
    .refine((value) => Number(value) >= 5 && Number(value) <= 60, 'A duração da sua tarefa precisa estar em 5 e 60 minutos')
    .transform((value) => Number(value)),
})

export const Home = () => {
  const { register, handleSubmit, watch, setValue } = useForm<CycleFormInputs>({
    resolver: zodResolver(cycleFormZodSchema),
  })

  const taskName = watch('taskName')
  const minutesAmount = watch('minutesAmount')

  const [currentCycle, setCurrentCycle] = useState<Cycle | null>()
  const [secondsPassed, setSecondsPassed] = useState(0)
  const [currentCycleIntervalID, setCurrentCycleIntervalID] = useState(0)

  const minutes = Math.floor(secondsPassed / 60)
  const seconds = Math.floor(secondsPassed % 60)

  const countDownMinutes = String(currentCycle && !currentCycle.finishDate && !currentCycle.interruptDate ? minutes === 0 && seconds > 0 ? currentCycle.minutesAmount - 1 : currentCycle.minutesAmount - minutes : 0).padStart(2, '0')
  const countDownSeconds = String(seconds > 0 ? 60 - seconds : 0).padStart(2, '0')

  console.log(countDownMinutes + ":" + countDownSeconds)

  const startNewCycleButtonIsDisabled = !taskName || !minutesAmount

  const startNewCycle = ({ taskName, minutesAmount }: StartNewCycleParams) => {
    const id = String(Math.floor(new Date().getTime() * Math.random()))

    const newCycle: Cycle = {
      id,
      taskName,
      minutesAmount,
      startDate: new Date(),
    }

    setCurrentCycle(newCycle)
  }

  const finishCurrentCycle = () => {
    setCurrentCycle((state) => {
      if (!state) return state

      return {
        ...state,
        finishDate: new Date(),
      }
    })

    setSecondsPassed(0)

    clearInterval(currentCycleIntervalID)
  }

  const interruptCurrentCycle = () => {
    setCurrentCycle((state) => {
      if (!state) return state

      return {
        ...state,
        interruptDate: new Date(),
      }
    })

    setSecondsPassed(0)

    clearInterval(currentCycleIntervalID)
  }

  const handleCycleFormSubmit: SubmitHandler<CycleFormInputs> = (data, event) => {
    event?.preventDefault()

    if (startNewCycleButtonIsDisabled) return

    startNewCycle({
      taskName: data.taskName,
      minutesAmount: Number(data.minutesAmount)
    })
  }

  useEffect(() => {
    if (!currentCycle || currentCycle?.finishDate || currentCycle?.interruptDate) return

    const intervalId = setInterval(() => {
      const newSecondsPassed = (new Date().getTime() - currentCycle.startDate.getTime()) / 1000
      const minutesPassed = newSecondsPassed / 60

      if (minutesPassed > currentCycle.minutesAmount) {
        finishCurrentCycle()

        return
      }

      setSecondsPassed(newSecondsPassed)
    }, 1000)

    setCurrentCycleIntervalID(intervalId)
  }, [currentCycle])

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

      {currentCycle && !currentCycle.interruptDate ? (
        <InterruptCycleButton interruptCurrentCycle={interruptCurrentCycle} />
      ) : (
        <StartNewCycleButton isDisabled={startNewCycleButtonIsDisabled} />
      )}
    </CycleForm>
  )
}
