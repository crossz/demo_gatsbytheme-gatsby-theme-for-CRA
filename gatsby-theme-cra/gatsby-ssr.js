// import wrapWithProvider from "./wrap-with-provider"
// const wrapRootElement = wrapWithProvider
// export { wrapRootElement }

import React from 'react'
import Layout from "./src/components/layout"
import { StaticRouter as Router} from "react-router-dom/server";

const wrapPageElement = ({ element, props }) => {
  
  console.log(`----==== props.location: ${JSON.stringify(props)}`)

  // if (props.path === '/page-2a/*')
  if (props.location.pathname === '/page-2a/[...]/') {
    return(
      <Layout {...props}>
        <Router basename="/">
           {/* <HashRouter> */}
            {element}
          {/* </HashRouter> */}
        </Router>
      </Layout>
    ) 
  } else {
    return(
      <Layout>
        {element}
      </Layout>
    )
  }
}
export { wrapPageElement }