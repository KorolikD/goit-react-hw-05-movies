import { searchMoviesByQuery } from 'utils/api';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader, MoviesList, Searchbar } from 'components';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const getMovies = async () => {
      if (query === '') {
        return;
      }
      try {
        setIsLoading(true);
        setMovies([]);
        const response = await searchMoviesByQuery(query);
        setMovies(response.results);
      } catch (error) {
        throw Error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [query]);

  const updateSearchParams = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <Searchbar onSubmit={updateSearchParams} />

      {isLoading && <Loader />}

      {movies.length > 0 && <MoviesList data={movies} />}
    </>
  );
};

export default Movies;
