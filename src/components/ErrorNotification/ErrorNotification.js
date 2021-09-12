import PropTypes from "prop-types";
import StylesErrorNotification from "./StylesErrorNotification";

export default function ErrorNotification({ message, img }) {
  const classes = StylesErrorNotification();
  return (
    <div className={classes.errorNotificationContainer}>
      <p className={classes.errorMessage}>{message}</p>
      {img && <img src={img} alt={message} className={classes.errorImg} />}
    </div>
  );
}

ErrorNotification.propTypes = {
  message: PropTypes.string.isRequired,
  img: PropTypes.string,
};
