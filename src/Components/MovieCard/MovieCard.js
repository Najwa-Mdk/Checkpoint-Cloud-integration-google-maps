import React from 'react'
import {Card, Button} from 'react-bootstrap';
import './MovieCard.css';
import MovieRating from '../Rating/Rating' ;

const MovieCard = ({movie}) => {
  return (
    <div className='card-movie'>
         <Card className='Cards'>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.rate}</Card.Text>
        <MovieRating isMovieRating = {true} movieRating = {movie.rate}/>
        <Button className = 'btn'variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default MovieCard