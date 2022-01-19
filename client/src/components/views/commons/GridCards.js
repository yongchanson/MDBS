import React from "react";
import { Col } from "antd";

function GridCards(props) {
  if (props.movieList) {
    //props가 movieList일 경우 : 영화목록을 나타냄
    return (
      <Col lg={6} md={8} xs={24}>
        <div style={{ position: "relative" }}>
          <a href={`/movie/${props.movieId}`}>
            <img
              style={{ width: "100%", height: "320px" }}
              src={props.image}
              alt={props.movieName}
            />
          </a>
        </div>
      </Col>
    );
  } else {
    //props가 없는 경우 : 배우목록을 나타냄
    return (
      <Col lg={6} md={8} xs={24}>
        <div style={{ position: "relative" }}>
          <a href={`/cast/${props.castId}`}>
            <img
              style={{ width: "100%", height: "320px" }}
              src={props.image}
              alt={props.castName}
            />
          </a>
        </div>
      </Col>
    );
  }
}
export default GridCards;
