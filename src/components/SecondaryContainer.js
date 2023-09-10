import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className="bg-black text-white">
      <div className="-mt-72 pl-12 relative z-20">
        <MovieList
          title={"Now Playing"}
          path={"/nowplaying"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList
          title={"Top Rated"}
          path={"/toprated"}
          movies={movies?.topRatedMovies}
        />
        <MovieList
          title={"Upcoming Movies"}
          path={"/upcoming"}
          movies={movies?.upcomingMovies}
        />
        <MovieList
          title={"Tv Shows"}
          path={"/tvshows"}
          movies={movies?.tvShows}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
