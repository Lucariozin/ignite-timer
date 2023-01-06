import { Outlet } from 'react-router-dom'

import { Header } from '@components/Header'

import { Container, Wrapper, TemplateContentContainer } from './DefaultTemplate.styles'

export const DefaultTemplate = () => {
  return (
    <Container>
      <Wrapper>
        <Header />

        <TemplateContentContainer>
          <Outlet />
        </TemplateContentContainer>
      </Wrapper>
    </Container>
  )
}
