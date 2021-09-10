import PropTypes from "prop-types";

export default function ReviewsList({ reviewsData }) {
  return (
    <ul>
      {reviewsData.map(({ id, author, content }) => (
        <li key={id}>
          <p>{author}</p>
          <p>{content}</p>
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
