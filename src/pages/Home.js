import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'helpers/api';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

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
      <h1>Trending today</h1>

      {isLoading && <p>Завантаження...</p>}

      {trendingMovies.length > 0 ? (
        <ul>
          {trendingMovies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}{' '}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Home;
