import { BASE_IMG_URL } from "../../services/moviesApiConstants";

export default function MovieDetails({ movie }) {
  const movieGenres =
    movie !== null
      ? movie.genres.map((genre) => genre.name).join(", ")
      : "Unknown";

  return (
    <div>
      <img
        src={`${BASE_IMG_URL}${movie.poster_path}`}
        alt={movie.title}
        width="250"
      />
      <h3>{movie.title}</h3>
      <p>Release date: {movie.release_date}</p>
      <p>
        <span>Genre: </span>
        <span>{movieGenres}</span>
      </p>
      <p>{movie.overview}</p>
      <p>
        {movie.vote_average !== 0 ? (
          <>
            <span>rating: </span>
            <span>{movie.vote_average} </span>
            <span>(based on {movie.vote_count} reviews)</span>
          </>
        ) : (
          <span> No reviews yet </span>
        )}
      </p>
    </div>
  );
}
