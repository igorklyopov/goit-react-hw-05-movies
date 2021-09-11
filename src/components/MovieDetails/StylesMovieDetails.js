import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeColors";

const StylesMovieDetails = makeStyles((theme) => ({
  movieDetailsCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    background: "inherit",
    boxShadow: "inherit",
    textAlign: "center",

    "@media screen and (min-width: 768px)": {
      flexDirection: "row",
      textAlign: "left",
    },
  },
  movieDetailsImg: {
    width: "300px",
    borderRadius: "5px",
  },
  movieDetailsContent: {
    paddingLeft: "30px",

    "@media screen and (min-width: 768px)": {
      paddingLeft: "30px",
    },
  },
}));
export default StylesMovieDetails;
