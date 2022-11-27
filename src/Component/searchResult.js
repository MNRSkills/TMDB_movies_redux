import React from "react";

const SearchResult = (props) => {
  console.log("THIS IS RESULTS COMP", props.movieRes);
  // const [poster_path, title, overview,] = props.movieRes;
  return (
    <div className="bg-green-500 ">
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movieRes.poster_path}`}
          alt="Poster Path"
        />
      </div>
      <article>
        <h1>{props.movieRes.title}</h1>
        <p>{props.movieRes.overview}</p>
      </article>
    </div>
  );
};

export default SearchResult;
