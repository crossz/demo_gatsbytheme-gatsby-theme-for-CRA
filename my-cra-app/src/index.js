// IE polyfill
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import smoothscroll from 'smoothscroll-polyfill'
import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'; // for react 18
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
import history from './utils/history'
import './index.css'
import './i18n'
import App from './App'
import reportWebVitals from './reportWebVitals'
// import ScrollToTop from './layout/ScrollToTop'

smoothscroll.polyfill()

const root = createRoot(document.getElementById('root'));
root.render(
// ReactDOM.render(
  <React.StrictMode>    
    {/* <Provider store={store}> */}
      <Router location={history.location}>
            <App />
      </Router>
    {/* </Provider> */}
  </React.StrictMode>, 
  // document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
