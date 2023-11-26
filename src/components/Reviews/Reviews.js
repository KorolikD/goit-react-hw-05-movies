import { getMovieReviews } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [review, setReview] = useState({});

  useEffect(() => {
    const getCast = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieReviews(movieId);
        setReview(response.results);
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
      {review.length > 0 ? (
        <ul>
          {review.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p> Autror: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't hawe any reviews for this movie.</p>
      )}
    </div>
  );
};
