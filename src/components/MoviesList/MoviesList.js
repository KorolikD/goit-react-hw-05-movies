import { Link, useLocation } from 'react-router-dom';
import { MovieListItem } from './MoviesList.styled';
import { RiArrowRightSLine } from 'react-icons/ri';

export const MoviesList = ({ data }) => {
  const location = useLocation();

  return (
    <ul>
      {data.map(({ id, title }) => {
        return (
          <MovieListItem key={id}>
            <RiArrowRightSLine />
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </MovieListItem>
        );
      })}
    </ul>
  );
};
