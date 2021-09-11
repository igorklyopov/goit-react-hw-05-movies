import SearchIcon from "@material-ui/icons/Search";
import StylesButtonSearch from "./StylesButtonSearch";

export default function ButtonSearch() {
  const classes = StylesButtonSearch();

  return (
    <div className={classes.buttonSearchWrap}>
      <button
        type="submit"
        aria-label="search"
        className={`button ${classes.buttonSearch}`}
      >
        <SearchIcon className={classes.searchIcon} />
      </button>
    </div>
  );
}
