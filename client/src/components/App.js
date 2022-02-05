import React, { Suspense, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import MovieDetail from "./views/MovieDetail/MovieDetail";
import FavoritePage from "./views/FavoritePage/FavoritePage";
import CastPage from "./views/Cast/CastPage";
//styled
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./views/commons/GlobalStyles";
import { lightTheme, darkTheme } from "./views/commons/Theme";

import { Helmet } from "react-helmet";
import Logo from "./views/commons/MDBS_LOGO.png";

const Wrapper = styled.div`
  paddingtop: "69px";
  minheight: "calc(100vh - 80px)";
`;

function App() {
  let localValue = localStorage.getItem("themes") === "false" ? false : true;
  const [theme] = useState(localValue);

  return (
    <ThemeProvider theme={theme === false ? lightTheme : darkTheme}>
      <Helmet>
        <link href={Logo} />
      </Helmet>
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
          </Switch>

          <Footer />
        </Suspense>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
