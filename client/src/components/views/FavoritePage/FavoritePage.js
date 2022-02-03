import React, { useEffect, useState } from "react";
import "./Favorite.css";
import Axios from "axios";
import { Popover } from "antd"; //영화제목에 마우스hover를 위한 것
import { IMAGE_BASE_URL } from "../../Config";
import { Button } from "../commons/toggleButton";
import { Helmet } from "react-helmet";
import LoadingPage from "../Loading/LoadingPage";

function FavoritePage() {
  let localValue = localStorage.getItem("themes") === "false" ? false : true;
  const [theme, setTheme] = useState(localValue);

  const [Favorites, setFavorites] = useState([]);

  const [ready, setReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setReady(false);
    }, 200);

    fetchFavoredMovie();
  }, []);

  const fetchFavoredMovie = () => {
    Axios.post("/api/favorite/getFavoredMovie", {
      userFrom: localStorage.getItem("userId"),
    }) //백엔드에 유저정보를 보내는 과정
      .then((response) => {
        if (response.data.success) {
          // console.log(response.data)
          setFavorites(response.data.favorites);
        } else {
          alert("영화정보를 가져오는데 실패했습니다.");
        }
      });
  };
  const onClickDelete = (movieId, userFrom) => {
    const variables = {
      movieId,
      userFrom,
    };

    Axios.post("/api/favorite/removeFromFavorite", variables).then(
      (response) => {
        if (response.data.success) {
          fetchFavoredMovie();
        } else {
          alert("리스트에서 지우는데 실패했습니다.");
        }
      }
    );
  };

  const renderCards = Favorites.map((favorite, index) => {
    const content = (
      <div>
        {favorite.moviePost ? (
          <img src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`} />
        ) : (
          "no image"
        )}
      </div>
    );

    return (
      <tr key={index}>
        <Popover content={content} title={`${favorite.movieTitle}`}>
          <td>{favorite.movieTitle}</td>
        </Popover>

        <td>{favorite.movieRunTime} mins</td>
        <td>
          <Button
            theme={theme === localValue}
            onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}
          >
            Remove
          </Button>
        </td>
      </tr>
    );
  });

  return ready ? (
    <LoadingPage />
  ) : (
    <div style={{ width: "100%", margin: "0" }}>
      {/* 이부분이 사라지면 헤더위치가 바뀜 */}
      <Helmet>
        <title>Favorite | 즐겨찾기</title>
      </Helmet>
      <h1>즐겨찾기 페이지</h1>
      <div style={{ width: "85%", margin: "3rem auto" }}>
        <div style={{ fontSize: "2rem" }}> 즐겨찾기에 추가한 목록 </div>
        <hr />

        <table>
          <thead>
            <tr>
              <th>제목</th>
              <th>런타임</th>
              <th>즐겨찾기 삭제</th>
            </tr>
          </thead>

          <tbody>{renderCards}</tbody>
        </table>
      </div>
    </div>
  );
}

export default FavoritePage;
