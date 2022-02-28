import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../../views/commons/MainImage";
import MovieInfo from "./Sections/MovieInfo";
import GridCards from "../commons/GridCards";
import { Row } from "antd";
import Favorite from "./Sections/Favorite";
import noImg from "../commons/noImg.png";
import { Button } from "../commons/toggleButton";
import { Helmet } from "react-helmet";
import LoadingPage from "../Loading/LoadingPage";
import { useQuery } from "react-query";
// import Logo from "../commons/MDBS_LOGO.png";

function MovieDetail(props) {
  let localValue = localStorage.getItem("themes") === "false" ? false : true;
  const [theme] = useState(localValue);

  let movieId = props.match.params.movieId; //라우터의 movieId을 가져오는 방식
  const [Movie, setMovie] = useState([]);
  const [Casts, setCasts] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false);
  const [MainMovieImage, setMainMovieImage] = useState(null);

  useEffect(() => {
    let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setMovie(response);
        setMainMovieImage(response);
      });

    fetch(endpointCrew)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.cast)
        setCasts(response.cast);
      });
  }, [movieId]);

  const toggleActorView = () => {
    setActorToggle(!ActorToggle);
  };

  function getDetail() {
    return fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`).then(
      (response) => response.json()
    );
  }

  const { isLoading } = useQuery(["detail"], getDetail);
  // console.log(data, isLoading);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <div>
      <Helmet>
        {/* <link href={Logo} /> */}
        <title>{`${Movie.original_title} | ${Movie.title}`}</title>
      </Helmet>
      {MainMovieImage && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
          title={Movie.title}
          text={Movie.overview}
        />
      )}

      {/* Body */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Favorite
            movieInfo={Movie}
            movieId={movieId}
            userFrom={localStorage.getItem("userId")}
          />
        </div>

        {/* Movie Info */}
        <MovieInfo movie={Movie} />

        <br />

        {/* Actors Grid*/}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem",
          }}
        >
          <Button theme={theme === localValue} onClick={toggleActorView}>
            출연배우
          </Button>
        </div>

        {ActorToggle && (
          <Row gutter={[16, 16]}>
            {Casts &&
              Casts.map((cast, index) => (
                <React.Fragment key={index}>
                  <GridCards
                    image={
                      cast.profile_path
                        ? `${IMAGE_BASE_URL}w500${cast.profile_path}`
                        : noImg
                    }
                    castId={cast.id}
                    castName={cast.name}
                  />
                </React.Fragment>
              ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
