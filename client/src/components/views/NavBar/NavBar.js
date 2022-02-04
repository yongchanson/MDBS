import React, { useState, useEffect } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import styled, { ThemeProvider } from "styled-components";
import "./Sections/Navbar.css";

import DarkModeToggle from "react-dark-mode-toggle";
import { GlobalStyles } from "../commons/GlobalStyles";
import { lightTheme, darkTheme } from "../commons/Theme";
import { motion } from "framer-motion";

const Nav = styled.div`
  position: fixed;
  z-index: 5;
  width: 100%;
  //이부분이 추가되면서 nav가 다크모드되기시작
  background: ${({ theme }) => theme.body};
  transition: all 0.3s linear;
  /* color: ${({ theme }) => theme.text}; */
`;

const DarkMode = styled.div`
  position: fixed;
  z-index: 10;
  right: 3%;
  bottom: 0;
`;

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

  const Logo = styled(motion.svg)`
    width: 100px;
    height: 100%;
    path {
      stroke-width: 6px;
      stroke: #18dcff;
    }
  `;
  const logoVariants = {
    normal: {
      fillOpacity: 1,
    },
    active: {
      fillOpacity: [0, 1, 0],
      transition: {
        repeat: Infinity, //무한반복
      },
    },
  };
  const svg = {
    start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
    end: {
      fill: "#3e91f7",
      pathLength: 1,
    },
  };

  return ready ? (
    <></>
  ) : (
    <ThemeProvider theme={theme === false ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Nav className="menu">
        <div className="menu__logo">
          <a href="/">
            {/* <a href="/">Movie</a> */}
            <Logo
              variants={logoVariants}
              initial="normal"
              whileHover="active"
              animate="normal"
              xmlns="http://www.w3.org/2000/svg"
              width="1200"
              height="380"
              viewBox="0 0 1200 350"
            >
              <motion.path
                variants={svg}
                initial="start"
                animate="end"
                transition={{
                  default: { duration: 5 },
                  fill: { duration: 1, delay: 3 },
                }}
                d="M40 184 c0 -141 1 -145 20 -142 19 3 40 41 115 216 9 19 16 8 64 -98 41 -91 58 -120 72 -120 18 0 19 10 19 145 0 121 -2 145 -15 145 -12 0 -15 -22 -17 -115 l-3 -115 -50 111 c-27 61 -54 111 -60 111 -5 0 -32 -50 -60 -111 l-50 -111 -3 115 c-2 93 -5 115 -17 115 -13 0 -15 -24 -15 -146z M390 185 l0 -145 58 0 c101 0 161 49 169 137 8 99 -50 153 -164 153 l-63 0 0 -145z m165 85 c50 -47 40 -145 -19 -181 -17 -11 -49 -19 -73 -19 l-43 0 0 116 0 116 55 -4 c40 -3 62 -11 80 -28z M680 185 l0 -145 56 0 c48 0 59 4 85 29 36 37 38 73 3 108 -24 24 -24 26 -8 44 24 26 21 69 -6 91 -15 12 -39 18 -76 18 l-54 0 0 -145z m104 109 c10 -4 16 -18 16 -35 0 -31 -23 -49 -64 -49 -24 0 -26 3 -26 45 0 43 1 45 29 45 16 0 36 -3 45 -6z m14 -130 c47 -33 15 -94 -50 -94 l-38 0 0 55 0 55 33 0 c18 0 43 -7 55 -16z M938 320 c-10 -6 -18 -18 -18 -27 0 -11 5 -13 18 -8 58 25 112 11 112 -29 0 -27 -15 -41 -79 -76 -109 -59 -54 -160 74 -136 27 5 35 12 35 28 0 15 -4 18 -17 13 -71 -30 -135 -8 -117 39 3 8 26 24 50 35 24 12 53 30 64 41 26 26 26 81 0 105 -23 21 -98 30 -122 15z"
              ></motion.path>
            </Logo>
          </a>
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
            title=""
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
