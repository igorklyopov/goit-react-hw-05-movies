import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import Container from "@material-ui/core/Container";
import Pagination from "@material-ui/lab/Pagination";

import { fetchPopularMoviesDay } from "../../services/moviesApiService";
import { loadingStatus } from "../../utils/loadingStateStatusConstants";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import Loader from "../../components/Loader/Loader";
import ErrorNotification from "../../components/ErrorNotification/ErrorNotification";
import StylesHomePage from "./StylesHomePage";
import StylesPagination from "../../components/Pagination/StylesPagination";

export default function HomePage() {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);
  const location = useLocation();
  const history = useHistory();

  const pageNumber = new URLSearchParams(location.search).get("page") ?? 1;
  const activePage = parseInt(pageNumber);

  useEffect(() => {
    setLoadStatus(loadingStatus.PENDING);

    fetchPopularMoviesDay(pageNumber)
      .then(({ results, total_pages }) => {
        setMovies(results);
        setTotalPages(total_pages);
        setLoadStatus(loadingStatus.RESOLVED);
      })
      .catch((error) => {
        setError(error.message);
        setLoadStatus(loadingStatus.REJECTED);
      });
  }, [pageNumber]);

  const onPageChange = (event, value) => {
    history.push({ ...location, search: `page=${value}` });
  };

  const classes = StylesHomePage();
  const styles = StylesPagination();

  return (
    <>
      <section>
        <Container maxWidth={"md"}>
          <h1 className={classes.homePageTitle}>Trending today</h1>
          {loadStatus === loadingStatus.PENDING && <Loader />}
          {loadStatus === loadingStatus.RESOLVED && (
            <MoviesGallery movies={movies} url={"/movies"} />
          )}
          {loadStatus === loadingStatus.REJECTED && (
            <ErrorNotification message={error} />
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
