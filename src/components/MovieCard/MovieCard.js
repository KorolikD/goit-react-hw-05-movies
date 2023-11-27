import { Poster, PreTitle, Wraper } from './MovieCard.styled';

export const MovieCard = ({ data }) => {
  const { original_title, poster_path, vote_average, overview, genres } = data;
  return (
    <Wraper>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
        width={300}
      />
      <div>
        <h2>{original_title}</h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <PreTitle>Overview</PreTitle>
        <p>{overview}</p>
        <PreTitle>Genres</PreTitle>
        <p>{genres.map(el => el.name).join(', ')}</p>
      </div>
    </Wraper>
  );
};
