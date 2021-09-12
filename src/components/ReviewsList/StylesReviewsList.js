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
}));

export default StylesReviewsList;
