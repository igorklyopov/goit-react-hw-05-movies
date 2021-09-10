import PropTypes from "prop-types";

export default function ErrorNotification({ message, img }) {
  return (
    <>
      <p>{message}</p>
      {img && <img src={img} alt={message} width="250" />}
    </>
  );
}

ErrorNotification.propTypes = {
  message: PropTypes.string.isRequired,
  img: PropTypes.string,
};
