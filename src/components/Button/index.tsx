import { ButtonHTMLAttributes, ReactNode } from 'react'

import { useTheme } from 'styled-components'

import { Container } from './styles'

type variants = 'green' | 'red'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isDisabled?: boolean
  variant?: variants
}

export const Button = ({ children, isDisabled = false, variant = 'green', ...props }: ButtonProps) => {
  const { palette } = useTheme()

  const variants = {
    green: {
      main: palette.green[500],
      light: palette.green[400],
    },
    red: {
      main: palette.red[600],
      light: palette.red[500],
    },
  }

  const variantColors = variants[variant]

  return (
    <Container variantColors={variantColors} isDisabled={isDisabled} {...props}>
      {children}
    </Container>
  )
}
