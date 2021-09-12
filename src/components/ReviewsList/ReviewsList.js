import PropTypes from "prop-types";
import ShowMoreText from "react-show-more-text";
import StylesReviewsList from "./StylesReviewsList";

export default function ReviewsList({ reviewsData }) {
  const classes = StylesReviewsList();

  return (
    <ul className="list">
      {reviewsData.map(({ id, author, content }) => (
        <li key={id} className={classes.reviewsListItem}>
          <span className={classes.reviewsListAuthor}>{author}</span>
          <ShowMoreText
            lines={5}
            more="Show more>"
            less="<Show less"
            anchorClass={`link ${classes.showMoreTextBtn}`}
            expanded={false}
            truncatedEndingComponent={"... "}
          >
            <p className={classes.reviewsListText}>{content}</p>
          </ShowMoreText>
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
