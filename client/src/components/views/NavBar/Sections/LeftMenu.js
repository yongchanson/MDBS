import React from 'react';
import { Menu } from 'antd';
import { motion } from 'framer-motion/dist/es/index'
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// const Circle = styled(motion.div)`
//   width: 5px;
//   height: 5px;
//   border-radius: 5px;
//   bottom: -5px;
//   //가운데 넣기
//   position: absolute;
//   left: 0;
//   right: 0;
//   margin: 0 auto;
// `;



function LeftMenu(props) {

  // const homeMatch = useRouteMatch("/");
  // const favoriteMatch = useRouteMatch("/favorite");

  // console.log(homeMatch, favoriteMatch);





  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        {/* <a href="/">
          홈 {homeMatch?.isExact && <Circle layoutId="circle"> 🚩</Circle>}
        </a> */}
        {/* <Link to="/">
              Home {homeMatch?.isExact && <Circle layoutId="circle"> 🚩</Circle>}
        </Link> */}
        <Link to="/">
          홈
        </Link>
      </Menu.Item>
      <Menu.Item key="favorite">
        {/* <a href="/favorite">즐겨찾기</a> */}
        <Link to="/favorite">
          즐겨찾기
        </Link>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu