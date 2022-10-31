import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { API } from 'api';
import MovieLinkList from 'components/MovieLinkList';
import { Box } from 'components/common/Box';

const Movies = () => {
  const [resultItems, setResultItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query?.length) {
      API.searchMovie(query).then(res => setResultItems(res.data.results));
    } else {
      setResultItems([]);
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target[0].value;

    setSearchParams(query?.length ? { query } : {});
  };

  return (
    <div>
      <Box>
        <form onSubmit={handleSubmit}>
          <input type="search" defaultValue={query} />
          <button type="submit">Search</button>
        </form>
      </Box>

      <MovieLinkList items={resultItems} />
    </div>
  );
};

Movies.propTypes = {};

export default Movies;
