import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const dispatch=useDispatch();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const randomIndex = Math.floor(Math.random() * 19) + 1;
  const mainMovie = movies[randomIndex - 1];

  // const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;
  // dispatch
  console.log(mainMovie);

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
