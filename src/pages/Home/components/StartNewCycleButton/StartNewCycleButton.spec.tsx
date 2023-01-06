import userEvent from '@testing-library/user-event'
import { customRender } from '@tests/customRender'

import { StartNewCycleButton } from '.'

describe('<StartNewCycleButton />', () => {
  it('should have the "type" attribute as "submit".', () => {
    const { getByText } = customRender(<StartNewCycleButton />)

    const startNewCycleButton = getByText('Começar')

    expect(startNewCycleButton).toHaveAttribute('type', 'submit')
  })

  it('should not show the warning message when the button is not disabled.', async () => {
    const { getByText } = customRender(<StartNewCycleButton />)

    const startNewCycleButton = getByText('Começar')
    const warningMessage = getByText('Preencha o nome e a duração antes de começar.')

    await userEvent.hover(startNewCycleButton)

    expect(warningMessage).toHaveStyle({ visibility: 'hidden', opacity: '0' })
  })

  it('should show the warning message when the button is disabled.', async () => {
    const { getByText } = customRender(<StartNewCycleButton isDisabled />)

    const startNewCycleButton = getByText('Começar')
    const warningMessage = getByText('Preencha o nome e a duração antes de começar.')

    await userEvent.hover(startNewCycleButton)

    expect(warningMessage).toHaveStyle({ visibility: 'visible', opacity: '1' })
  })
})
