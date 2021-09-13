import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeVariables";

const StylesCastLis = makeStyles((theme) => ({
  castCardList: {
    marginBottom: "20px",
  },
  castCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  castCardImg: {
    maxHeight: "100%",
    minHeight: "250px",
  },
  castCardContent: {
    flexGrow: 1,
  },
  castSubTitle: {
    fontWeight: "700",
    color: themeColors.primaryDarkBg,
  },
}));

export default StylesCastLis;
