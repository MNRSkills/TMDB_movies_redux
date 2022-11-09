import React from "react";

const SearchBar = (props) => {
  console.log(props);
  return (
    <form action="form" onSubmit={props.handleSubmit}>
      <input type="text" value="name" onChange={props.handleChange} />
      <button type="submit">ask</button>
    </form>
  );
};

export default SearchBar;
