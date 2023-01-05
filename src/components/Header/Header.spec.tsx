import { customRender } from '@tests/customRender'

import { Header } from '.'

describe('<Header />', () => {
  it('should have "go to the initial page" link with the correct "href" attribute.', async () => {
    const { getByRole } = customRender(<Header />)

    const goToTheInitialPageLink = getByRole('link', { name: 'Ir para a tela inicial' })

    expect(goToTheInitialPageLink).toHaveAttribute('href', '/')
  })

  it('should have "see history" link with the correct "href" attribute.', async () => {
    const { getByRole } = customRender(<Header />)

    const seeHistoryLink = getByRole('link', { name: 'Ver histórico' })

    expect(seeHistoryLink).toHaveAttribute('href', '/history')
  })
})
