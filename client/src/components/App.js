import React, { Suspense, useState } from "react";
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
// import Providers from "./Providers";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./theme";
import DarkModeToggle from "react-dark-mode-toggle";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

const Wrapper = styled.div`
  paddingtop: "69px";
  minheight: "calc(100vh - 80px)";
  /* background-color: #fbc531; */
`;

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeProvider theme={theme === false ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>
        <Wrapper>
          <DarkModeToggle onChange={setTheme} checked={theme} size={80} />
          <NavBar></NavBar>

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

          <Footer />
        </Wrapper>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
