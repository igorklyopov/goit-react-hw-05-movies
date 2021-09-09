import { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import { fetchMovieCast } from "../../services/moviesApiService";
import { loadingStatus } from "../../utils/loadingStateStatusConstants";
import Loader from "../../components/Loader/Loader";
import { CastForEducationRounded } from "@material-ui/icons";
import CastList from "../CastList/CastList";
// let movieId = 385128;
export default function Cast() {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

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
      {loadStatus === loadingStatus.RESOLVED && <CastList castData={cast} />}
      {loadStatus === loadingStatus.REJECTED && <h2>Oops...</h2>}
    </>
  );
}
