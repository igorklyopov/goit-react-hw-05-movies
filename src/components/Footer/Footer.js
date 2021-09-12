import { Copyright } from "../Copyright/Copyright";
import StylesFooter from "./StylesFooter";

export default function Footer() {
  const classes = StylesFooter();

  return (
    <>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </>
  );
}
