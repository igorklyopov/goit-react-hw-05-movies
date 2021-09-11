import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalCss } from "./commonStyles/GlobalCss";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movies-details-page" */
  )
);

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "red",
    },
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
      <GlobalCss />
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/movies" exact>
              <MoviesPage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
