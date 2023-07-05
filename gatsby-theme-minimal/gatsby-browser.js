// // /**
// //  * Implement Gatsby's Browser APIs in this file.
// //  *
// //  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
// //  */

// // // You can delete this file if you're not using it
// // import React from 'react'
// // // import ReactDOMServer from "react-dom/server";
// // import { HashRouter } from "react-router-dom";
// // import { BrowserRouter } from "react-router-dom";



// // import {createMemoryHistory} from 'history'
// // // const history = createMemoryHistory()

// // // import history from './src/utils/history'


// // const wrapRootElement = ({ element }) => {
// //   return (
// //     // // <BrowserRouter location={history.location}>

// //     // <BrowserRouter basename="/page-2a">
// //     <BrowserRouter basename="/">
// //        {/* <HashRouter> */}
// //         {element}
// //        {/* </HashRouter> */}
// //     </BrowserRouter>
// //     )
// // }




// import wrapWithProvider from "./wrap-with-provider"
// const wrapRootElement = wrapWithProvider
// export { wrapRootElement }


import React from 'react'
import Layout from "./src/components/layout"
import { BrowserRouter as Router} from "react-router-dom";

const wrapPageElement = ({ element, props }) => {
  
  console.log(`----==== props.location: ${JSON.stringify(props)}`)

   // this is for refresh on the CRA page.
  // if (props.location.pathname === '/page-2a/')
  if (props.path === '/page-2a/*') {
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