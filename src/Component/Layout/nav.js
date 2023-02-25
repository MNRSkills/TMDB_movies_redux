import React, { useEffect, useState, useRef } from "react";
import {
  SearchMovieTitle,
  clearSearch,
  LoginForm,
} from "../../features/moviesReducer";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./login";

import SearchBar from "./searchBar";

const Nav = () => {
  const [searchMovie, setSearchBar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lcreds, setLCreds] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const inputEl = useRef("");

  dispatch(SearchMovieTitle(searchMovie));

  const toggleModal = () => {
    if (open == true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const onChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setLCreds((prevalue) => {
      return {
        ...prevalue, // Spread Operator
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    dispatch(LoginForm(lcreds));

    e.preventDefault(e);
  };

  return (
    <nav className="nav h-20 container flex justify-between">
      <h1 className="font-bold text-lg p-4">TMDB</h1>
      <span>
        <img src="" alt="" />
      </span>
      {/* <div className="m-0 p-0 w-full h-full bg-red-200 absolute z-10"> */}
        {open && (
          <LoginModal
            lcreds={lcreds}
            open={open}
            toggleModal={toggleModal}
            onSubmit={onSubmit}
            onChange={onChange}
          />
        )}
        {open ? (
          true
        ) : (
          <button
            className="p-4 m-5 bg-gray-500 font-bold text-lg"
            onClick={toggleModal}
          >
            Login
          </button>
        )}
      {/* </div> */}

      <div className="p-4">
        <SearchBar
          handleChange={(e) => setSearchBar(e.target.value)}
          movies={searchMovie}
          // inputRef={inputEl} so we can use to remove the search words
        />
      </div>
    </nav>
  );
};

export default Nav;
