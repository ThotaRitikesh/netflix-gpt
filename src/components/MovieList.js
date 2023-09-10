import React from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieList = ({ title, movies, path }) => {
  const Navigate = useNavigate();
  const hideViewMore = useSelector((store) => store.gpt.showGptSearch);

  return (
    movies && (
      <div className="px-6">
        <div className="flex">
          <h1 className="text-xl py-4">{title}</h1>
          {!hideViewMore && (
            <button
              className="m-2 my-1 text-yellow-600"
              onClick={() => Navigate(path)}
            >
              view more
            </button>
          )}
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
