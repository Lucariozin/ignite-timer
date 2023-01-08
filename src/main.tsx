import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

import { GlobalStyles } from './styles/global'

import { CycleContextProvider } from '@contexts/CycleContext'
import { CycleFormContextProvider } from '@contexts/CycleFormContext'

import { App } from './App'

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
