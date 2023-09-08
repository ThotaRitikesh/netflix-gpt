import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utiles/constants";
import { addTvShows } from "../utiles/movieSlice";
import { useEffect } from "react";

const useTvShows = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector((store) => store.movies?.tvShows);

  const getTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTvShows(json?.results));
  };

  useEffect(() => {
    !tvShows && getTvShows();
  }, []);
};

export default useTvShows;
