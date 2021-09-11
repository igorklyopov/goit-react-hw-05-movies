import CircularProgress from "@material-ui/core/CircularProgress";
import StylesLoader from "./StylesLoader";

export default function Loader() {
  const classes = StylesLoader();

  return (
    <div className={classes.loaderWrap}>
      <CircularProgress thickness={5} className={classes.loader} />
    </div>
  );
}
