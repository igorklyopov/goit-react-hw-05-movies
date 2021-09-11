import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeColors";

const StylesSearchMoviesForm = makeStyles((theme) => ({
  searchMoviesForm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "30px",
    paddingBottom: "30px",
    width: "100%",
    maxWidth: "600px",
    backgroundColor: themeColors.primaryLightBg,
    borderRadius: "3px",
    overflow: "hidden",
  },
  searchMoviesFormLabel: {
    display: "block",
    width: "100%",
  },
  searchMoviesFormInputWrap: {
    position: "relative",
    width: "100%",
  },
  searchMoviesFormInput: {
    display: "inline-block",
    width: "100%",
    height: "50px",
    font: "inherit",
    fontSize: "20px",
    border: "none",
    borderRadius: "30px",
    outline: "none",
    paddingLeft: "20px",
    paddingRight: "20px",
    color: themeColors.primaryDarkText,

    "&::placeholder": {
      fontFamily: "inherit",
      fontSize: "18px",
      color: themeColors.primaryDarkBg,
    },
  },
}));

export default StylesSearchMoviesForm;
