import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieLinkList = ({ items }) => {
  const location = useLocation();

  return (
    <ul>
      {items.map(({ id, title, name }) => (
        <li key={id}>
          <NavLink to={`/movies/${id.toString()}`} state={{ from: location }}>
            {title ?? name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MovieLinkList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default MovieLinkList;
