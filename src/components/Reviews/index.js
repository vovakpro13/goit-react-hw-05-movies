import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API } from 'api';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    API.getMovieReviews(movieId).then(res => setReviews(res.data.results));
  }, [movieId]);

  if (reviews === null) return null;

  if (!reviews.length) return <p>There is no reviews yet.</p>;

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h5>AUTHOR: {author}</h5>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

Reviews.propTypes = {};

export default Reviews;
