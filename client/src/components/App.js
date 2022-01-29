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
import LoadingPage from "./views/Loading/LoadingPage";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./views/commons/globalStyles";
import { lightTheme, darkTheme } from "./views/commons/theme";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

const Wrapper = styled.div`
  paddingtop: "69px";
  minheight: "calc(100vh - 80px)";
`;

function App() {
  let localValue = localStorage.getItem("themes") === "false" ? false : true;
  const [theme, setTheme] = useState(localValue);

  // const [ready, setReady] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setReady(false);
  //   }, 500);
  // }, []);

  return (
    <ThemeProvider theme={theme === false ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Wrapper>
        <Suspense fallback={<div>Loading...</div>}>
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
            {/* <Route exact path="/loading" component={Auth(LoadingPage, null)} /> */}
          </Switch>

          <Footer />
        </Suspense>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
