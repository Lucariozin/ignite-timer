import styled from 'styled-components'

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
  min-height: 46.5rem;
  height: 70%;
  padding: 3rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.gray[600]};

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 100%;
    border-radius: 0;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  @media (max-height: 740px) {
    height: 100%;
    border-radius: 0;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 3rem 2rem;
  }
`

export const TemplateContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
`
