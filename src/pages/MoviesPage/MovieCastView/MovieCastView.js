import { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import { fetchMovieCast } from "../../../services/moviesApiService";
import { loadingStatus } from "../../../utils/loadingStateStatusConstants";
import Loader from "../../../components/Loader/Loader";
import Cast from "../../../components/Cast/Cast";

export default function MovieCastView({ movieId }) {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    setLoadStatus(loadingStatus.PENDING);

    fetchMovieCast(movieId).then((response) => {
      setCast(response.cast);

      setLoadStatus(loadingStatus.RESOLVED);
    });
  }, [movieId]);

  return (
    <>
      {loadStatus === loadingStatus.PENDING && <Loader />}
      {loadStatus === loadingStatus.RESOLVED && <Cast castData={cast} />}
      {loadStatus === loadingStatus.REJECTED && <h2>Oops...</h2>}
    </>
  );
}
