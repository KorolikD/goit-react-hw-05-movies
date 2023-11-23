import React, { useEffect, useState } from 'react';
import { getTrendingMovie } from 'helpers/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        // setError(false);

        const response = await getTrendingMovie();
        setTrendingMovies(response.results);
      } catch (error) {
        // setError(true);
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
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Home;
