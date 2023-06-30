import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import { App } from "my-cra-app"
import { App, Header, HomeScreen, ProfileScreen, LoginScreen, RegisterScreen } from "my-cra-app"
// import { Index } from "gatsby-auth0--spa"
import {
  Box,
  ThemeProvider,
  useMediaQuery,
  useTheme,
  Button,
} from "@material-ui/core"
import themes from "../_lightMuiTheme"

// import { BrowserRouter as Router } from "react-router-dom";
// import { Router } from "@reach/router";
import { Router } from "@gatsbyjs/reach-router";

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

        <Header />
        {/* <Router basename='/'> */}
        <Router>
          {/* <App path='/page-2a' /> */}
          {/* <App /> */}
          <HomeScreen path='/page-2a' />
          <LoginScreen path='/page-2a/login' />
          <RegisterScreen path='/page-2a/register' />
          <ProfileScreen path='/page-2a/user-profile' />

        </Router>

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
