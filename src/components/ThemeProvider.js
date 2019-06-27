import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import { red } from "@material-ui/core/colors"

const theme = {
  backgroundColor: red,
}

function Theming() {
  return (
    <ThemeProvider theme={theme}>
      <DeepChild />
    </ThemeProvider>
  )
}

export default ThemeProvider
