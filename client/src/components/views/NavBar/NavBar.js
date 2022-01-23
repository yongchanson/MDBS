import React, { Suspense, useState, useEffect } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import "./Sections/Navbar.css";
import styled, { ThemeProvider } from "styled-components";

import DarkModeToggle from "react-dark-mode-toggle";
import { GlobalStyles } from "../../globalStyles";
import { lightTheme, darkTheme } from "../../theme";
import { useRecoilValue } from "recoil";

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
  right: 50%;
  top: 10px;
`;

function NavBar() {
  const [theme, setTheme] = useState(false);
  const [visible, setVisible] = useState(false);
  // const themeSave = useRecoilValue(theme);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  localStorage.setItem("themes", theme);

  return (
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
