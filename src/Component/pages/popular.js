import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopMovies } from "../../features/moviesReducer";
import Card from "../card";

const Popular = (props) => {
  const popularMovies = useSelector((state) => state.popularMovies.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopMovies());
  }, []);
  return (
    <div className="popular-page ">
      <div className="card-grid flex">
        {popularMovies.map((items, index) => {
          return <Card popular={items} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
