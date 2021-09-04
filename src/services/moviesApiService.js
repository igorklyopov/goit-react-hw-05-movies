const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "0425708b766634a264f7b84cc81ebcd7";
// const SEARCH_MOVIE = "search/movie"; //получение фильма по названию
// const TRENDING_DAY = "trending/movie/day"; //получение самых популярных фильмов за день

// export { BASE_URL, API_KEY, SEARCH_MOVIE, TRENDING_DAY };

function fetchMoviesByName(movieName, pageNumber) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${pageNumber}&language=en-US&include_adult=false&query=${movieName}`
  ).then((response) => response.json());
}

function fetchPopularMoviesDay(pageNumber) {
  return fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${pageNumber}&language=en-US`
  ).then((response) => response.json());
}

function fetchMovieById(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

function fetchMovieCast(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}?credits?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

function fetchMovieReviews(movieId, pageNumber) {
  return fetch(
    `${BASE_URL}/movie/${movieId}?reviews?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
  ).then((response) => response.json());
}

export {
  fetchMoviesByName,
  fetchPopularMoviesDay,
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReviews,
};
