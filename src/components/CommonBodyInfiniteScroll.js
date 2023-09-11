import React from "react";
import Shimmer from "./Shimmer";
import MovieCard from "./MovieCard";

const CommonBodyInfiniteScroll = ({ card, title }) => {
  return (
    <div className="bg-black flex flex-col w-full">
      <h1 className=" m-3 p-2 text-3xl font-bold text-red-700">{title}</h1>
      {card?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap gap-8 items-center justify-center my-3">
          {card?.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommonBodyInfiniteScroll;
