import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, label, textarea {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.palette.gray[700]};
    color: ${({ theme }) => theme.palette.gray[100]};
  }
`
