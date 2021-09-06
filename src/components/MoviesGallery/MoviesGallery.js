import React from "react";
import { NavLink, Link, useRouteMatch, Route, Switch } from "react-router-dom";
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
// import Link from "@material-ui/core/Link";
import "../../index.css";
//////////////////////////////////
import { BASE_IMG_URL } from "../../services/moviesApiConstants";
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

const onMovieCardClick = (e) => {
  // e.preventDefault();
  // console.log("click card", e.currentTarget.dataset.id);
};

export default function MoviesGallery({ movies, url }) {
  const classes = useStyles();
  // const { url } = useRouteMatch();

  return (
    <Grid container spacing={4}>
      {movies.map((movie) => (
        <Grid component="ul" item key={movie.id} xs={12} sm={6} md={4}>
          <Card
            component="li"
            className={classes.card}
            onClick={onMovieCardClick}
            data-id={movie.id}
          >
            <Link to={`${url}/${movie.id}`}>
              <CardMedia
                component="img"
                className={classes.cardMedia}
                src={`${BASE_IMG_URL}${movie.poster_path}`}
                alt={movie.title}
                title={movie.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {movie.title}
                </Typography>
                {/* <Typography>{movie.overview}</Typography> */}
              </CardContent>
              <CardActions>
                {/* <Button size="small" color="primary">
                      View
                    </Button> */}
              </CardActions>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
