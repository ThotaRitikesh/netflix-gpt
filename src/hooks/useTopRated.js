import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utiles/constants";
import { addTopRatedMovies } from "../utiles/store/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTopRated;
