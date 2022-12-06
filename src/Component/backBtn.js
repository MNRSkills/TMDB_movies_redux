import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch } from "../features/moviesReducer";

const BackBtn = (props) => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(clearSearch())}>Back</button>;
};

export default BackBtn;
