import React, {useState} from 'react';
import "./App.css";
import {moviesData} from './Components/Data/Data';
import MovieList from './Components/MovieList/MovieList';
import AddMovie from './Components/AddMovie/AddMovie';
import FilterByName from './Components/FilterByName/FilterByName';
import FilterByRate from './Components/FilterByRate/FilterByRate';
import 'antd/dist/reset.css';



const App = () => {
    const [movies, setMovies] = useState(moviesData);
    const [inputSearch , setInputSearch] = useState ("");
    const [rating , setRating] = useState (1);
    const add =(newMovie) => {
        setMovies ([...movies, newMovie]);
    };
    return (
        <div className='App'>
            <h1>Movie App</h1>
            <div className='container'>
            <FilterByName inputSearch ={inputSearch} setInputSearch = {setInputSearch}/>
            <FilterByRate className ='rate' isMovieRating ={false}
            rating = {rating}
            setRating = {setRating}/>
            </div>
            <AddMovie add={add}/>
            <MovieList movies ={movies} inputSearch ={inputSearch} rating = {rating}/>
        </div>
    );
}

export default App
