MicroFontEnd Monorepo Demo - 基于 Gatsby Theme + Yarn workspace

Branches using router of 'react-router-dom' v6 are ~~just~~ for demo and the 'my-cra-app' SPA can ~~not~~ be used independently. This is different to the branches using old 'reach router', which is not compatible with the new 'react-router-dom' v6.

Here are 2 branches:
1. main-clientonlyroutes-reactrouterv6-with-full-redux-usage: can login under the mode of `gatsby develop`, by using the backend from react-redux-user-auth repo(mongodb used); Usage of 'process.env.NODE_ENV' is ignored for this simple demo -> ok for `gatsby build` with added condition of `type of window`.
2. main-clientonlyroutes-reactrouterv6: no real backend used and the redux toolkit used partially, demo works under the mode of `gatsby build`, as the login/localstorage/state etc are not really used.

---

参考官网的几个 demo,然后整合

1. default starter: as default landing page
   https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-default

2. theme workspace starter: example as `/example`, gatsby-theme-minimal is empty.
   https://github.com/gatsbyjs/gatsby-starter-theme-workspace

3. CRA demo: exported `App` React component to be imported into Gatsby page.
   [old CRA doc](https://reactjs.org/docs/create-a-new-react-app.html) -> [demo of redux for user auth](https://github.com/crossz/react-redux-user-auth), change the server port to 5001 on Mac.

4. 调整整合到统一的 theme workspace 下.

## RUN IT

```
yarn workspace gatsby-starter-default develop
```

## CHECK IT

http://localhost:8000/page-2a/

---

<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Starter for creating a Gatsby Theme workspace
</h1>

```shell
gatsby new my-theme https://github.com/gatsbyjs/gatsby-starter-theme-workspace
cd my-theme
yarn workspace example develop
```

## Layout

```text
.
├── README.md
├── gatsby-theme-minimal
│   ├── README.md
│   ├── gatsby-config.js
│   ├── index.js
│   └── package.json
├── example
│   ├── README.md
│   ├── gatsby-config.js
│   ├── package.json
│   └── src
├── package.json
└── yarn.lock

3 directories, 10 files
```

### `gatsby-theme-minimal`

This directory is the theme package itself. You should rename this at
some point to be `gatsby-theme-{my-theme-name}`. Also change the
`package.json` name field and the corresponding dependency in the
example directory's `package.json`/`gatsby-config.js` to match the chosen name.

- `gatsby-theme-minimal/`
  - `gatsby-config.js`: An empty gatsby-config that you can use as a starting point for building functionality into your theme.
  - `index.js`: Since themes also function as plugins, this is an empty file that
    gatsby needs to use this theme as a plugin.
  - `package.json`: The dependencies that your theme will pull in when people install it. `gatsby` should be a `peerDependency`.

### `example`

This is an example usage of your theme. It should look the same as the
site of someone who installed and used your theme from npm.

- `example/`
  - `gatsby-config.js`: Specifies which theme to use and any other one-off config a site might need.
  - `src/`: Source code such as one-off pages or components that might live in
    a user's site.

You can run the example with:

```shell
yarn workspace example develop
```

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-theme-workspace)
