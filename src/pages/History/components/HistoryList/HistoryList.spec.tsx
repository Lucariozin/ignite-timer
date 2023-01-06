import { customRender } from '@tests/customRender'

import { Cycle } from '@contexts/CycleContext/types'

import { HistoryList } from '.'

const historyList: Cycle[] = [
  {
    id: '1',
    taskName: 'Fake task name 1',
    minutesAmount: 5,
    startDate: new Date(),
    finishDate: new Date(),
  },
  {
    id: '2',
    taskName: 'Fake task name 2',
    minutesAmount: 5,
    startDate: new Date(),
  },
]

describe('<HistoryList />', () => {
  it('should render <HistoryList /> showing all items of history list correctly.', () => {
    const { getAllByTestId } = customRender(<HistoryList historyList={historyList} />)

    const historyRowsList = getAllByTestId('history-row')

    expect(historyRowsList[0]).toHaveTextContent('Fake task name 1')
    expect(historyRowsList[0]).toHaveTextContent('há menos de um minuto')

    expect(historyRowsList[1]).toHaveTextContent('Fake task name 2')
    expect(historyRowsList[1]).toHaveTextContent('há menos de um minuto')
  })

  it('should not render <HistoryList /> if history list is received as "undefined".', () => {
    const { container } = customRender(<HistoryList historyList={undefined as unknown as Cycle[]} />)

    expect(container.hasChildNodes()).toBe(false)
  })

  it('should not render <HistoryList /> if history list is received as "null".', () => {
    const { container } = customRender(<HistoryList historyList={null as unknown as Cycle[]} />)

    expect(container.hasChildNodes()).toBe(false)
  })

  it('should not render <HistoryList /> if history list is received as "number".', () => {
    const { container } = customRender(<HistoryList historyList={10 as unknown as Cycle[]} />)

    expect(container.hasChildNodes()).toBe(false)
  })

  it('should not render <HistoryList /> if history list is received as "string".', () => {
    const { container } = customRender(<HistoryList historyList={'random text' as unknown as Cycle[]} />)

    expect(container.hasChildNodes()).toBe(false)
  })
})
