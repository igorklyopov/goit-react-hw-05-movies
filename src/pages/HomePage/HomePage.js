import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import "../../index.css";
//////////////////////////////////
import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import {
  fetchMoviesByName,
  fetchPopularMoviesDay,
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReviews,
} from "../../services/moviesApiService";
import { loadingStatus } from "../../utils/loadingStateStatusConstants";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import Loader from "../../components/Loader/Loader";
///////////////////////////////////

const useStyles = makeStyles((theme) => ({}));

export default function HomePage() {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setLoadStatus(loadingStatus.PENDING);

    fetchPopularMoviesDay(pageNumber).then((movies) => {
      setMovies(movies.results);
      setLoadStatus(loadingStatus.RESOLVED);
    });
  }, [pageNumber]);

  // const { url } = useRouteMatch();
  // console.log(url);

  const onNextPageClick = () => {
    setPageNumber(pageNumber + 1);
    console.log("onLoadMoreClick");
  };
  const classes = useStyles();

  return (
    <>
      <section>
        <Container maxWidth="false">
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
          {loadStatus === loadingStatus.REJECTED && <h2>Oops...</h2>}
          <button type="button" onClick={onNextPageClick}>
            Load more
          </button>
        </Container>
      </section>
    </>
  );
}
