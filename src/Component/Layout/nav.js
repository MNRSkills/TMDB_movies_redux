import React, { useEffect, useState, useRef } from "react";
import { SearchMovieTitle, clearSearch } from "../../features/moviesReducer";
import { useDispatch, useSelector } from "react-redux";
import BackBtn from "../backBtn";

import SearchBar from "./searchBar";

const Nav = () => {
  const [searchMovie, setSearchBar] = useState("");
  const dispatch = useDispatch();
  const inputEl = useRef("");
  console.log("THIS IS REF", inputEl.current.value);

  dispatch(SearchMovieTitle(searchMovie));

  return (
    <div className="nav h-20 container flex justify-between">
      <h1 className="font-bold text-lg p-4">TMDB</h1>
      <span>
        <img src="" alt="" />
      </span>
      <div className="p-4">
        <SearchBar
          handleChange={(e) => setSearchBar(e.target.value)}
          movies={searchMovie}
          inputRef={inputEl}
        />
      </div>
    </div>
  );
};

export default Nav;
