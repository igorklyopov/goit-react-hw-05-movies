import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeColors";

const StylesMoviesGallery = makeStyles((theme) => ({
  moviesGalleryContainer: {
    marginBottom: "20px",
  },
  moviesGalleryLink: {
    background: "transparent",

    "&:hover": {
      background: themeColors.basicLightBg,
      boxShadow: `5px 5px 10px #737373`,
    },
    "&:focus": {
      background: themeColors.basicLightBg,
      boxShadow: `5px 5px 10px #737373`,
    },
  },
  movieCardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  movieCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    background: "inherit",
    boxShadow: "inherit",
  },
  movieImg: {
    height: "450px",
  },
  cardContent: {
    flexGrow: 1,
  },
  movieCardTitle: {
    color: themeColors.primaryDarkText,
    fontWeight: "700",
  },
}));
export default StylesMoviesGallery;
