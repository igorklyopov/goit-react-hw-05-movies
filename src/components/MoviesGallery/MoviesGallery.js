import React from "react";
import {
  NavLink,
  Link,
  useRouteMatch,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
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

import { BASE_IMG_URL } from "../../services/moviesApiConstants";
import noImage from "../../images/no-image.jpg";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {},
  cardContent: {
    flexGrow: 1,
  },
}));

export default function MoviesGallery({ movies, url }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Grid container component="ul" spacing={4} className="list">
      {movies.map((movie) => (
        <Grid component="li" item key={movie.id} xs={12} sm={6} md={4}>
          <Link
            to={{
              pathname: `${url}/${movie.id}`,
              state: { from: location },
            }}
          >
            <Card component="div" className={classes.card}>
              <CardMedia
                component="img"
                className={classes.cardMedia}
                src={
                  movie.poster_path
                    ? `${BASE_IMG_URL}${movie.poster_path}`
                    : noImage
                }
                alt={movie.title}
                title={movie.title}
                height="80%"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  gutterBottom
                  variant="h6"
                  align="center"
                  component="h2"
                >
                  {movie.title}
                </Typography>
                {/* <Typography>{movie.overview}</Typography> */}
              </CardContent>
              <CardActions>
                {/* <Button size="small" color="primary">
                      View
                    </Button> */}
              </CardActions>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
