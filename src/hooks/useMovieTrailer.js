import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utiles/constants";
import { addTrailerVideo } from "../utiles/store/movieSlice";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{
  // console.log(movieId);
    const dispatch=useDispatch();
    // const {id}=useSelector(store=>store.movies.mainMovieDetailes);


    const getMovieVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      const filteredResults = json?.results?.filter(
        (video) => video?.type === "Trailer"
      );
      const trailer = filteredResults ? filteredResults[0] : json.results[0];
      dispatch(addTrailerVideo(trailer))
    };
  
    useEffect(() => {
      getMovieVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useMovieTrailer;