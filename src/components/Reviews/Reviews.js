import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMovieReviews } from "../../services/moviesApiService";
import { loadingStatus } from "../../utils/loadingStateStatusConstants";
import Loader from "../../components/Loader/Loader";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import ErrorNotification from "../../components/ErrorNotification/ErrorNotification";

export default function Reviews() {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    setLoadStatus(loadingStatus.PENDING);

    fetchMovieReviews(movieId)
      .then(({ results }) => {
        setReviews(results);

        if (results.length !== 0) {
          setLoadStatus(loadingStatus.RESOLVED);
        } else {
          setError("There are no reviews yet...");
          setLoadStatus(loadingStatus.REJECTED);
        }
      })
      .catch((error) => {
        setError(error.message);
        setLoadStatus(loadingStatus.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {loadStatus === loadingStatus.PENDING && <Loader />}
      {loadStatus === loadingStatus.RESOLVED && (
        <ReviewsList reviewsData={reviews} />
      )}
      {loadStatus === loadingStatus.REJECTED && (
        <ErrorNotification message={error} />
      )}
    </>
  );
}
