import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMovieReviews } from "../../../services/moviesApiService";
import { loadingStatus } from "../../../utils/loadingStateStatusConstants";
// let movieId = 385128;
let pageNumber = 1;
export default function MovieReviewsView() {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const { movieId } = useParams();
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
      {loadStatus === loadingStatus.PENDING && <h2>Loading...</h2>}
      {loadStatus === loadingStatus.RESOLVED && (
        <div>
          <ul>
            {reviews &&
              reviews.map((review) => (
                <li key={review.id}>
                  <p>{review.author}</p>
                  <p>{review.content}</p>
                </li>
              ))}
          </ul>
        </div>
      )}
      {loadStatus === loadingStatus.REJECTED && <h2>Oops...</h2>}
    </>
  );
}
// There are no reviews yet...
