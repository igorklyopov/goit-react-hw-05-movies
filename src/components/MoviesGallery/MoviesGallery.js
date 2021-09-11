import React from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import { BASE_IMG_URL } from "../../services/moviesApiConstants";
import noImage from "../../images/no-image.png";

const useStyles = makeStyles((theme) => ({
  movieCardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  movieCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  movieImg: {
    height: "450px",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function MoviesGallery({ movies, url }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Grid container component="ul" spacing={4} className="list">
      {movies.map(({ id, poster_path, title }) => (
        <Grid component="li" item key={id} xs={12} sm={6} md={4}>
          <Link
            to={{
              pathname: `${url}/${id}`,
              state: { from: location },
            }}
          >
            <Card component="div" className={classes.movieCard}>
              <CardMedia
                component="img"
                className={classes.movieImg}
                src={poster_path ? `${BASE_IMG_URL}${poster_path}` : noImage}
                alt={title}
                title={title}
                height="80%"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  gutterBottom
                  variant="h6"
                  align="center"
                  component="h2"
                >
                  {title}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  url: PropTypes.string.isRequired,
};
