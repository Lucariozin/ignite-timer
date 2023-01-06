import userEvent from '@testing-library/user-event'
import { customRender } from '@tests/customRender'

import { InterruptCycleButton } from '.'

const interruptCurrentCycle = jest.fn()

describe('<InterruptCycleButton />', () => {
  it('should call "interruptCurrentCycle" function if the button is clicked.', async () => {
    const { getByText } = customRender(<InterruptCycleButton interruptCurrentCycle={interruptCurrentCycle} />)

    const interruptCycleButton = getByText('Interromper')

    await userEvent.click(interruptCycleButton)

    expect(interruptCurrentCycle).toHaveBeenCalledTimes(1)
  })
})
