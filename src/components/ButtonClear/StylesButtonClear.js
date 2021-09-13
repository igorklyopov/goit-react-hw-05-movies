import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeVariables";

const StylesButtonClear = makeStyles((theme) => ({
  buttonClearWrap: {
    position: "absolute",
    top: 0,
    right: "60px",
  },
  buttonClear: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    marginLeft: "50px",
    color: themeColors.darkTintPrimaryLightBg,
    borderRadius: "50%",
    backgroundColor: "transparent",

    "&:hover": {
      color: themeColors.primaryDarkBg,
    },
    "&:focus": {
      color: themeColors.primaryDarkBg,
    },
  },
  searchIcon: {
    color: "currentColor",
    fontSize: "30px",
  },
}));

export default StylesButtonClear;
