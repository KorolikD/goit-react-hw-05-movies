import { getMovieCredits } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import male from '../../img/male.jpg';
import female from '../../img/female.jpg';
import { Loader } from 'components/Loader/Loader';

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

  console.log(cast);

  return (
    <div>
      {isLoading && <Loader />}
      {cast.length > 0 ? (
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          {cast.map(({ cast_id, profile_path, name, character, gender }) => {
            const imgLincByGender = gender => {
              if (gender === 1) {
                return profile_path !== null
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `${female}`;
              } else {
                return profile_path !== null
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `${male}`;
              }
            };

            const imgLink = imgLincByGender(gender);

            return (
              <li key={cast_id} style={{ width: '200px' }}>
                <img src={imgLink} alt={name} width={200} />
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
