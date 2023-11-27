import { Loader } from 'components/Loader/Loader';
import { getMovieDetailsById } from 'helpers/api';
import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

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

  const backLinkHref = useRef(location.state?.from ?? '/');

  const { original_title, poster_path, vote_average, overview, genres } = movie;

  return (
    <div>
      <Link to={backLinkHref.current}>Go back</Link>

      {isLoading && <Loader />}

      {movie.id ? (
        <>
          <div style={{ display: 'flex' }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
              width={300}
            />
            <div>
              <h2>{original_title}</h2>
              <p>User Score: {Math.round(vote_average * 10)}%</p>
              <p>Overview</p>
              <p>{overview}</p>
              <p>Genres</p>
              <p>{genres.map(el => el.name).join(', ')}</p>
            </div>
          </div>
          <hr />
          <p>Additional Information</p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to={'cast'}>Cast</Link>
            <Link to={'reviews'}>Reviews</Link>
          </div>
          <hr />
          <Outlet />
        </>
      ) : null}
    </div>
  );
};

export default MovieDetails;
