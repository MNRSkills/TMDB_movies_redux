import React from "react";

const Card = ({ popular }) => {
  console.log(popular);
  const POSTER_PATH = "https://image.tmdb.org/t/p/w500/";
  const { title, overview, original_language, genre_ids, poster_path } =
    popular;
  return (
    <div className="border-black container w-1/3">
      <div className="img">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
      </div>
      <article>
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-2xl">{overview}</p>
      </article>
    </div>
  );
};

export default Card;
