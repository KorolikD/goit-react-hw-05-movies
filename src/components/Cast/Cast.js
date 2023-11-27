import { getMovieCredits } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import male from '../../img/male.jpg';
import female from '../../img/female.jpg';
import { Loader } from 'components/Loader/Loader';
import { ActorName, CastList, Character, ProfileImg } from './Cast.styled';

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
      {isLoading && <Loader />}
      {cast.length > 0 ? (
        <CastList>
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
                <ProfileImg src={imgLink} alt={name} width={200} />
                <ActorName>{name}</ActorName>
                <Character>{`Character: ${character}`}</Character>
              </li>
            );
          })}
        </CastList>
      ) : null}
    </div>
  );
};
