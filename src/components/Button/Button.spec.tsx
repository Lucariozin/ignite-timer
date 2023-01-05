import { customRender } from '@tests/customRender'

import { theme } from '@styles/theme'

import { Button } from '.'

describe('<Button />', () => {
  it('should render <Button /> applying the "green" variant by default.', () => {
    const { getByText } = customRender(<Button>Random text</Button>)

    const button = getByText('Random text')

    const defaultVariantBackgroundColor = theme.palette.green[500]

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`background-color: ${defaultVariantBackgroundColor}`)
  })

  it('should render <Button /> with the "red" variant.', () => {
    const { getByText } = customRender(<Button variant="red">Random text</Button>)

    const button = getByText('Random text')

    const redVariantBackgroundColor = theme.palette.red[600]

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`background-color: ${redVariantBackgroundColor}`)
  })
})
