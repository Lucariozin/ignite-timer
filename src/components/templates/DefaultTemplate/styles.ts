import styled from 'styled-components'

import { NavLink, NavLinkProps } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  max-width: 70rem;
  width: 100%;
  max-height: 46.5rem;
  height: 100%;
  padding: 3rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.gray[600]};
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const IgniteTimerLogoImg = styled.img`
  user-select: none;
`

export const NavigationLinksContainer = styled.nav`
  display: flex;
  gap: 1.8rem;
`

interface LinkProps extends NavLinkProps {
  active: string
}

export const Link = styled(NavLink)<LinkProps>`
  color: ${({ active, theme }) => active === 'true' ? theme.palette.green[500] : theme.palette.gray[100]};
  transition: color .2s;

  &:hover {
    color: ${({ theme }) => theme.palette.green[400]};
  }

  &:focus-visible {
    height: 100%;
    font-size: 0;
    border-radius: 2px;
    outline: 2px solid ${({ theme }) => theme.palette.green[400]};
  }
`
