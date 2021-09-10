import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMovieReviews } from "../../services/moviesApiService";
import { loadingStatus } from "../../utils/loadingStateStatusConstants";
import Loader from "../../components/Loader/Loader";
import ReviewsList from "../../components/ReviewsList/ReviewsList";

let pageNumber = 1; //for test
export default function Reviews() {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setLoadStatus(loadingStatus.PENDING);

    fetchMovieReviews(movieId, pageNumber).then((response) => {
      setReviews(response.results);
      setLoadStatus(loadingStatus.RESOLVED);
    });
  }, [movieId]);

  return (
    <>
      {loadStatus === loadingStatus.PENDING && <Loader />}
      {loadStatus === loadingStatus.RESOLVED && (
        <ReviewsList reviewsData={reviews} />
      )}
      {loadStatus === loadingStatus.REJECTED && <h2>Oops...</h2>}
    </>
  );
}
// There are no reviews yet...
