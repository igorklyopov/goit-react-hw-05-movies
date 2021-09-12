import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeColors";

const StylesErrorNotification = makeStyles((theme) => ({
  errorNotificationContainer: {
    paddingTop: "5px",
    paddingBottom: "5px",
    marginBottom: "30%",
  },
  errorMessage: {
    fontSize: "34px",
    fontWeight: "700",
    color: themeColors.primaryDarkBg,
    textAlign: "center",
  },
  errorImg: {
    borderRadius: "5px",
    marginRight: "auto",
    marginLeft: "auto",
  },
}));

export default StylesErrorNotification;
