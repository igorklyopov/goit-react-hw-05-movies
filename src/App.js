import React from "react";
import { NavLink, Route, Switch, Redirect, useParams } from "react-router-dom";
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
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { GlobalCss } from "./commonStyles/GlobalCss";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

//////////////////////////////////
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieInfoView from "./pages/MoviesPage/MovieInfoView/MovieInfoView";
import { useState, useEffect } from "react";
import {
  fetchMoviesByName,
  fetchPopularMoviesDay,
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReviews,
} from "./services/moviesApiService";

///////////////////////////////////

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "red",
    },
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
      <GlobalCss />
      <Header />
      {/* <Button variant="contained" className={classes.button}>
        Primary
      </Button> */}
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieInfoView />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}
