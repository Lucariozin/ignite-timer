import * as zod from 'zod'

export const zodSchema = zod.object({
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
