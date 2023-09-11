import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { addMainMovieDetailes } from "../utiles/store/movieSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  // const randomIndex = Math.floor(Math.random() * 19) + 1;
  // const mainMovie = movies[randomIndex - 1];

  const mainMovie = movies[2];

  const { original_title, overview, id } = mainMovie;
  // dispatch(addMainMovieDetailes(mainMovie));
  // console.log(mainMovie);

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      {/* <VideoTitle/>
      <VideoBackground/> */}
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
