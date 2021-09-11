import { useState, useEffect } from "react";
import { useRouteMatch, useLocation, useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";

import SearchMoviesForm from "../../components/SearchMoviesForm/SearchMoviesForm";
import { fetchMoviesByName } from "../../services/moviesApiService";
import { loadingStatus } from "../../utils/loadingStateStatusConstants";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import Loader from "../../components/Loader/Loader";
import ErrorNotification from "../../components/ErrorNotification/ErrorNotification";

export default function MoviesPage() {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const searchQuery = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (searchQuery === null) return;
    if (searchQuery === "") {
      setError("Please enter the title of the movie!");
      setLoadStatus(loadingStatus.REJECTED);
      return;
    }

    setLoadStatus(loadingStatus.PENDING);
    fetchMoviesByName(searchQuery, pageNumber)
      .then((movies) => {
        setMovies(movies.results);

        if (movies.results.length !== 0) {
          setLoadStatus(loadingStatus.RESOLVED);
        } else {
          setError(`No results were found for "${searchQuery}"!`);
          setLoadStatus(loadingStatus.REJECTED);
        }
      })
      .catch((error) => {
        setError(error.message);
        setLoadStatus(loadingStatus.REJECTED);
      });
  }, [searchQuery, location, pageNumber]);

  const onSearchFormSubmit = (searchQuery) => {
    // setSearchQuery(searchQuery);
    // setPageNumber(1);
    history.push({ ...location, search: `query=${searchQuery}` });
  };

  return (
    <>
      <section className="movieDetails">
        <Container maxWidth={"md"}>
          <h1 className="visuallyHidden">
            Find and view detailed movie information
          </h1>

          <SearchMoviesForm getFormData={onSearchFormSubmit} />

          {loadStatus === loadingStatus.PENDING && <Loader />}
          {loadStatus === loadingStatus.RESOLVED && (
            <MoviesGallery movies={movies} url={url} />
          )}
          {loadStatus === loadingStatus.REJECTED && (
            <ErrorNotification message={error} />
          )}
        </Container>
      </section>
    </>
  );
}
