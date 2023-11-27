import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { searchMoviesByQuery } from 'helpers/api';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const { value: query } = event.target.elements.search;

  //   updateSearchParams(query);
  //   event.target.reset();
  // };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="search" autoComplete="off" />
        <button type="submit">Search</button>
      </form> */}
      <Searchbar onSubmit={updateSearchParams} />

      {isLoading && <Loader />}
      {movies.length > 0 ? <MoviesList data={movies} /> : null}
    </div>
  );
};

export default Movies;
