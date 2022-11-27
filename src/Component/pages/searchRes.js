import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchMovieTitle } from "../../redux/moviesReducer";
import SearchResult from "../searchResult";

const SearchRes = (props) => {
  const searchMovies = useSelector((state) => state.popularMovies.searchMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SearchMovieTitle());
  }, []);

  return (
    <div>
      {searchMovies.map((item, index) => {
        return <SearchResult movieRes={item} key={index} />;
      })}
    </div>
  );
};

export default SearchRes;
