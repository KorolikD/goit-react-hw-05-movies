import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieDetailsById } from 'utils/api';
import {
  AdditionalInformation,
  GoBackBtn,
  Loader,
  MovieCard,
} from 'components';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieDetailsById(movieId);
        setMovie(response);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    getMovie();
  }, [movieId]);

  return (
    <>
      <GoBackBtn />

      {isLoading && <Loader />}

      {movie && (
        <>
          <MovieCard data={movie} />
          <hr style={{ marginTop: '0' }} />
          <AdditionalInformation />
          <hr style={{ marginBottom: '12px' }} />
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
