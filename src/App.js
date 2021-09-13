import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalCss } from "./commonStyles/GlobalCss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import ScrollToTop from "./components/ScrollToTopBtn/ScrollToTopBtn";

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

export default function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <div className="page-wrap">
        <main className="content">
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
        <ScrollToTop />
      </div>
    </>
  );
}
