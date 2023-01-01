import { FormProvider, useForm, useFormContext } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { zodSchema } from './zodSchema'

import { CycleFormContextProviderProps, CycleFormInputs } from './types'

export const CycleFormContextProvider = ({ children }: CycleFormContextProviderProps) => {
  const cycleForm = useForm<CycleFormInputs>({
    resolver: zodResolver(zodSchema),
  })

  return (
    <FormProvider {...cycleForm}>
      {children}
    </FormProvider>
  )
}

export const useCycleForm = () => useFormContext<CycleFormInputs>()
