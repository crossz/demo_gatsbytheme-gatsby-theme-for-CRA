import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Translation } from "react-i18next";
import {
  HashRouter,
  useLocation,
  useNavigate,
  Route,
  Link,
  Switch,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

import "./i18n/i18n";
import i18n from "i18next";

import { Box } from "@material-ui/core";
const App = ({ isMobile, lang }) => {
  const matches = isMobile;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log(lang);

    i18n.changeLanguage(lang);
    ProtectedRoutes();
  }, [lang]);

  const ProtectedRoutes = () => {
    return isLoggedIn ? (
      <Outlet />
    ) : (
      <Navigate to={"/login"} state={{ pathname: "/private" }} />
    );
  };

  const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log("lois check login location::---", location);
    return (
      <>
        <h1>Login</h1>
        <input placeholder="username" />
        <button
          onClick={() => {
            setIsLoggedIn(true);
            navigate(location.state.pathname || "/", { state: location });
          }}
        >
          user login
        </button>
      </>
    );
  };

  return (
    <div className="App">
      <HashRouter>
        <main>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={`/about`}>About</Link>
              </li>
              <li>
                <Link to={`/private`}>Private</Link>
              </li>
              {/* <li>
                <Link
                  to={{
                    pathname: "/login",
                    // state: { from: location },
                  }}
                  className="name-load"
                >
                  去登录
                </Link>
              </li> */}
            </ul>
          </nav>
          {/* <Switch> */}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/private" element={<Private />} />
            </Route>

            {/* <Route path="/contact" component={Contact} /> */}
            {/*404 page*/}
            <Route render={() => <h1>404: page not found</h1>} />
            {/* </Switch> */}
          </Routes>
        </main>
      </HashRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
      </header>
      <Box color={matches ? "primary.main" : "secondary.main"}>
        测试一下theme my-cra-app
      </Box>
    </div>
  );
};

const Home = () => (
  <Translation>
    {(t) => {
      return (
        <div
          style={{ background: "red", margin: 20, color: "white", width: 200 }}
        >
          {t("hello")}
        </div>
      );
    }}
  </Translation>
);
const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("lois check About location::", location);
  return (
    <>
      <h1>About</h1>
      <button onClick={() => navigate("/login", { state: location })}>
        go login page
      </button>
    </>
  );
};

const Private = () => {
  return <h1>Welcome [username]! I'm Private Page</h1>;
};

export default App;
