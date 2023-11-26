import { getMovieCredits } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [cast, setCast] = useState({});

  useEffect(() => {
    const getCast = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieCredits(movieId);
        setCast(response.cast);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Завантаження...</p>}
      {cast.length > 0 ? (
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          {cast.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id} style={{ width: '200px' }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt=""
                  width={200}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
