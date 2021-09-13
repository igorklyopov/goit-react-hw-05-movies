import { useState, useEffect } from "react";
import { useRouteMatch, useLocation, useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Pagination from "@material-ui/lab/Pagination";

import SearchMoviesForm from "../../components/SearchMoviesForm/SearchMoviesForm";
import { fetchMoviesByName } from "../../services/moviesApiService";
import { loadingStatus } from "../../utils/loadingStateStatusConstants";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import Loader from "../../components/Loader/Loader";
import ErrorNotification from "../../components/ErrorNotification/ErrorNotification";
import errorImg from "../../images/hedgehog-in-the-fog.jpg";
import StylesPagination from "../../components/Pagination/StylesPagination";

export default function MoviesPage() {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const searchQuery = new URLSearchParams(location.search).get("query");
  const pageNumber = new URLSearchParams(location.search).get("page") ?? 1;
  const activePage = parseInt(pageNumber);

  const styles = StylesPagination();

  useEffect(() => {
    if (searchQuery === null) return;
    if (searchQuery === "") {
      setError("Please enter the title of the movie!");
      setLoadStatus(loadingStatus.REJECTED);
      return;
    }

    setLoadStatus(loadingStatus.PENDING);
    fetchMoviesByName(searchQuery, pageNumber)
      .then(({ results, total_pages }) => {
        setMovies(results);
        setTotalPages(total_pages);

        if (results.length !== 0) {
          setLoadStatus(loadingStatus.RESOLVED);
        } else {
          setError("No results were found for this query!");
          setLoadStatus(loadingStatus.REJECTED);
        }
      })
      .catch((error) => {
        setError(error.message);
        setLoadStatus(loadingStatus.REJECTED);
      });
  }, [searchQuery, pageNumber]);

  const onSearchFormSubmit = (searchQuery) => {
    history.push({ ...location, search: `query=${searchQuery}` });
  };

  const onPageChange = (event, value) => {
    history.push({ ...location, search: `query=${searchQuery}&page=${value}` });
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
            <ErrorNotification message={error} img={errorImg} />
          )}
          {totalPages > 1 && (
            <Pagination
              className={styles.pagination}
              size="large"
              count={totalPages}
              page={activePage}
              onChange={onPageChange}
            />
          )}
        </Container>
      </section>
    </>
  );
}
