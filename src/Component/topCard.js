import React from "react";

const TopCard = ({ topMovie }) => {
  const { title, release_date, poster_path } = topMovie;
  return (
    <div>
      <div className="img w-full">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
      </div>
      {title}
    </div>
  );
};

export default TopCard;
