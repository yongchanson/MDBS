import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE } from '../../Config'
import MainImage from '../../views/LandingPage/Sections/MainImage'; 
import MovieInfo from './Sections/MovieInfo';
import GridCards from '../commons/GridCards';
import { Row } from 'antd';
import Favorite from './Sections/Favorite';

function MovieDetail(props) {
    
    let movieId = props.match.params.movieId //라우터의 movieId을 가져오는 방식
    const [Movie, setMovie] = useState([])
    const [Casts, setCasts] = useState([])
    const [ActorToggle, setActorToggle] = useState(false)

    useEffect(() => {
        
        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`

        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
    
        fetch(endpointInfo)
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                setMovie(response)

            })
    
        
        fetch(endpointCrew)
            .then(response => response.json())
            .then(response => {
                console.log(response.cast)
                setCasts(response.cast)

        })    

    }, [])

    const toggleActorView = () => {
        setActorToggle(!ActorToggle)     
    }
    
    return (
        <div>
            {/* Header */}
                <MainImage
                    image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                    title={Movie.title}
                    text={Movie.overview}
                />
            {/* Body */}
            <div style={{ width: '85%', margin: '1rem auto' }}>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Favorite />
            </div>       


                {/* Movie Info */}
                <Favorite movieInfo={Movie} movieId={movieId} userFrom={localStorage.getItem('userId')} />


                <br />
                {/* Actors Grid*/}

                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <button onClick={toggleActorView}>Toggle Actor View </button>
                </div>

                {ActorToggle &&
                    <Row gutter={[16, 16]} >

                    {Casts && Casts.map((cast, index) => (
                        <React.Fragment key={index}>
                            <GridCards
                                image={cast.profile_path ?
                                    `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
                                castId={cast.id}
                                castName={cast.name}
                            />
                        </React.Fragment>
                    ))}
    
                    </Row>
                }
            </div>

        </div>
    )
}

export default MovieDetail
