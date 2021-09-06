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
import "../../index.css";
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

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    // paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function HomePage() {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setLoadStatus(loadingStatus.PENDING);

    fetchPopularMoviesDay(pageNumber).then((movies) => {
      // console.log(movies.results);
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
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
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
    </>
  );
}
