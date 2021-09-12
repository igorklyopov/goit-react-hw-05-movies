import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeColors";

const StylesFooter = makeStyles((theme) => ({
  footer: {
    color: themeColors.primaryDarkText,
    backgroundColor: themeColors.primaryDarkBg,
    backgroundImage: themeColors.primaryDarkBgGradient,
    padding: theme.spacing(2),
  },
}));

export default StylesFooter;
