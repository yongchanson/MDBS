import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../../views/commons/MainImage";
import GridCards from "../commons/GridCards";
import { Row } from "antd";
import noImg from "../commons/noImg.png";
import { Button } from "../commons/toggleButton";
import { Helmet } from "react-helmet";
import LoadingPage from "../Loading/LoadingPage";
import { useQuery } from "react-query";

function LandingPage() {
  let localValue = localStorage.getItem("themes") === "false" ? false : true;
  const [theme] = useState(localValue);

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);

  const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=1`;

  const fetchMovies = (endpoint) => {
    return fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);

        setMovies([...Movies, ...response.results]); //...Movies : 처음 출력되는 20개의 영화를 보존하기 위함(없을경우 기존 영화가 사라지고 새로운 영화가 나옴)
        setMainMovieImage(response.results[0]);
        setCurrentPage(response.page);
      });
  };

  useEffect(() => {
    //인기영화리스트 중 첫페이지(20개)를 받아오기 위한 것
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=1`;

    fetchMovies(endpoint);
  }, [fetchMovies, endpoint]);

  function getMovies() {
    return fetch(`${API_URL}movie/popular?api_key=${API_KEY}&page=1`).then(
      (response) => response.json()
    );
  }

  const { isLoading } = useQuery(["movies"], getMovies);
  // console.log(data, isLoading);

  const loadMoreItems = () => {
    //함수가 실행되면 다음페이지(2,3,4,5..)를 불러오는 것
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${
      CurrentPage + 1
    }`;
    fetchMovies(endpoint);
  };

  return isLoading ? (
    <LoadingPage />
  ) : (
    <div style={{ width: "100%", margin: "0" }}>
      <Helmet>
        <title>Home | 홈</title>
      </Helmet>
      {/* main페이지 */}
      {MainMovieImage && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.title}
          text={MainMovieImage.overview}
        />
      )}

      <div style={{ width: "85%", margin: "1rem auto" }}>
        <div style={{ fontSize: "2rem" }}> 최신영화 </div>
        <hr />

        {/* movie grid cards */}
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

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button theme={theme === localValue} onClick={loadMoreItems}>
          Load More
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
