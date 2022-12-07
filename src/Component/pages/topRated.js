import React, { useEffect } from "react";
import TopCard from "../topCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRated } from "../../features/moviesReducer";

const TopRated = () => {
  const topRatedMovies = useSelector((state) => state.popularMovies.topRated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopRated());
  }, []);
  return (
    <div className="top-rated flex">
      {topRatedMovies.map((topMovie, index) => {
        return <TopCard topMovie={topMovie} key={index} />;
      })}
    </div>
  );
};

export default TopRated;
