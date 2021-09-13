import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeVariables";

const StylesButtonSearch = makeStyles((theme) => ({
  buttonSearchWrap: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  buttonSearch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    marginLeft: "50px",
    color: themeColors.primaryDarkBg,
    borderRadius: "50%",
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor: themeColors.darkTintPrimaryLightBg,
    },
    "&:focus": {
      backgroundColor: themeColors.darkTintPrimaryLightBg,
    },
  },
  searchIcon: {
    color: "currentColor",
    fontSize: "30px",
  },
}));

export default StylesButtonSearch;
