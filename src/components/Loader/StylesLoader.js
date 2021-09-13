import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeVariables";

const StylesLoader = makeStyles((theme) => ({
  loaderWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  loader: {
    color: themeColors.primaryDarkBg,
  },
}));
export default StylesLoader;
