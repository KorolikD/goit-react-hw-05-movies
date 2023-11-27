import { Link, useLocation } from 'react-router-dom';
import { MovieListItem } from './MoviesList.styled';

export const MoviesList = ({ data }) => {
  const location = useLocation();

  return (
    <ul>
      {data.map(({ id, title }) => {
        return (
          <MovieListItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}{' '}
            </Link>
          </MovieListItem>
        );
      })}
    </ul>
  );
};
