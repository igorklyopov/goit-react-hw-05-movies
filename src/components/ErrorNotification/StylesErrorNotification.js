import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeColors";

const StylesErrorNotification = makeStyles((theme) => ({
  errorMessage: {
    paddingTop: "30px",
    paddingBottom: "30px",
    fontSize: "34px",
    fontWeight: "700",
    color: themeColors.primaryDarkBg,
    textAlign: "center",
  },
  errorImg: {
    width: "300px",
    borderRadius: "5px",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "30px",
  },
}));

export default StylesErrorNotification;
