import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from '../../views/commons/MainImage'; 
// import axios from 'axios';
import GridCards from '../commons/GridCards';
import { Row } from 'antd';
import noImg from '../commons/noImg.png';

function LandingPage() {
    
    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null) 
    const [CurrentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=1`;

        fetchMovies(endpoint)

    }, [])
    
    const fetchMovies = (endpoint) => {
        fetch(endpoint)
        .then(response => response.json())
        .then(response => {

            // console.log(response)

            setMovies([...Movies, ...response.results]) //...Movies : 처음의 20개보존
            setMainMovieImage(response.results[0])
            setCurrentPage(response.page)
        })
    }
        
    const loadMoreItems = () => {

        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${CurrentPage + 1}`;
        fetchMovies(endpoint)

    }

    return (    
        <div style={{ width: '100%', margin: '0'}}>

            {/* main페이지 */}
            {MainMovieImage &&
                <MainImage
                    image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                    title={MainMovieImage.title}
                    text={MainMovieImage.overview}
                />
            }

            
            <div style={{ width: '85%', margin: '1rem auto'}}>
                
                <h1>최신영화</h1>
                <hr />

                {/* movie grid cards */}

                <Row gutter={[16, 16]} > {/* margin 같은 효과 */}

                {Movies && Movies.map((movie, index) => (
                    <React.Fragment key={index}>
                        <GridCards
                            movieList
                            image={movie.poster_path ?
                                `${IMAGE_BASE_URL}w500${movie.poster_path}` : noImg}
                            movieId={movie.id}
                            movieName={movie.title}
                        />
                    </React.Fragment>
                ))}

                </Row>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={loadMoreItems}> Load More </button>
            </div>
        </div>
    )
}

export default LandingPage
