import React from "react";
import { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { fetchPopularMoviesDay } from "../../services/moviesApiService";
import { loadingStatus } from "../../utils/loadingStateStatusConstants";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import Loader from "../../components/Loader/Loader";
import ErrorNotification from "../../components/ErrorNotification/ErrorNotification";

const useStyles = makeStyles((theme) => ({}));

export default function HomePage() {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoadStatus(loadingStatus.PENDING);

    fetchPopularMoviesDay(pageNumber)
      .then((movies) => {
        setMovies(movies.results);
        setLoadStatus(loadingStatus.RESOLVED);
      })
      .catch((error) => {
        setError(error.message);
        setLoadStatus(loadingStatus.REJECTED);
      });
  }, [pageNumber]);

  const onNextPageClick = () => {
    setPageNumber(pageNumber + 1);
  };

  const classes = useStyles();

  return (
    <>
      <section>
        <Container>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Trending today
          </Typography>
          {loadStatus === loadingStatus.PENDING && <Loader />}
          {loadStatus === loadingStatus.RESOLVED && (
            <MoviesGallery movies={movies} url={"/movies"} />
          )}
          {loadStatus === loadingStatus.REJECTED && (
            <ErrorNotification message={error} />
          )}
          <button type="button" onClick={onNextPageClick}>
            Load more
          </button>
        </Container>
      </section>
    </>
  );
}
