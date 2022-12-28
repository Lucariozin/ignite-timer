import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isDisabled?: boolean
}

export const Button = ({ children, isDisabled = false, ...props }: ButtonProps) => {
  return (
    <Container isDisabled={isDisabled} {...props}>
      {children}
    </Container>
  )
}
