import React, { useEffect, useState } from 'react'
// import Axios from 'axios';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import GridCards from '../commons/GridCards';
import { Row } from 'antd';
import noImg from '../commons/noImg.png';

function CastPage(props) {

    
    const [Casts, setCasts] = useState([])
    const [Movies, setMovies] = useState([])

    const castId = props.match.params.castId

    useEffect(() => {

        const castpoint = `${API_URL}/person/${castId}?api_key=${API_KEY}`
        const moviepoint = `${API_URL}/person/${castId}/movie_credits?api_key=${API_KEY}`
        castName(castpoint)
        movieList(moviepoint)

    }, [])

    const castName = (castpoint) => {
        
        fetch(castpoint)
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                setCasts(response.name)
            })
    
    }

    const movieList = (moviepoint) => {
        fetch(moviepoint)
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                setMovies(response.cast)
            })
    }

    


        return (<div style={{ width: '85%', margin: '1rem auto' }}>
           
            <h1>{Casts} 의 출연작품</h1>
                            
            {/* cast grid cards */}

        <Row gutter={[16, 16]} >

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
        )
}





export default CastPage