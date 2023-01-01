import * as zod from 'zod'

const errorMessages = {
  emptyTaskName: 'O nome da sua tarefa não pode estar em branco',
  minMinutesAmount: 'A duração mínima é de 5 minutos',
  maxMinutesAmount: 'A duração máxima é de 60 minutos',
  minutesAmountRange: 'A duração da sua tarefa precisa estar entre 5 e 60 minutos',
}

export const zodSchema = zod.object({
  taskName: zod
    .string()
    .trim()
    .min(1, errorMessages.emptyTaskName),
  minutesAmount: zod
    .string()
    .trim()
    .min(1, errorMessages.minMinutesAmount)
    .max(2, errorMessages.maxMinutesAmount)
    .refine((value) => Number(value) >= 5 && Number(value) <= 60, errorMessages.minutesAmountRange)
    .transform((value) => Number(value)),
})
