import { JSXElementConstructor, ReactElement } from 'react'
import { render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'

export const customRender = (children: ReactElement<any, string | JSXElementConstructor<any>>) => {
  return render(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
