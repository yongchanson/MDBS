import React from "react";
import { Menu } from "antd";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Menus = styled.a`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.5s linear;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
`;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <Menus href="/">홈</Menus>
      </Menu.Item>
      <Menu.Item key="favorite">
        <Menus href="/favorite">즐겨찾기</Menus>
        {/* <Link to="/favorite">즐겨찾기</Link> */}
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
