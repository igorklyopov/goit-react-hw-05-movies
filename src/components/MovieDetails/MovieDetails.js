import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { BASE_IMG_URL } from "../../services/moviesApiConstants";
import StylesMovieDetails from "./StylesMovieDetails";

export default function MovieDetails({ movie }) {
  const { poster_path, title, overview, vote_average, vote_count } = movie;

  const classes = StylesMovieDetails();

  const movieGenres =
    movie !== null
      ? movie.genres.map((genre) => genre.name).join(", ")
      : "Unknown";

  const formattedReleaseDate = movie.release_date
    .split("-")
    .reverse()
    .join(".");

  return (
    <Card component="div" className={classes.movieDetailsCard}>
      <CardMedia
        component="img"
        src={`${BASE_IMG_URL}${poster_path}`}
        alt={title}
        className={classes.movieDetailsImg}
        // height="80%"
      />
      <CardContent className={classes.movieDetailsContent}>
        <h2>{title}</h2>
        <p>Release date: {formattedReleaseDate}</p>
        <p>
          <span>Genre: </span>
          <span>{movieGenres}</span>
        </p>
        <p>{overview}</p>
        <p>
          {vote_average !== 0 ? (
            <>
              <span>Rating: </span>
              <span>{vote_average} </span>
              <span>(based on {vote_count} reviews)</span>
            </>
          ) : (
            <span> No reviews yet </span>
          )}
        </p>
      </CardContent>
    </Card>
  );
}
