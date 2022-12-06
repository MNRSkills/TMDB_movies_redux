import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchMovieTitle } from "../../features/moviesReducer";
import SearchResult from "../searchResult";
import BackBtn from "../backBtn";

const SearchRes = (props) => {
  const searchMovies = useSelector((state) => state.popularMovies.searchMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SearchMovieTitle());
  }, []);

  return (
    <div>
      <div className="popularBtn p-2">
        <BackBtn />
      </div>
      {searchMovies.map((item, index) => {
        return <SearchResult movieRes={item} key={index} />;
      })}
    </div>
  );
};

export default SearchRes;
