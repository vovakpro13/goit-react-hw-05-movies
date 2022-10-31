import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export const API = {
  getTrendMovies: () => instance('trending/all/week'),
  searchMovie: query => instance('search/movie', { params: { query } }),
  getSingleMovie: id => instance(`movie/${id}`),
  getMovieCast: id => instance(`movie/${id}/credits`),
  getMovieReviews: id => instance(`movie/${id}/reviews`),
};
