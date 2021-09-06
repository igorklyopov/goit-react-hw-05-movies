import { BASE_URL, API_KEY } from "./moviesApiConstants";

function handlingResponseStatus(response) {
  if (response.ok) {
    return response.json();
  }
  throw new Error("Sorry, something went wrong ...");
}

function fetchMoviesByName(movieName, pageNumber) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${pageNumber}&language=en-US&include_adult=false&query=${movieName}`
  ).then(handlingResponseStatus);
}

function fetchPopularMoviesDay(pageNumber) {
  return fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${pageNumber}&language=en-US`
  ).then(handlingResponseStatus);
}

function fetchMovieById(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  ).then(handlingResponseStatus);
}

function fetchMovieCast(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  ).then(handlingResponseStatus);
}

function fetchMovieReviews(movieId, pageNumber) {
  return fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
  ).then(handlingResponseStatus);
}

export {
  fetchMoviesByName,
  fetchPopularMoviesDay,
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReviews,
};
