/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menus } from "./LeftMenu";

function RightMenu(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  // const [ theme, setTheme ] = useState('light');
  let menuTheme = localStorage.getItem("themes") === "false" ? "light" : "dark";

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode} theme={menuTheme}>
        <Menu.Item key="mail">
          <a href="/login">
            <Menus>로그인</Menus>
          </a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">
            <Menus>가입하기</Menus>
          </a>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode} theme={menuTheme}>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>
            <Menus>로그아웃</Menus>
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);
