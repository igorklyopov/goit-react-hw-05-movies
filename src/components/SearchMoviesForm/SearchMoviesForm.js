import { useState } from "react";
import PropTypes from "prop-types";
import StylesSearchMoviesForm from "./StylesSearchMoviesForm";
import ButtonSearch from "../../components/ButtonSearch/ButtonSearch";

function SearchMoviesForm({ getFormData }) {
  const classes = StylesSearchMoviesForm();
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    getFormData(inputValue.trim().toLowerCase());

    setInputValue("");
  };

  return (
    <form className={classes.searchMoviesForm} onSubmit={onFormSubmit}>
      <div className={classes.searchMoviesFormInputWrap}>
        <label className={classes.searchMoviesFormLabel}>
          <span className="visuallyHidden">Search movie by title</span>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter the title of the movie"
            value={inputValue}
            className={classes.searchMoviesFormInput}
            onChange={onInputChange}
          />
        </label>
        <ButtonSearch />
      </div>
    </form>
  );
}

SearchMoviesForm.propTypes = {
  getFormData: PropTypes.func.isRequired,
};

export default SearchMoviesForm;
