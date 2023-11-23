import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <div>
      <h2>MovieDetails</h2>
    </div>
  );
};

export default MovieDetails;
