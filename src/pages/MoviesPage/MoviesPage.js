import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

//////////////////////////////////
import SearchMoviesForm from "../../components/SearchMoviesForm/SearchMoviesForm";
import { useState, useEffect } from "react";
import { fetchMoviesByName } from "../../services/moviesApiService";
import { loadingStatus } from "../../utils/loadingStateStatusConstants";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import Loader from "../../components/Loader/Loader";
///////////////////////////////////

const useStyles = makeStyles((theme) => ({}));

export default function MoviesPage() {
  const classes = useStyles();
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [movies, setMovies] = useState([]);
  // const [movieName, setMovieName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { url } = useRouteMatch();

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    setLoadStatus(loadingStatus.PENDING);

    fetchMoviesByName(searchQuery, pageNumber)
      .then((movies) => {
        setMovies(movies.results);
        setLoadStatus(loadingStatus.RESOLVED);
      })
      .catch(() => console.error("fetchMoviesByName response not Ok"));
  }, [searchQuery, pageNumber]);

  const onSearchFormSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
    setMovies([]);
    setPageNumber(1);
  };

  return (
    <>
      <section className="movieSearch">
        <Container maxWidth="false">
          <h1 className="visuallyHidden">
            Find and view detailed movie information
          </h1>
          {loadStatus === loadingStatus.IDLE && (
            <SearchMoviesForm getFormData={onSearchFormSubmit} />
          )}
          {loadStatus === loadingStatus.PENDING && <Loader />}
          {loadStatus === loadingStatus.RESOLVED && (
            <MoviesGallery movies={movies} url={url} />
          )}
          {loadStatus === loadingStatus.REJECTED && <h2>Oops...</h2>}
          {/* <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography> */}
          {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
        </Container>
      </section>
    </>
  );
}
