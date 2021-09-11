import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeColors";
const StylesHomePage = makeStyles((theme) => ({
  homePageTitle: {
    textAlign: "center",
    color: themeColors.primaryDarkBg,
    fontSize: "34px",
  },
}));
export default StylesHomePage;
