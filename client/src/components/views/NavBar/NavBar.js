import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import "./Sections/Navbar.css";
import styled, { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../../theme";
import { GlobalStyles } from "../../globalStyles";
import DarkModeToggle from "react-dark-mode-toggle";
// import DarkModeToggle from "react-dark-mode-toggle";
// import { GlobalStyles } from "../../globalStyles";
// import { lightTheme, darkTheme } from "../../theme";

const Nav = styled.div`
  position: fixed;
  z-index: 5;
  width: 100%;
  background: ${({ theme }) =>
    theme.body}; //이부분이 추가되면서 nav가 다크모드되기시작
`;
const DarkMode = styled.div`
  position: fixed;
  z-index: 10;
  right: 50%;
  top: 4%;
`;

function NavBar() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState(false);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

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
          {/* <DarkModeToggle onChange={setTheme} checked={theme} size={80} /> */}
          {/* <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={80}
        /> */}
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
