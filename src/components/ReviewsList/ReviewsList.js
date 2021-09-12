import PropTypes from "prop-types";
import StylesReviewsList from "./StylesReviewsList";

export default function ReviewsList({ reviewsData }) {
  const classes = StylesReviewsList();

  return (
    <ul className="list">
      {reviewsData.map(({ id, author, content }) => (
        <li key={id} className={classes.reviewsListItem}>
          <span className={classes.reviewsListAuthor}>{author}</span>
          <p className={classes.reviewsListText}>{content}</p>
        </li>
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  castData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
