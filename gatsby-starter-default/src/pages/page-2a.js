import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { App } from "my-cra-app"

const SecondPageCRA = () => (
  <Layout>
    <h1>Hi from the hybrid second page</h1>
    <p>Welcome to page 2 with CRA component</p>
    
    
    <App />

    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two with CRA" />

export default SecondPageCRA
