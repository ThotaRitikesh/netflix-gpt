import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    movies && (
      <div className="px-6">
        <h1 className="text-xl py-4">{title}</h1>
        <div className="flex overflow-x-scroll container-snap">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie?.id} poster={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
