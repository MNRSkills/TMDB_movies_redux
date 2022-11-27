import React from "react";

const Card = ({ popular }) => {
  // console.log(popular);
  const { title, overview, original_language, genre_ids, poster_path } =
    popular;
  return (
    <div className="border-purple-200 grid grid-cols-2 gap-2 p-2 shadow-lg bg-cyan-200">
      <div className="img w-full">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
      </div>
      <article className="w-full">
        <h1 className="font-bold font-sans mt-0 text-lg ">{title}</h1>
        <p className="text-black text-left overflow-hidden leading-loose">{overview}</p>
      </article>
    </div>
  );
};

export default Card;
