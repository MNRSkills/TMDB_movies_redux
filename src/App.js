import React, { useState, useEffect, useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopMovies } from "./features/moviesReducer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import Row from "./Component/pages/row";
import SearchRes from "./Component/pages/searchRes";

function App() {
  const movieSearch = useSelector((state) => state.popularMovies.searchMovie);
 
  if (movieSearch == "") {
    return (
      <div className="App bg-green-500 h-full">
        <Row />
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
