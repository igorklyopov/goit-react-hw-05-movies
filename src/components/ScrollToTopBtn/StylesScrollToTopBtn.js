import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeVariables";

const StylesScrollToTopBtn = makeStyles({
  scrollToTopBtn: {
    position: "fixed",
    bottom: "3.5rem",
    right: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: themeColors.darkTintPrimaryLightBg,
    color: themeColors.primaryDarkBg,

    "&:hover": {
      backgroundColor: themeColors.primaryDarkBg,
      color: themeColors.primaryLightBg,
    },
  },
});

export default StylesScrollToTopBtn;
