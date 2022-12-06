import React from "react";

const SearchResult = (props) => {
  // const [poster_path, title, overview,] = props.movieRes;
  return (
    <div className="bg-green-500 grid grid-cols-2 p-4 border-2">
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movieRes.poster_path}`}
          alt="Poster Path"
        />
      </div>
      <article className="text-left text-lg linear-7">
        <h1>{props.movieRes.title}</h1>
        <p>{props.movieRes.overview}</p>
      </article>
    </div>
  );
};

export default SearchResult;
