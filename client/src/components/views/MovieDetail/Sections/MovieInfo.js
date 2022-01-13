import React from 'react'
import { Descriptions, Badge } from 'antd';

function MovieInfo(props) {

    let { movie } = props;

    return (
        <Descriptions title="영화정보" bordered>
            <Descriptions.Item label="제목">{movie.title}</Descriptions.Item>
            <Descriptions.Item label="개봉일">{movie.release_date}</Descriptions.Item>
            <Descriptions.Item label="런타임">{movie.runtime} 분</Descriptions.Item>
            <Descriptions.Item label="평점">{movie.vote_average} / 10</Descriptions.Item>
            <Descriptions.Item label="상태">{movie.status}</Descriptions.Item>
            {/* <Descriptions.Item label="vote_count">{movie.vote_count}</Descriptions.Item>
            <Descriptions.Item label="revenue">{movie.revenue}</Descriptions.Item>
            <Descriptions.Item label="popularity">{movie.popularity}</Descriptions.Item> */}
        </Descriptions>
    )
}

export default MovieInfo