import React from "react";
import { useGetSearchMovie } from "../../redux/searchReducer";

const SearchBar = (props) => {
  console.log(props);
  return (
    <form action="form" onSubmit={props.handleSubmit}>
      <input type="text" value={props.movies} onChange={props.handleChange} />
      <button type="submit">ask</button>
    </form>
  );
};

export default SearchBar;
