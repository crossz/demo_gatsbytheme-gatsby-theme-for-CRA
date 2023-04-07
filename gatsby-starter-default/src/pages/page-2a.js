import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { App } from "my-cra-app"
// import { Index } from "gatsby-auth0--spa"
import {
  Box,
  ThemeProvider,
  useMediaQuery,
  useTheme,
  Button,
} from "@material-ui/core"
import themes from "./_lightMuiTheme"

function SecondPageCRA() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("xs"))
  const [lang, setlang] = useState("en")

  return (
    <ThemeProvider theme={themes}>
      <Layout>
        <h1>Hi from the hybrid second page</h1>
        {/* <p>Welcome to page 2 with CRA component</p>
        <Button onClick={() => setlang("cn")}>切换到中文</Button>
        <Button onClick={() => setlang("en")}>切换到en</Button> */}


        {/* <App isMobile={matches} lang={lang} /> */}
        <App />


        {/* <Index /> */}
        
        
        {/* <Box color={matches ? "primary.main" : "secondary.main"}>
          内部使用在Gatsby
        </Box> */}
        <p>Welcome to page 2 with CRA component</p>

        <Link to="/">Go back to the homepage</Link>
      </Layout>
    </ThemeProvider>
  )
}

export const Head = () => <Seo title="Page two with CRA" />

export default SecondPageCRA
