import React, { Suspense, useState, useEffect } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import "./Sections/Navbar.css";
import styled, { ThemeProvider } from "styled-components";

import DarkModeToggle from "react-dark-mode-toggle";
import { GlobalStyles } from "../commons/globalStyles";
import { lightTheme, darkTheme } from "../commons/theme";

import { Link, useRouteMatch } from "react-router-dom";

const Nav = styled.div`
  position: fixed;
  z-index: 5;
  width: 100%;
  //이부분이 추가되면서 nav가 다크모드되기시작
  background: ${({ theme }) => theme.body};
  transition: all 0.5s linear;
  /* color: ${({ theme }) => theme.text}; */
`;

const DarkMode = styled.div`
  position: fixed;
  z-index: 10;
  right: 3%;
  bottom: 0;
`;

// const Menuse = styled.div`
//   background: ${({ theme }) => theme.body};
//   transition: all 0.5s linear;
// `;

// const Button = styled.button`
//   background: ${({ theme }) => theme.toggleBody};
//   border: 2px solid ${({ theme }) => theme.toggleBorder};
//   color: ${({ theme }) => theme.text};
//   border-radius: 30px;
//   cursor: pointer;
//   font-size: 0.8rem;
//   padding: 0.6rem;
// `;

function NavBar() {
  const [ready, setReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setReady(false);
    }, 250);
  }, []);

  let localValue = localStorage.getItem("themes") === "false" ? false : true;
  const [theme, setTheme] = useState(localValue);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  localStorage.setItem("themes", theme); //로컬스토리지에 주는 역할, 위치가 위로 올라가면 토글버튼의 다크모드가 적용x

  return ready ? (
    <></>
  ) : (
    <ThemeProvider theme={theme === false ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Nav className="menu">
        <div className="menu__logo">
          <a href="/">Movie</a>
        </div>

        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu mode="horizontal" />
          </div>

          <DarkMode>
            <DarkModeToggle onChange={setTheme} checked={theme} size={60} />
          </DarkMode>

          <div className="menu_rigth">
            <RightMenu mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={showDrawer}
          >
            <Icon type="align-right" />
          </Button>
          <Drawer
            title="메뉴"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <LeftMenu mode="inline" />
            <RightMenu mode="inline" />
          </Drawer>
        </div>
      </Nav>
    </ThemeProvider>
  );
}

export default NavBar;
