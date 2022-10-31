import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { API } from 'api';
import { IMAGE_URL } from 'constants/common';
import { Box } from 'components/common/Box';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.getSingleMovie(movieId).then(res => setMovie(res.data));
  }, [movieId]);

  if (!movie) return null;

  const from = location?.state?.from;

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <div>
      <NavLink to={from}>
        <button>Go Back</button>
      </NavLink>

      <Wrapper>
        <img
          src={`${IMAGE_URL}${poster_path}`}
          width={300}
          height={400}
          alt=""
        />

        <Box>
          <h3>
            {title} ({release_date.split('-')[0]})
          </h3>

          <p>User Score: {vote_average * 10}%</p>

          <h3>Overview</h3>

          <p>{overview}</p>

          <h3>Overview</h3>

          <pre>
            <p>
              {genres.map(({ name }) => (
                <span key={name}>
                  {name}
                  {'   '}
                </span>
              ))}
            </p>
          </pre>
        </Box>
      </Wrapper>

      <hr />

      <h3>Additional Information</h3>

      <ul>
        <li>
          <NavLink to="cast" state={{ from }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from }}>
            Reviews
          </NavLink>
        </li>
      </ul>

      <hr />

      <Outlet />
    </div>
  );
};

MovieDetails.propTypes = {};

export default MovieDetails;
