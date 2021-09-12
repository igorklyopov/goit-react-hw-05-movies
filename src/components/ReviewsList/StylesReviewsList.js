import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeColors";

const StylesReviewsList = makeStyles((theme) => ({
  reviewsListItem: {
    "&:not(:last-child)": {
      marginBottom: "30px",
    },
  },
  reviewsListAuthor: {
    display: "block",
    marginBottom: "10px",
    fontWeight: "700",
    color: themeColors.primaryDarkBg,
  },
  reviewsListText: {
    margin: 0,
    paddingLeft: "30px",
    wordBreak: "break-word",
  },
  showMoreTextBtn: {
    display: "inline-block",
    width: "150px",
    padding: "3px",
    textAlign: "center",
    color: themeColors.primaryDarkBg,
    borderRadius: "5px",
    textDecoration: "underline",
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor: themeColors.darkTintPrimaryLightBg,
      textDecoration: "none",
    },
    "&:focus": {
      backgroundColor: themeColors.darkTintPrimaryLightBg,
      textDecoration: "none",
    },
  },
}));

export default StylesReviewsList;
