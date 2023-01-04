import { render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'

import { Button } from '.'

describe('<Button />', () => {
  it('should render <Button /> correctly.', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>Botão de teste</Button>
      </ThemeProvider>
    )

    const button = getByText('Botão de teste')

    expect(button).toBeInTheDocument()
  })
})
