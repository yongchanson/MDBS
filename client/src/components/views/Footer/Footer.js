import React from "react";
import Clock from "react-live-clock";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
      }}
    >
      <Clock format={"YYYY년 MM월 DD일 HH:mm:ss"} ticking={true} />
    </div>
  );
}

export default Footer;
