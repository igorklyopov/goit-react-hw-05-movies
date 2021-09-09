import { useState } from "react";
import PropTypes from "prop-types";

function SearchMoviesForm({ getFormData }) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    getFormData(inputValue.trim());

    setInputValue("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        <span className="visuallyHidden">Search movie by title</span>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter the title of the movie"
          value={inputValue}
          onChange={onInputChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

SearchMoviesForm.propTypes = {
  getFormData: PropTypes.func.isRequired,
};

export default SearchMoviesForm;
