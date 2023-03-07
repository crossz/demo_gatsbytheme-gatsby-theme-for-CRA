import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { App } from "my-cra-app"
import { Box, ThemeProvider, useMediaQuery, useTheme } from "@material-ui/core"
import themes from "./_lightMuiTheme"

function SecondPageCRA() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <ThemeProvider theme={themes}>
      <Layout>
        <h1>Hi from the hybrid second page</h1>
        <p>Welcome to page 2 with CRA component</p>
        <App isMobile={matches} />
        <Box color={matches ? "primary.main" : "secondary.main"}>
          内部使用在Gatsby
        </Box>

        <Link to="/">Go back to the homepage</Link>
      </Layout>
    </ThemeProvider>
  )
}

export const Head = () => <Seo title="Page two with CRA" />

export default SecondPageCRA
