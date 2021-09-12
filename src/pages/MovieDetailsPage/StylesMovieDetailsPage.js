import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeColors";

const StylesMovieDetailsPage = makeStyles((theme) => ({
  movieDetailsGoBackBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "150px",
    marginTop: "10px",
    marginBottom: "10px",
    padding: "5px",
    fontWeight: "700",
    color: themeColors.primaryDarkBg,
    backgroundColor: "transparent",
    textTransform: "uppercase",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: themeColors.darkTintPrimaryLightBg,
    borderRadius: "5px",
  },
  movieDetailsNav: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  movieDetailsNavItem: {
    display: "block",

    "&:not(:last-child)": {
      marginRight: "15px",
    },
  },
  movieDetailsNavLink: {
    display: "block",
    padding: "10px",
    textTransform: "uppercase",
    fontWeight: "700",
    color: themeColors.primaryDarkBg,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: themeColors.darkTintPrimaryLightBg,
    borderRadius: "5px",
  },
  movieDetailsNavLinkActive: {
    backgroundColor: themeColors.darkTintPrimaryLightBg,
  },
  "&:focus": {
    backgroundColor: "red",
  },
}));
export default StylesMovieDetailsPage;
