import React from 'react';
import { useLocation } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <h1>Movies</h1>
    </div>
  );
};

export default Movies;
