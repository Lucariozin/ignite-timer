import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { CycleContextProvider } from '@contexts/CycleContext'
import { CycleFormContextProvider } from '@contexts/CycleFormContext'

import { App } from './App'

import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CycleFormContextProvider>
        <CycleContextProvider>
          <App />
        </CycleContextProvider>
      </CycleFormContextProvider>

      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
