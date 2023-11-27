import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AutrorName, Review } from './Reviews.styled';
import { getMovieReviews } from 'utils/api';
import { Loader } from 'components';

export const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [review, setReview] = useState([]);

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
    <>
      {isLoading && <Loader />}
      {isLoading ||
        (review.length === 0 && (
          <p>We don't hawe any reviews for this movie.</p>
        ))}

      {review.length > 0 && (
        <ul>
          {review.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <AutrorName>{`Autror: ${author}`}</AutrorName>
                <Review>{content}</Review>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
