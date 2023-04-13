import React, { useMemo } from "react";
import ThemeProvider from "@material-ui/core";
import { Link } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import AppRouter from "./routers";
// import { EToastContainer } from "./themes/components/EToastContainer";
// import NetworkErrorIcon from "src/mobile/assets/icons/errorStatus/network-error.png";
// WARNING 下面形式引入会报错
// import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
// import getTheme from "./themes";
import "./App.css";
// import { useLoadImage } from "src/hooks/useLoadImage";
import enLocale from "date-fns/locale/en-US";
import zhCN from "date-fns/locale/zh-CN";
import zhHK from "date-fns/locale/zh-TW";
import { useTranslation } from "react-i18next";
import "./i18n";
import { Provider } from "react-redux";
import { store } from "../src/store";
// import { Router } from 'react-router-dom'
// import history from './utils/history';

const localeMap = {
  en: enLocale,
  "zh-CN": zhCN,
  "zh-HK": zhHK,
};
const App = (lang) => {
  // preloading image
  // useLoadImage([NetworkErrorIcon]);
  // TODO ! 监听系统主题切换
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const prefersDarkMode = false;
  // const curTheme = useMemo(
  //   () => getTheme(prefersDarkMode ? "dark" : "light"),
  //   [prefersDarkMode]
  // );
  const { i18n } = useTranslation();



  
  return (
    <>
      {/* <Router history={history}> */}
      <Provider store={store}>
      {/* <Router> */}
        {/* <CssBaseline /> */}
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[lang]}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={`/about`}>About</Link>
              </li>
              <Link to={`/signin`}>signin</Link>
              <li>{/* <Link to={`/private`}>Private</Link> */}</li>
            </ul>
          </nav>
          <AppRouter />
        </MuiPickersUtilsProvider>
        {/* <EToastContainer autoClose={3000} hideProgressBar /> */}
      </Provider>
      {/* </Router> */}
    </>
  );
};

export default App;
