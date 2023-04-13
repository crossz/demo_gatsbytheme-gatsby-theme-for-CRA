/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

import React from 'react'
// import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

const wrapRootElement = ({ element }) => {
  return (
    // <StaticRouter basename="/page-2a">
    <StaticRouter basename="/blablabla"> {/* NOTE: param not same with gatsby-browser.js, why this works? */}
      <div class="blablabla"> {/* NOTE: structure not same with gatsby-browser.js, why this works? */}
        {element}
      </div>
    </StaticRouter>
    )
}



export { wrapRootElement }
