import React from "react";

const SearchBar = (props) => {
  return (
    <input
      type="text"
      value={props.movies}
      ref={props.inputRef}
      onChange={props.handleChange}
    />
  );
};

export default SearchBar;
