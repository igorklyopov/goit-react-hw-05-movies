import { useState } from "react";
import PropTypes from "prop-types";
// import { StyledSearchForm, StyledSearchFormInput } from "./StyledSearchForm";
// import IconButton from "../IconButton/IconButton";
// import { ReactComponent as IconSearch } from "../../images/search.svg";

function SearchMoviesForm({ getFormData }) {
  const [searchQuery, setSearchQuery] = useState("");

  const onInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    getFormData(searchQuery.trim());
    setSearchQuery("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter the title of the movie"
        value={searchQuery}
        onChange={onInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

SearchMoviesForm.propTypes = {
  getFormData: PropTypes.func.isRequired,
};

export default SearchMoviesForm;
