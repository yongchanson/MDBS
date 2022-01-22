import React from "react";
import { Descriptions } from "antd";

function MovieInfo(props) {
  let { movie } = props;

  return (
    <div style={{ width: "85%", margin: "1rem auto" }}>
      <div style={{ fontSize: "2rem", margin: "1rem auto" }}> 영화정보 </div>
      <Descriptions title="" bordered>
        <Descriptions.Item label="제목">{movie.title}</Descriptions.Item>
        <Descriptions.Item label="개봉일">
          {movie.release_date}
        </Descriptions.Item>
        <Descriptions.Item label="런타임">{movie.runtime} 분</Descriptions.Item>
        <Descriptions.Item label="평점">
          {movie.vote_average} / 10
        </Descriptions.Item>
        <Descriptions.Item label="상영정보">{movie.status}</Descriptions.Item>
        {/* <Descriptions.Item label="vote_count">{movie.vote_count}</Descriptions.Item>
            <Descriptions.Item label="revenue">{movie.revenue}</Descriptions.Item>
            <Descriptions.Item label="popularity">{movie.popularity}</Descriptions.Item> */}
      </Descriptions>
    </div>
  );
}

export default MovieInfo;
