import React, { useEffect, useState } from 'react';

import { API } from 'api';
import MovieLinkList from 'components/MovieLinkList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    API.getTrendMovies().then(res => setTrendingMovies(res.data.results));
  }, []);

  return (
    <div>
      <h3>Trending today</h3>

      <MovieLinkList items={trendingMovies} />
    </div>
  );
};

export default Home;
