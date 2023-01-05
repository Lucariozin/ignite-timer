import { JSXElementConstructor, ReactElement } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'

export const customRender = (children: ReactElement<any, string | JSXElementConstructor<any>>) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      ),
    },
  ])

  return render(
    <RouterProvider router={router} />
  )
}
