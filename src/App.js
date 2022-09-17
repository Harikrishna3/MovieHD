import React,{ useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg'
//b69d11b5
import MovieCard from './MovieCard.jsx';

const API_URL = 'http://www.omdbapi.com?apikey=b69d11b5';

// const movie1=
//     {
//         "Title": "Spider-Man: No Way Home",
//         "Year": "2021",
//         "imdbID": "tt10872600",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg"
//     }


const App = () =>{

    
    const [movies,setMovies] = useState([]);
    const [searchTerm ,setSearchTerm] = useState('');

    const searchMovies = async (title) =>{
        const result = await fetch(`${API_URL}&s=${title}`);  
        const data = await result.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
searchMovies('Spider-Man: No Way Home');
    },[]);

    return(
<div className="app">
<h1>MovieHD</h1>
<div className="search">
<input placeholder="search for movie" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
  <img
  src={SearchIcon}
  alt="search"
  onClick={() => searchMovies(searchTerm)}
  />
</div>
{
    movies?.length >0 
    ? (<div className="container">
      {
        movies.map((movie)=>(
            <MovieCard movie={movie} />
        ))
      }
    </div>)
    :(
        <div>
            <h2>No Movies Found</h2>
        </div>
    )
}
</div>
    );
}
export default App