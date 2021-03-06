import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import GridCards from "../commons/GridCards";
import { Row } from "antd";
import noImg from "../commons/noImg.png";
import { Helmet } from "react-helmet";
import LoadingPage from "../Loading/LoadingPage";
import { useQuery } from "react-query";
// import Logo from "../commons/MDBS_LOGO.png";

function CastPage(props) {
  const [Casts, setCasts] = useState([]);
  const [Movies, setMovies] = useState([]);
  const [Birthday, setBirthday] = useState([]);

  const castId = props.match.params.castId;

  useEffect(() => {
    //배우에 대한 정보를 얻기 위한 API
    const castpoint = `${API_URL}/person/${castId}?api_key=${API_KEY}`;
    const moviepoint = `${API_URL}/person/${castId}/movie_credits?api_key=${API_KEY}`; //배우가 출연한 영화리스트를 얻기 위한 것

    castName(castpoint);
    movieList(moviepoint);
  }, [castId]);

  const castName = (castpoint) => {
    fetch(castpoint)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setCasts(response.name);
        setBirthday(response.birthday);
      });
  };

  const movieList = (moviepoint) => {
    fetch(moviepoint)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response)
        setMovies(response.cast);
      });
  };

  function getCast() {
    return fetch(`${API_URL}/person/${castId}?api_key=${API_KEY}`).then(
      (response) => response.json()
    );
  }

  const { isLoading } = useQuery(["cast"], getCast);
  // console.log(data, isLoading);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <div style={{ width: "100%", margin: "0" }}>
      <Helmet>
        {/* <link href={Logo} /> */}
        <title>{`${Casts} | ${Birthday === null ? "" : Birthday}`}</title>
      </Helmet>
      {/* 이부분이 사라지면 헤더위치가 바뀜 */}
      <div style={{ fontSize: "0" }}>{Casts}</div>
      <div style={{ width: "85%", margin: "6rem auto" }}>
        {/* cast grid cards */}
        <div style={{ fontSize: "2rem", margin: "4rem auto" }}>
          {Casts} 의 출연작품
        </div>
        <Row gutter={[16, 16]}>
          {Movies &&
            Movies.map((movie, index) => (
              <React.Fragment key={index}>
                <GridCards
                  movieList
                  image={
                    movie.poster_path
                      ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                      : noImg
                  }
                  movieId={movie.id}
                  movieName={movie.title}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>
    </div>
  );
}

export default CastPage;
