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
import history from './src/utils/history'

// const history = createMemoryHistory()


const wrapRootElement = ({ element }) => {
  return (
    // <BrowserRouter basename="/page-2a">
    // <BrowserRouter location={history.location}>
      <HashRouter>
        {element}
      </HashRouter>
    // </BrowserRouter>
    )
}



export { wrapRootElement }
