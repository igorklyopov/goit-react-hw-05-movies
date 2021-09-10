import React from "react";
import { useRouteMatch, useLocation, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import SearchMoviesForm from "../../components/SearchMoviesForm/SearchMoviesForm";
import { useState, useEffect } from "react";
import { fetchMoviesByName } from "../../services/moviesApiService";
import { loadingStatus } from "../../utils/loadingStateStatusConstants";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import Loader from "../../components/Loader/Loader";

const useStyles = makeStyles((theme) => ({}));

export default function MoviesPage() {
  const classes = useStyles();
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const searchQuery = new URLSearchParams(location.search).get("query");
  console.log("searchQuery:", searchQuery);
  useEffect(() => {
    if (searchQuery === null) return;

    setLoadStatus(loadingStatus.PENDING);
    fetchMoviesByName(searchQuery, pageNumber)
      .then((movies) => {
        setMovies(movies.results);
        setLoadStatus(loadingStatus.RESOLVED);
      })
      .catch(() => console.error("fetchMoviesByName response not Ok"));
  }, [searchQuery, location, pageNumber]);

  const onSearchFormSubmit = (searchQuery) => {
    // setSearchQuery(searchQuery);
    // setPageNumber(1);
    history.push({ ...location, search: `query=${searchQuery}` });
  };

  return (
    <>
      <section className="movieDetails">
        <Container>
          <h1 className="visuallyHidden">
            Find and view detailed movie information
          </h1>

          <SearchMoviesForm getFormData={onSearchFormSubmit} />

          {loadStatus === loadingStatus.PENDING && <Loader />}
          {loadStatus === loadingStatus.RESOLVED && (
            <MoviesGallery movies={movies} url={url} />
          )}
          {loadStatus === loadingStatus.REJECTED && <h2>Oops...</h2>}
        </Container>
      </section>
    </>
  );
}
