import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const searchMovies = async (title) => {
    const response  =  await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if(data.Search === null || data.Search === undefined){
      searchMovies([]);
    }else{
      setMovies(data.Search);
    }
    console.log('search title', title);
    console.log('search data', data.Search);
  }
  useEffect(() => {
    searchMovies('')
  }, [])

  const movie1 = {
    "Title": "Spider-Man Title Reveal",
    "Year": "2021",
    "imdbID": "tt14122734",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjRjMmQ2NDQtNmI5NC00N2EwLTkwYWQtOTM2OGZjMmI5YmRjXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_SX300.jpg"
  }

  // 4fe40c6b
  const API_URL = 'http://www.omdbapi.com?apikey=4fe40c6b';
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder='Search for movies' value={query} onChange={(e) => {setQuery(e.target.value)}}/>
        <img src={SearchIcon} alt='Search' 
          onClick={() => {searchMovies(query)}}
        />
      </div>

      {
        movies.length > 0 ? (
          <div className='container'>
            {
              movies.map((movie) => (
                <MovieCard movie={movie} />
              ))
            }
          </div>
        ) : (
          <div className='empty'>``
            <h2>No Movies Found</h2>
          </div>
        )
      }

      
    </div>
  );
}

export default App;
