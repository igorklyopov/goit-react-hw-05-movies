import { makeStyles } from "@material-ui/core/styles";
import { themeColors, themeAnimation } from "../../commonStyles/themeVariables";

const StylesMoviesGallery = makeStyles((theme) => ({
  moviesGalleryContainer: {
    marginBottom: "20px",
  },
  moviesGalleryLink: {
    display: "block",
    background: "transparent",
    transitionProperty: "transform",
    transitionDuration: "500ms",
    transitionTimingFunction: themeAnimation.timingFn,
    transitionDelay: 0,

    "&:hover": {
      background: themeColors.basicLightBg,
      boxShadow: `5px 5px 10px #737373`,
      transform: "scale(1.03)",
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
  cardContent: {
    flexGrow: 1,
  },
  movieCardTitle: {
    color: themeColors.primaryDarkText,
    fontWeight: "700",

    "@media screen and (min-width: 900px)": {
      fontSize: "18px",
    },
  },
}));
export default StylesMoviesGallery;
