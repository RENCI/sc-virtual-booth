import React from 'react'
import { DefaultLayout } from './src/components/layout'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/theme'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={ theme }>
      { element }
    </ThemeProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <DefaultLayout>
      { element }
    </DefaultLayout>
  )
}
