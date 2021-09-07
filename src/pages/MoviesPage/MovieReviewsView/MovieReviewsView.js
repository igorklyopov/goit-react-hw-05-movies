import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMovieReviews } from "../../../services/moviesApiService";
import { loadingStatus } from "../../../utils/loadingStateStatusConstants";
import Loader from "../../../components/Loader/Loader";
import Reviews from "../../../components/Reviews/Reviews";
// let movieId = 385128;
let pageNumber = 1;
export default function MovieReviewsView({ movieId }) {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [reviews, setReviews] = useState(null);
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
        <Reviews reviewsData={reviews} />
      )}
      {loadStatus === loadingStatus.REJECTED && <h2>Oops...</h2>}
    </>
  );
}
// There are no reviews yet...
