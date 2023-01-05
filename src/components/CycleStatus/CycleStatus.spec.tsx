import { customRender } from '@tests/customRender'
import { theme } from '@styles/theme'

import { Cycle } from '@contexts/CycleContext/types'

import { CycleStatus } from '.'

const statusColors = {
  'in-progress': theme.palette.orange[200],
  'interrupted': theme.palette.red[500],
  'finished': theme.palette.green[200],
}

describe('<CycleStatus />', () => {
  it('should render <CycleStatus /> with the "in progress" status.', () => {
    const cycle: Cycle = {
      id: '1',
      taskName: 'Fake task name',
      minutesAmount: 5,
      startDate: new Date(),
    }

    const { container, getByTestId } = customRender(<CycleStatus cycle={cycle} />)

    const statusBall = getByTestId('status-ball')

    expect(statusBall).toHaveStyle(`background-color: ${statusColors['in-progress']}`)
    expect(container).toHaveTextContent('Em andamento')
  })

  it('should render <CycleStatus /> with the "interrupted" status.', () => {
    const cycle: Cycle = {
      id: '1',
      taskName: 'Fake task name',
      minutesAmount: 5,
      startDate: new Date(),
      interruptDate: new Date(),
    }

    const { container, getByTestId } = customRender(<CycleStatus cycle={cycle} />)

    const statusBall = getByTestId('status-ball')

    expect(statusBall).toHaveStyle(`background-color: ${statusColors['interrupted']}`)
    expect(container).toHaveTextContent('Interrompido')
  })

  it('should render <CycleStatus /> with the "finished" status.', () => {
    const cycle: Cycle = {
      id: '1',
      taskName: 'Fake task name',
      minutesAmount: 5,
      startDate: new Date(),
      finishDate: new Date(),
    }

    const { container, getByTestId } = customRender(<CycleStatus cycle={cycle} />)

    const statusBall = getByTestId('status-ball')

    expect(statusBall).toHaveStyle(`background-color: ${statusColors['finished']}`)
    expect(container).toHaveTextContent('Concluído')
  })
})
