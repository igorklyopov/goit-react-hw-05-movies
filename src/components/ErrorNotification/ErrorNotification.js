import PropTypes from "prop-types";
import StylesErrorNotification from "./StylesErrorNotification";

export default function ErrorNotification({ message, img }) {
  const classes = StylesErrorNotification();
  return (
    <>
      <p className={classes.errorMessage}>{message}</p>
      {img && <img src={img} alt={message} className={classes.errorImg} />}
    </>
  );
}

ErrorNotification.propTypes = {
  message: PropTypes.string.isRequired,
  img: PropTypes.string,
};
