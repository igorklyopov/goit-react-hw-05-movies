import { withStyles } from "@material-ui/core/styles";
import { themeColors } from "./themeColors";

export const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  "@global": {
    "*": {
      boxSizing: "border-box",
    },
    "*::before": {
      boxSizing: "border-box",
    },
    "*::after": {
      boxSizing: "border-box",
    },
    html: {
      height: "100%",
    },
    body: {
      height: "100%",
      margin: 0,
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
      lineHeight: "1.3",
      backgroundColor: themeColors.primaryLightBg,
      color: themeColors.primaryDarkText,
    },
    img: {
      display: "block",
      maxWidth: "100%",
    },
    footer: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: "auto",
    },
    "#root": {
      height: "100%",
    },
    ".page-wrap": {
      display: "flex",
      flexDirection: "column",
      minHeight: "100%",
    },
    ".content": {
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: "auto",
    },
    ".list": {
      listStyle: "none",
      marginTop: 0,
      paddingLeft: 0,
    },
    ".link": {
      cursor: "pointer",
      textDecoration: "none",
      fontStyle: "normal",
      color: "inherit",
      outline: "none",
    },
    ".button": {
      cursor: "pointer",
      outline: "none",
      border: "none",
      fontFamily: "inherit",
      lineHeight: "inherit",
    },
    ".visuallyHidden": {
      position: "absolute",
      width: "1px",
      height: "1px",
      margin: "-1px",
      padding: 0,
      overflow: "hidden",
      border: 0,
      clip: "rect(0 0 0 0)",
    },
  },
})(() => null);
