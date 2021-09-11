import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeColors";

const StylesHeader = makeStyles((theme) => ({
  header: {
    color: themeColors.primaryDarkText,
    backgroundColor: themeColors.primaryDarkBg,
    backgroundImage: themeColors.primaryDarkBgGradient,
  },
  navList: {
    display: "flex",
    marginBottom: 0,
  },
  navListItem: {
    "&:not(:last-child)": {
      marginRight: "15px",
    },
  },
  navLink: {
    padding: "10px",
    fontWeight: "700",

    "&:focus": {
      color: themeColors.accent,
    },
  },
  navLinkActive: {
    color: themeColors.accent,
  },
}));

export default StylesHeader;
