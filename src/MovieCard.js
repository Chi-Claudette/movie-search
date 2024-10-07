import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Release Year: {movie.year}</p>
      <Link to={`/movie/${movie.id}`}>More Details</Link>
    </div>
  );
}

export default MovieCard;
