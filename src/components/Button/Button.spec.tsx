import { render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'

import { Button } from '.'

describe('<Button />', () => {
  it('should render <Button /> applying the "green" variant by default.', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>Random text</Button>
      </ThemeProvider>
    )

    const button = getByText('Random text')

    const defaultVariantBackgroundColor = theme.palette.green[500]

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`background-color: ${defaultVariantBackgroundColor}`)
  })

  it('should render <Button /> with the "red" variant.', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button variant="red">Random text</Button>
      </ThemeProvider>
    )

    const button = getByText('Random text')

    const redVariantBackgroundColor = theme.palette.red[600]

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`background-color: ${redVariantBackgroundColor}`)
  })
})
