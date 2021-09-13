import ClearIcon from "@material-ui/icons/Clear";
import StylesButtonClear from "./StylesButtonClear";

export default function ButtonClear({ onClick }) {
  const classes = StylesButtonClear();
  const onClearBtnClick = () => {
    onClick();
  };

  return (
    <div className={classes.buttonClearWrap}>
      <button
        type="button"
        aria-label="clear"
        className={`button ${classes.buttonClear}`}
        onClick={onClearBtnClick}
      >
        <ClearIcon className={classes.clearIcon} />
      </button>
    </div>
  );
}
