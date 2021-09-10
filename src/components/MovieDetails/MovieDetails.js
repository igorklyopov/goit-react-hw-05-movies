import { BASE_IMG_URL } from "../../services/moviesApiConstants";

export default function MovieDetails({ movie }) {
  const { poster_path, title, overview, vote_average, vote_count } = movie;

  const movieGenres =
    movie !== null
      ? movie.genres.map((genre) => genre.name).join(", ")
      : "Unknown";

  const formattedReleaseDate = movie.release_date
    .split("-")
    .reverse()
    .join(".");

  return (
    <div>
      <img src={`${BASE_IMG_URL}${poster_path}`} alt={title} width="250" />
      <h3>{title}</h3>
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
    </div>
  );
}
