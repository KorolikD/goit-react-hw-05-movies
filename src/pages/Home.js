import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'helpers/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

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
    <div>
      {isLoading && <Loader />}

      {trendingMovies.length > 0 ? (
        <>
          <h2>Trending today</h2>
          <MoviesList data={trendingMovies} />
        </>
      ) : null}
    </div>
  );
};

export default Home;
