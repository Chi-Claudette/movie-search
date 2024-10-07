import React, { useState } from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';
import moviesData from './moviesData'; // Sample data file
import Navbar from './Navbar';

function MovieList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
    <div>
    <Navbar></Navbar>
    <div className='main'>
      <input className='search'
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default MovieList;
