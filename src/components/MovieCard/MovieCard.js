import { Poster, PreTitle, Wrapper } from './MovieCard.styled';
import imgByDef from '../../img/img-by-def.jpg';

export const MovieCard = ({ data }) => {
  const { original_title, poster_path, vote_average, overview, genres } = data;
  return (
    <Wrapper>
      <Poster
        src={
          poster_path !== null
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : imgByDef
        }
        alt={original_title}
        width={300}
      />
      <div>
        <h2>{original_title}</h2>
        <p>{`User Score: ${Math.round(vote_average * 10)}%`}</p>
        <PreTitle>Overview:</PreTitle>
        <p>{overview}</p>
        <PreTitle>Genres:</PreTitle>
        <p>{genres.map(el => el.name).join(', ')}</p>
      </div>
    </Wrapper>
  );
};
