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
    textTransform: "uppercase",
    borderRadius: "8px",
    backgroundColor: themeColors.darkTintPrimaryLightBg,
    color: themeColors.primaryDarkBg,

    "&:hover": {
      color: "inherit",
    },
  },
  movieDetailsNav: {
    display: "flex",
    justifyContent: "center",
  },
  movieDetailsNavItem: {
    "&:not(:last-child)": {
      marginRight: "15px",
    },
  },
}));
export default StylesMovieDetailsPage;
