import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© "}
      <Link
        color="inherit"
        href="https://github.com/igorklyopov"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        by Igor Klyopov
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export { Copyright };
