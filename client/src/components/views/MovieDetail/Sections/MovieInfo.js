import React from "react";
import { Descriptions } from "antd";

function MovieInfo(props) {
  let { movie } = props;

  return (
    <div style={{ width: "85%", margin: "1rem auto" }}>
      <div style={{ fontSize: "2rem", margin: "1rem auto" }}> 영화정보 </div>
      <table>
        <tr>
          <th>제목</th>
          <td>{movie.title}</td>
          <th>개봉일</th>
          <td>{movie.release_date}</td>
          <th>런타임</th>
          <td>{movie.runtime} 분</td>
        </tr>
        <tr></tr>
        <tr>
          <th>평점</th>
          <td>{movie.vote_average} / 10</td>
          <th>상영정보</th>
          <td colspan="3">{movie.status}</td>
        </tr>
      </table>
      {/* <Descriptions title="" bordered>
        <Descriptions.Item label="제목">{movie.title}</Descriptions.Item>
        <Descriptions.Item label="개봉일">
          {movie.release_date}
        </Descriptions.Item>
        <Descriptions.Item label="런타임">{movie.runtime} 분</Descriptions.Item>
        <Descriptions.Item label="평점">
          {movie.vote_average} / 10
        </Descriptions.Item>
        <Descriptions.Item label="상영정보">{movie.status}</Descriptions.Item>
      </Descriptions> */}
    </div>
  );
}

export default MovieInfo;
