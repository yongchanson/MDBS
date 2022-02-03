import React from "react";

//home, movieDetail 페이지 상단의 큰 이미지를 나타내기 위한 것
function MainImage(props) {
  return (
    <div
      style={{
        top: "50px",
        background: `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('${props.image}'), #1c1c1c`,
        height: "500px",
        backgroundSize: "100%, cover",
        backgroundPosition: "center, center",
        width: "100%",
        position: "relative",
        marginBottom: "100px",
      }}
    >
      <div>
        <div
          style={{
            position: "absolute",
            maxWidth: "500px",
            bottom: "2rem",
            marginLeft: "2rem",
          }}
        >
          <h2 style={{ color: "white" }}> {props.title} </h2>
          <p style={{ color: "white", fontSize: "1rem" }}> {props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
