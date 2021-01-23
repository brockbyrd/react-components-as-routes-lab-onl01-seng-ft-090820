import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(( movie, index) => (
        <div key={index}>
          <h3>Title: {movie.title}</h3>
          <h4>Movie Length: {movie.time}</h4>
            {movie.genres.map(( genre, index) => (
              <h4 key={index}>{genre}</h4>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Movies;
