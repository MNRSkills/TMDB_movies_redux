import React from "react";

const Card = ({item}) => {
  // console.log("Looking for two props", item);
  // const { title, overview, original_language, genre_ids, poster_path } =
  //   props.popular;

  return (
    <div className="border-2 border-white mx-5">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt=""
        className="object-contain w-full transition transform ease-in-out hover:scale-110"
      />
      <h1 className="p-10 ">{item?.title}</h1>
    </div>
  );
};

export default Card;
