import React from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

const MovieList = ({ title, movies, path }) => {
  const Navigate = useNavigate();

  return (
    movies && (
      <div className="px-6">
        <div className="flex">
          <h1 className="text-sm md:text-2xl font-semibold py-4">{title}</h1>
          {path==='/gptsearch' ? " " :(
            <button
              className="m-2 my-1 text-yellow-600  hover:text-red-700"
              onClick={() => Navigate(path)}
            >
              view more
            </button>
          )}
        </div>
        <div className="flex overflow-x-scroll container-snap overflow-y-hidden">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie?.id}  poster={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
