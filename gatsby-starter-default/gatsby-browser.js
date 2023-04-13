/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import React from 'react'
// import ReactDOMServer from "react-dom/server";
import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";



import {createMemoryHistory} from 'history'
// const history = createMemoryHistory()

// import history from './src/utils/history'


const wrapRootElement = ({ element }) => {
  return (
    // // <BrowserRouter location={history.location}>

    <BrowserRouter basename="/page-2a">
       {/* <HashRouter> */}
        {element}
       {/* </HashRouter> */}
    </BrowserRouter>
    )
}



export { wrapRootElement }
