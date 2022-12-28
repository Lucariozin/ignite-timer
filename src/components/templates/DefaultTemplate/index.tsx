import { Outlet, useLocation } from 'react-router-dom'
import { Scroll, Timer } from 'phosphor-react'

import { Container, Header, IgniteTimerLogoImg, Wrapper, NavigationLinksContainer, Link } from './styles'

export const DefaultTemplate = () => {
  const { pathname } = useLocation()

  return (
    <Container>
      <Wrapper>
        <Header>
          <IgniteTimerLogoImg src="/img/ignite-timer-logo.svg" alt="" />

          <NavigationLinksContainer>
            <Link to="/" title="Ir para a tela inicial" active={String(pathname === '/')}>
              <Timer size={30} />
            </Link>
            
            <Link to="/history" title="Ver histórico" active={String(pathname === '/history')}>
              <Scroll size={30} />
            </Link>
          </NavigationLinksContainer>
        </Header>

        <Outlet />
      </Wrapper>
    </Container>
  )
}
