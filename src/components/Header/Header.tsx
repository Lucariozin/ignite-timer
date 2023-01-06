import { Scroll, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'

import { HeaderContainer, IgniteTimerLogoImg, Link, NavigationLinksContainer } from './Header.styles'

export const Header = () => {
  const { pathname } = useLocation()

  return (
    <HeaderContainer>
      <IgniteTimerLogoImg src="/img/ignite-timer-logo.svg" alt="" />

      <NavigationLinksContainer>
        <Link to="/" title="Ir para a tela inicial" active={String(pathname === '/')}>
          <Timer size={30} />
        </Link>
        
        <Link to="/history" title="Ver histórico" active={String(pathname === '/history')}>
          <Scroll size={30} />
        </Link>
      </NavigationLinksContainer>
    </HeaderContainer>
  )
}
