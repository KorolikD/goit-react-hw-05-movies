import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDQ0NWFiZGM2Njk2ZGJkZmU1MmU4ZTY5YWI5NzcyNCIsInN1YiI6IjY1NGY2YjExMjg2NmZhMTA4YjZlMGQ5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cMDqHvE6cKl3jitWT16Pyhx2laItjGSAzGHFfRL7D3U';

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?language=en-US`);
  return response.data;
};

// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
export const getMovieDetailsById = async id => {
  const response = await axios.get(`/movie/${id}?language=en-US`);
  return response.data;
};

// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
export const searchMoviesByQuery = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
  return response.data;
};

// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
export const getMovieCredits = async id => {
  const response = await axios.get(`/movie/${id}/credits?language=en-US`);
  return response.data;
};

// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
export const getMovieReviews = async id => {
  const response = await axios.get(
    `/movie/${id}/reviews?language=en-US&page=1`
  );
  return response.data;
};
