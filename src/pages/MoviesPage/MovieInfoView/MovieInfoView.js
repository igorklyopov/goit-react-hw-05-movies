import { useState, useEffect, Suspense, lazy } from "react";
import { Route, useParams } from "react-router";
import { NavLink, useRouteMatch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { fetchMovieById } from "../../../services/moviesApiService";
import { loadingStatus } from "../../../utils/loadingStateStatusConstants";
import Loader from "../../../components/Loader/Loader";

import MovieReviewsView from "../MovieReviewsView/MovieReviewsView";
import MovieCastView from "../MovieCastView/MovieCastView";
import MovieInfoCard from "../../../components/MovieInfoCard/MovieInfoCard";

export default function MovieInfoView() {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    setLoadStatus(loadingStatus.PENDING);

    fetchMovieById(movieId).then((result) => {
      setMovie(result);
      setLoadStatus(loadingStatus.RESOLVED);
    });
  }, [movieId]);

  return (
    <>
      {loadStatus === loadingStatus.PENDING && <Loader />}
      {loadStatus === loadingStatus.RESOLVED && (
        <Container maxWidth="false">
          <MovieInfoCard movie={movie} />
          <NavLink to={`${url}/cast`}>Cast</NavLink>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          <Suspense fallback={<Loader />}>
            <Route path={`${path}/cast`}>
              <MovieCastView movieId={movieId} />
            </Route>
            <Route path={`${path}/reviews`}>
              <MovieReviewsView movieId={movieId} />
            </Route>
          </Suspense>
        </Container>
      )}
      {loadStatus === loadingStatus.REJECTED && <h2>Oops...</h2>}
    </>
  );
}
