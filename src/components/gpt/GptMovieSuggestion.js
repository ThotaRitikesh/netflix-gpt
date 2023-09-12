import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-60">
      {movieNames?.map((movieName, i) => (
        <MovieList key={movieName} title={movieName} movies={movieResults[i]} path={'/gptsearch'} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
