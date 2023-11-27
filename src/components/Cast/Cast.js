import { getMovieCredits } from 'utils/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { ActorName, CastList, Character, ProfileImg } from './Cast.styled';
import { imgLincByGender } from 'utils/imgLincByGender';

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
    <>
      {isLoading && <Loader />}

      {cast.length > 0 && (
        <CastList>
          {cast.map(({ cast_id, profile_path, name, character, gender }) => {
            return (
              <li key={cast_id} style={{ width: '200px' }}>
                <ProfileImg
                  src={imgLincByGender(profile_path, gender)}
                  alt={name}
                  width={200}
                />
                <ActorName>{name}</ActorName>
                <Character>{`Character: ${character}`}</Character>
              </li>
            );
          })}
        </CastList>
      )}
    </>
  );
};
