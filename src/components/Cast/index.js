import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API } from 'api';
import { IMAGE_URL } from 'constants/common';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    API.getMovieCast(movieId).then(res => setCast(res.data.cast));
  }, [movieId]);

  if (!cast) return null;

  return (
    <ul>
      {cast.map(({ id, character, name, profile_path }) => (
        <li key={id}>
          <img width={100} src={`${IMAGE_URL}${profile_path}`} alt="" />
          <h6>{name}</h6>
          <h6>Character: {character}</h6>
        </li>
      ))}
    </ul>
  );
};

Cast.propTypes = {};

export default Cast;
