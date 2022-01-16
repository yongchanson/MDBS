import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
import styled from 'styled-components';
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const Nav = styled(motion.div)`
  position: fixed;
  z-Index: 5;
  width: 100%;
`;
// const Box = styled(motion.div)`
//   width: 20px;
//   height: 20px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

function NavBar() {
  // const x = useMotionValue(0);
  // const backcolor = useTransform(
  //   x,
  //   [-50, 50],
  //   [
  //     "rgb(255, 255, 255)",
  //     "rgb(0, 0, 0)",
  //   ]
  // );
  // const color = useTransform(
  //   x,
  //   [-50, 50],
  //   [
  //     "rgb(0, 0, 0)",
  //     "rgb(255, 255, 255)",
  //   ]
  // );

  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <Nav className="menu">
    {/* <Nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>   */}
      <div className="menu__logo">
        <a href="/">Movie</a>
        {/* <Icon type="medium" /> */}
        {/* <Box style={{ x }} drag="x" dragSnapToOrigin>ffff</Box> */}
      </div>
      
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
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
  )
}

export default NavBar