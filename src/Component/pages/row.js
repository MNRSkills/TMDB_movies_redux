import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopMovies,
  fetchTopRated,
  fetchNowPlaying,
} from "../../features/moviesReducer";
import Card from "../card";

const Row = () => {
  const popularMovies = useSelector((state) => state.popularMovies.popular);
  const dispatchPop = useDispatch();

  const topRatedMovies = useSelector((state) => state.popularMovies.topRated);
  const dispatchTop = useDispatch();

  const nowPlaying = useSelector((state) => state.popularMovies.nowPlaying);
  console.log("STATE */", nowPlaying);
  const dispatchNow = useDispatch();

  useEffect(() => {
    dispatchPop(fetchPopMovies());
    dispatchTop(fetchTopRated());
    dispatchNow(fetchNowPlaying());
  }, []);
  return (
    <>
      <div className="popular-row flex ">
        {popularMovies.map((items, index) => {
          return <Card item={items} key={index} />;
        })}
      </div>
      <div className="top-rated-row flex ">
        {topRatedMovies.map((topMovie, index) => {
          return <Card item={topMovie} key={index} />;
        })}
      </div>
      <div className="top-rated-row flex ">
        {/* {nowPlaying.map((nowPlaying, index) => {
          return <Card item={nowPlaying} key={index}/>;
        })} */}
      </div>
    </>
  );
};

export default Row;
