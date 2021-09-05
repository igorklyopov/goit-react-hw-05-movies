import { useState, useEffect } from "react";
import { Route, useParams } from "react-router";
import { NavLink, useRouteMatch } from "react-router-dom";
import { fetchMovieById } from "../../../services/moviesApiService";

export default function MovieInfoView() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    fetchMovieById(movieId).then((result) => {
      setMovie(result);
    });
  }, [movieId]);

  const movieGenres =
    movie !== null
      ? movie.genres.map((genre) => genre.name).join(", ")
      : "Unknown";

  return (
    <>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            width="250"
          />
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
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
      )}
      <NavLink to={`${url}/cast`}>Cast</NavLink>
      <NavLink to={`${url}/reviews`}>Reviews</NavLink>
      <Route path="/movies/:movieId/cast">
        <h1>cast</h1>
      </Route>
      <Route path="/movies/:movieId/reviews">
        <h1>reviews</h1>
      </Route>
    </>
  );
}

const m = {
  adult: false,
  backdrop_path: "/pUc51UUQb1lMLVVkDCaZVsCo37U.jpg",
  belongs_to_collection: {
    id: 748919,
    name: "Don't Breathe Collection",
    poster_path: "/b4mJz9qvh4i328aIO0Ciqqy2DGA.jpg",
    backdrop_path: null,
  },
  budget: 10000000,
  genres: [
    { id: 53, name: "Thriller" },
    { id: 27, name: "Horror" },
  ],
  homepage: "https://www.dontbreathemovie.com/",
  id: 482373,
  imdb_id: "tt6246322",
  original_language: "en",
  original_title: "Don't Breathe 2",
  overview:
    "The Blind Man has been hiding out for several years in an isolated cabin and has taken in and raised a young girl orphaned from a devastating house fire. Their quiet life together is shattered when a group of criminals kidnap the girl, forcing the Blind Man to leave his safe haven to save her.",
  popularity: 1695.663,
  poster_path: "/hRMfgGFRAZIlvwVWy8DYJdLTpvN.jpg",
  production_companies: [
    {
      id: 768,
      logo_path: null,
      name: "Ghost House Pictures",
      origin_country: "US",
    },
    {
      id: 11341,
      logo_path: "/xytTBODEy3p20ksHL4Ftxr483Iv.png",
      name: "Stage 6 Films",
      origin_country: "US",
    },
    {
      id: 17393,
      logo_path: "/k28sCof6kheeOicLqL6EXX2GHov.png",
      name: "Good Universe",
      origin_country: "US",
    },
    {
      id: 34,
      logo_path: "/GagSvqWlyPdkFHMfQ3pNq6ix9P.png",
      name: "Sony Pictures",
      origin_country: "US",
    },
    {
      id: 125512,
      logo_path: null,
      name: "Bad Hombre Films",
      origin_country: "US",
    },
  ],
  production_countries: [
    { iso_3166_1: "US", name: "United States of America" },
  ],
  release_date: "2021-08-12",
  revenue: 35305880,
  runtime: 98,
  spoken_languages: [
    { english_name: "English", iso_639_1: "en", name: "English" },
    { english_name: "Hungarian", iso_639_1: "hu", name: "Magyar" },
  ],
  status: "Released",
  tagline: "Bad things happen to bad people.",
  title: "Don't Breathe 2",
  video: false,
  vote_average: 7.6,
  vote_count: 225,
};
