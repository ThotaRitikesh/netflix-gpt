import React, { useState } from "react";
import useInfiniteScroll from "../../hooks/useInfiniteNowPlaying";
import MovieCard from "../MovieCard";

const TvShows = () => {
  const [card, setCard] = useState([]);
  const url = "trending/tv/day?";
  useInfiniteScroll({ setCard, url });
  return (
    <div className="bg-black flex flex-col w-full">
      <h1 className=" m-3 p-2 text-3xl  font-bold text-red-700">Tv Shows</h1>
      <div className="flex flex-wrap gap-8 items-center justify-center my-3">
        {card?.map((movie) => (
          <MovieCard key={movie.id} poster={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default TvShows;
