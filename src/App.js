import React, { useState, useEffect, useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopMovies } from "./redux/moviesReducer";
import "./App.css";
import Popular from "./Component/pages/popular";
import SearchRes from "./Component/pages/searchRes";

function App() {
  const movieSearch = useSelector((state) => state.popularMovies.searchMovie);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPopMovies());
  // }, []);
  if (movieSearch == null) {
    return (
      <div className="App bg-green-500 h-full">
        <Popular />
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
