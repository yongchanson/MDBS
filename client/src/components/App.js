import React, { Suspense, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import MovieDetail from "./views/MovieDetail/MovieDetail";
import FavoritePage from "./views/FavoritePage/FavoritePage";
import CastPage from "./views/Cast/CastPage";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./theme";
import DarkModeToggle from "react-dark-mode-toggle";

import { light, dark } from "./theme";
// import { useDarkMode } from "./hooks/useDarkMode"
import { Checkbox } from "antd";
import Toggle from "./Toggle";
import { Reset } from "styled-reset";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

const Wrapper = styled.div`
  paddingtop: "69px";
  minheight: "calc(100vh - 80px)";
  /* background-color: #fbc531; */
  /* background-color: ${({ theme }) => theme.body}; */
`;

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("themes"));

  // const [theme, setTheme] = useState(false);

  useEffect(() => {
    // localStorage.getItem("themes");
    // const setTheme = localStorage.getItem("themes");
    // setTheme(localStorage.getItem("themes"));
  }, [theme]);

  // const useDarkMode = () => {
  //   const [theme, setTheme] = useState("light");
  //   const toggleTheme = () => {
  //     if (theme === "light") {
  //       window.localStorage.setItem("theme", "dark");
  //       setTheme("dark");
  //     } else {
  //       window.localStorage.setItem("theme", "light");
  //       setTheme("light");
  //     }
  //   };

  //   useEffect(() => {
  //     const localTheme = window.localStorage.getItem("theme");
  //     localTheme && setTheme(localTheme);
  //   }, []);

  //   return [theme, toggleTheme];
  // };

  // const [themeMode, toggleTheme] = useDarkMode();
  // const theme = themeMode === "light" ? light : dark;

  return (
    <ThemeProvider theme={theme === false ? lightTheme : darkTheme}>
      <GlobalStyles />
      {/* <Reset />
      <Toggle onChange={themeMode} checked={toggleTheme} /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Wrapper>
          {/* <Header> */}
          <NavBar />

          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
            <Route
              exact
              path="/movie/:movieId"
              component={Auth(MovieDetail, null)}
            />
            <Route
              exact
              path="/cast/:castId"
              component={Auth(CastPage, null)}
            />
            <Route
              exact
              path="/favorite"
              component={Auth(FavoritePage, true)}
            />
          </Switch>

          {/* <DarkMode>
            <DarkModeToggle onChange={setTheme} checked={theme} size={60} />
          </DarkMode> */}

          <Footer />
        </Wrapper>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
