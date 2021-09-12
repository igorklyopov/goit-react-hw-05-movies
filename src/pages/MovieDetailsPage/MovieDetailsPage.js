import { useState, useEffect, Suspense, lazy } from "react";
import { Route, useParams } from "react-router";
import { NavLink, useRouteMatch, useLocation, Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { fetchMovieById } from "../../services/moviesApiService";
import { loadingStatus } from "../../utils/loadingStateStatusConstants";
import Loader from "../../components/Loader/Loader";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import StylesMovieDetailsPage from "./StylesMovieDetailsPage";

const Reviews = lazy(() =>
  import("../../components/Reviews/Reviews" /* webpackChunkName: "reviews" */)
);
const Cast = lazy(() =>
  import("../../components/Cast/Cast" /* webpackChunkName: "cast" */)
);

export default function MovieDetailsPage() {
  const classes = StylesMovieDetailsPage();
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [movie, setMovie] = useState(null);
  let { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();
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
    <section className="movieDetails">
      {loadStatus === loadingStatus.PENDING && <Loader />}
      {loadStatus === loadingStatus.RESOLVED && (
        <Container maxWidth={"md"}>
          <Link
            to={prevLocation}
            className={`link ${classes.movieDetailsGoBackBtn}`}
          >
            <ArrowBackIosIcon />
            <span>Go back</span>
          </Link>
          <MovieDetails movie={movie} />
          <ul className={`list ${classes.movieDetailsNav}`}>
            <li className={classes.movieDetailsNavItem}>
              <NavLink
                to={`${url}/cast`}
                className={`link ${classes.movieDetailsNavLink}`}
                activeClassName={classes.movieDetailsNavLinkActive}
              >
                Cast
              </NavLink>
            </li>
            <li className={classes.movieDetailsNavItem}>
              <NavLink
                to={`${url}/reviews`}
                className={`link ${classes.movieDetailsNavLink}`}
                activeClassName={classes.movieDetailsNavLinkActive}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
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
    </section>
  );
}
