import { useState, useEffect, Suspense, lazy } from "react";
import { Route, useHistory, useParams } from "react-router";
import { NavLink, useRouteMatch, useLocation, Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

import { fetchMovieById } from "../../services/moviesApiService";
import { loadingStatus } from "../../utils/loadingStateStatusConstants";
import Loader from "../../components/Loader/Loader";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

const Reviews = lazy(() =>
  import("../../components/Reviews/Reviews" /* webpackChunkName: "reviews" */)
);
const Cast = lazy(() =>
  import("../../components/Cast/Cast" /* webpackChunkName: "cast" */)
);

export default function MovieDetailsPage() {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [movie, setMovie] = useState(null);
  let { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const [prevLocation, setPrevLocation] = useState(
    location?.state?.from ?? "/"
  );

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
        <Container maxWidth={false}>
          <Link to={prevLocation}>{`< Go back`}</Link>
          <MovieDetails movie={movie} />
          <NavLink to={`${url}/cast`}>Cast</NavLink>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          <Suspense fallback={<Loader />}>
            <Route path={`${path}/cast`}>
              <Cast />
            </Route>
            <Route path={`${path}/reviews`}>
              <Reviews />
            </Route>
          </Suspense>
        </Container>
      )}
      {loadStatus === loadingStatus.REJECTED && <h2>Oops...</h2>}
    </>
  );
}
