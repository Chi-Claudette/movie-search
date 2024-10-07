import React from 'react';
import { useParams } from 'react-router-dom';
import moviesData from './moviesData';

function MovieDetails() {
  const { id } = useParams();
  const movie = moviesData.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} />
      <p>Year of Release: {movie.year}</p>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieDetails;
