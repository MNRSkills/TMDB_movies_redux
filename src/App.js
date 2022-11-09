import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Nav from "./Component/nav";
import Card from "./Component/card";
import SearchBar from "./Component/searchBar";

function App() {
  const [popularMovies, setPopMovies] = useState({});
  const [searchBar, setSearchBar] = useState("");
  const popMovies = () => {
    axios
      .get("http://localhost:4000/popular")
      .then((response) => {
        setPopMovies(response.data.results);
      })
      .catch((error) => console.log("THERE WAS ERROR", error));
  };
  const handleSubmit = (e) => {
    console.log("THIS IS HITTNG THE SPOT");
    // e.preventDefault();
  };
  const handleChange = (e) => {
    // e.preventDefault();
  };

  useEffect(() => {
    popMovies();
  }, []);
  return (
    <div className="App bg-red-500 container grid lg:grid-cols-4 md:grid-rows-4 gap-4 grid-cols-1">
      <Nav />
      <SearchBar
        onChange={() => handleChange()}
        onSubmit={() => handleSubmit()}
      />
      {/* <Card handleChange={handleChange} /> */}

      {/* {popularMovies.map((popular, index) => {
        return (
          <Card popular={popular} key={index} />
        );
      })} */}
      <p>
        <strong>Hello world</strong>
      </p>
    </div>
  );
}

export default App;
