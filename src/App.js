import React, { useState, useEffect, useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopMovies } from "./features/moviesReducer";
import "./App.css";
import Popular from "./Component/pages/popular";
import SearchRes from "./Component/pages/searchRes";
import TopRated from "./Component/pages/topRated";

function App() {
  const movieSearch = useSelector((state) => state.popularMovies.searchMovie);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPopMovies());
  // }, []);
  if (movieSearch == "") {
    return (
      <div className="App bg-green-500 h-full">
        <div className="popular-row">
          <Popular />
        </div>
        <div className="top-rated-row ">
          <TopRated />
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <SearchRes />
      </div>
    );
  }
}

export default App;
