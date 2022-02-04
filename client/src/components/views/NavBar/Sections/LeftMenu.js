import React from "react";
import { Menu } from "antd";
import styled from "styled-components";

export const Menus = styled.div`
  transition: all 0.3s linear;
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
