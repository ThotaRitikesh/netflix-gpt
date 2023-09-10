import React from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

const MovieList = ({ title, movies, path }) => {
  // console.log(movies);
  const Navigate = useNavigate();

  return (
    movies && (
      <div className="px-6">
        <div className="flex">
          <h1 className="text-xl py-4">{title}</h1>
          <button
            className="m-2 my-1 text-yellow-600"
            onClick={() => Navigate(path)}
          >
            view more
          </button>
        </div>
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
