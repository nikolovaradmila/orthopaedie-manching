import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import Layout from "./src/components/layout"
import { PageContextProvider } from "./src/components/PageContext"
import React from "react"
// import Helmet from 'react-helmet'
import { ThemeProvider as StyledThemeProvider } from "styled-components"

import theme from "./src/theme"

export const wrapRootElement = ({ element }) => (
  <StyledThemeProvider theme={theme}>
    {/* <ThemeProvider theme={theme}> */}
    {/*  <CssBaseline /> */}
    {element}
    {/*  </ThemeProvider> */}
  </StyledThemeProvider>
)

export function wrapPageElement({ element, props }) {
  const { pageContext } = props
  const { locale } = pageContext

  return (
    <PageContextProvider pageContext={pageContext}>
      <Layout>
        {/* <Helmet htmlAttributes={{ lang: locale }}> */}
        {element}
        {/* </Helmet> */}
      </Layout>
    </PageContextProvider>
  )
}
