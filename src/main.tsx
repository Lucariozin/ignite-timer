import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { CycleContextProvider } from './contexts/CycleContext'

import { App } from './App'

import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CycleContextProvider>
        <App />
      </CycleContextProvider>

      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
