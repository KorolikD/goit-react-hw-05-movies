import React, { useEffect, useState } from 'react';
import { Loader, MoviesList } from 'components';
import { getTrendingMovies } from 'utils/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const response = await getTrendingMovies();
        setTrendingMovies(response.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>

      {isLoading && <Loader />}
      {trendingMovies.length > 0 && <MoviesList data={trendingMovies} />}
    </>
  );
};

export default Home;
