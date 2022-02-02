import React from "react";
import { Menu } from "antd";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export const Menus = styled.div`
  /* background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text}; */
  transition: all 0.3s linear;
  /* width: 100%;
  height: 100%;
  padding: 10px 20px; */
  padding: 0px 20px;
`;

function LeftMenu(props) {
  let menuTheme = localStorage.getItem("themes") === "false" ? "light" : "dark";

  return (
    <Menu mode={props.mode} theme={menuTheme}>
      <Menu.Item key="mail">
        <a href="/">
          <Menus>홈</Menus>
        </a>
      </Menu.Item>
      <Menu.Item key="favorite">
        <a href="/favorite">
          <Menus>즐겨찾기</Menus>
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
