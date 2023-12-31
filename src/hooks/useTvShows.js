import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utiles/constants";
import { addTvShows } from "../utiles/store/movieSlice";
import { useEffect } from "react";

const useTvShows = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector((store) => store.movies?.tvShows);

  const getTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTvShows(json?.results));
  };

  useEffect(() => {
    !tvShows && getTvShows();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTvShows;
