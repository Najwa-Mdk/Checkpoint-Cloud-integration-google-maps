import React, {useState} from 'react';
import "./App.css";
import {moviesData} from './Components/Data/Data';
import MovieList from './Components/MovieList/MovieList';
import AddMovie from './Components/AddMovie/AddMovie';
import FilterByName from './Components/FilterByName/FilterByName';
import FilterByRate from './Components/FilterByRate/FilterByRate';




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
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=cin%C3%A9%20path%C3%A9%20g%C3%A9ant&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
                    <a href="https://www.whatismyip-address.com">
                    </a>
                    <a href="https://www.embedgooglemap.net">
                    </a>
                    </div>
                    </div>
                    </div>
    );
}

export default App;
