import React, { useState, useEffect } from "react";
import Clock from "react-live-clock";

function Footer() {
  const [ready, setReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setReady(false);
    }, 250);
  }, []);

  return ready ? (
    <></>
  ) : (
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
      {/* 현재 브라우저 기준으로 시간이 결정됨... timezone={}옵션을 사용하면 기준을 바꿀 수 있음 */}
      <Clock format={"YYYY년 MM월 DD일 ddd HH:mm:ss"} ticking={true} />
    </div>
  );
}

export default Footer;
