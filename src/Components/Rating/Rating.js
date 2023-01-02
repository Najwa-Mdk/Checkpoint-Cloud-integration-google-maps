import React from 'react';
import './Rating.css';
import {Rate} from 'antd';

const desc = [
    'terrible',
    'bad',
    'normal',
    'good',
    'wonderful'
];

const Rating = ({rating, setRating, movieRating, isMovieRating}) => {
    const handleChange = value => {
        setRating(value);
    };

    return(
        isMovieRating ? <span>
        <Rate disabled
            value={movieRating}/>
    </span> : <span>
        <Rate toolTips={desc}
            OnChange={handleChange}
            value={rating}/>
    </span>);
};

export default Rating;
