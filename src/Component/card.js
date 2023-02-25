import React from "react";

const Card = ({ item }) => {
  // console.log("LOOKING FOR ID", item.id)
  const handleClick = (e) => {
    console.log("HANDLECLICK", e);
  };

  return (
    <div
      className="md:border-2 border-white md:mx-2 relative cursor-pointer shadow-2xl z-10 hover:scale-y-110 h-64"
      onClick={() => handleClick(item.id)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt=""
        className="object-contain md:object-contain w-full h-full transition transform ease-in-out hover:scale-110 "
      />
      <h1 className=" absolute text-white z-0 hover:bottom-0">{item?.title}</h1>
    </div>
  );
};

export default Card;
