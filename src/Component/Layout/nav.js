import React, { useEffect, useState } from "react";
import { SearchMovieTitle } from "../../redux/moviesReducer";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "./searchBar";

const Nav = () => {
  const [searchMovie, setSearchBar] = useState("");
  const dispatch = useDispatch();
  // const {data } = useGetSearchMovie('Jaws')

  const handleSubmit = (e) => {
    // console.log("this works on submit", e);
    dispatch(SearchMovieTitle(searchMovie))
    e.preventDefault();
  };

  useEffect(() => {
    // renderPage();
  }, []);
  return (
    <div className="nav h-20">
      <h1 className="font-bold text-lg">TMDB</h1>
      <span>
        <img src="" alt="" />
      </span>
      <SearchBar
        handleChange={(e) => setSearchBar(e.target.value)}
        handleSubmit={(e) => handleSubmit(e)}
        movies={searchMovie}
      />
    </div>
  );
};

export default Nav;
