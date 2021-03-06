import React from "react";

function MovieInfo(props) {
  let { movie } = props;

  return (
    <div style={{ width: "100%", margin: "1rem auto" }}>
      <div style={{ fontSize: "2rem", margin: "2rem auto" }}> 영화정보 </div>
      <table>
        <thead>
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
            <td colSpan="3">{movie.status}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default MovieInfo;
