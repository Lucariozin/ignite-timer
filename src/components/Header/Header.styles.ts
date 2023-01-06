import styled from 'styled-components'

import { NavLink, NavLinkProps } from 'react-router-dom'

export const HeaderContainer = styled.header`
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
