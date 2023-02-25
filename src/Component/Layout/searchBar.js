import React from "react";
//PROPS IS COMING FROM NAV.JS, HANDLING ANY INPUT
const SearchBar = (props) => {
  return (
    <input
      type="text"
      value={props.movies}
      ref={props.inputRef}
      onChange={props.handleChange}
      placeholder="Search for a movie."
      className="p-2 rounded-xl focus:underline focus:shadow-xl border-2 border-blue-600"
    />
  );
};

export default SearchBar;
