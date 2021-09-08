import { withStyles } from "@material-ui/core/styles";

export const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  "@global": {
    body: {
      margin: 0,
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
      lineHeight: "1.3",
      backgroundColor: "#e0f7fa",
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
