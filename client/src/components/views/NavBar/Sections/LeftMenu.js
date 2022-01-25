import React from "react";
import { Menu } from "antd";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export const Menus = styled.div`
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
        <a style={{ padding: 0 }} href="/">
          <Menus>홈</Menus>
        </a>
      </Menu.Item>
      <Menu.Item key="favorite">
        <a style={{ padding: 0 }} href="/favorite">
          <Menus>즐겨찾기</Menus>
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
