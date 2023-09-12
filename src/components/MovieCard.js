import React from "react";
import { IMG_CND_LINK } from "../utiles/constants";

const MovieCard = ({ poster,id }) => {
  if (!poster) return null;
  return (
    <div className="w-36 md:w-40 pr-4 cursor-pointer hover:scale-110" >
      <img className="rounded-lg" src={IMG_CND_LINK + poster} alt="poster" />
    </div>
  );
};

export default MovieCard;
