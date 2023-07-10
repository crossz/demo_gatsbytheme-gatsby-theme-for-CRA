import React, { useState } from "react"
import { Link } from "gatsby"
import Seo from "../../components/seo"

import {
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import themes from "../_lightMuiTheme"

// import { App } from "cra-app"
import { App, Header, HomeScreen, ProfileScreen, LoginScreen, RegisterScreen } from "cra-app"
// import { Index } from "gatsby-auth0--spa"

// import { BrowserRouter as Router } from "react-router-dom";
// import { Router } from "@reach/router";

function SecondPageCRA() {
  const theme = useTheme()
  // const matches = useMediaQuery(theme.breakpoints.down("xs"))
  // const [lang, setlang] = useState("en")

  return (
    <ThemeProvider theme={themes}>
      {/* <Layout> */}
        <h1>Hi from the hybrid second page</h1>
        {/* 
        <Button onClick={() => setlang("cn")}>切换到中文</Button>
        <Button onClick={() => setlang("en")}>切换到en</Button>
        */}

        {/* <App isMobile={matches} lang={lang} /> */}

        {/* <Header /> */}
        {/* <Router basename='/'> */}
          {/* <App path='/page-2a' /> */}
          <App />
        {/* </Router> */}

                
        {/* <Box color={matches ? "primary.main" : "secondary.main"}>
          内部使用在Gatsby
        </Box> */}

        <p>Welcome to page 2 with CRA component</p>

        <Link to="/">Go back to the homepage</Link>
      {/* </Layout> */}
    </ThemeProvider>
  )
}

export const Head = () => <Seo title="Page two with CRA" />

export default SecondPageCRA
