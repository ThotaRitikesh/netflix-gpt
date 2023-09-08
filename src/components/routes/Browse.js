import React from "react";
import Header from "../Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "../MainContainer";
import SecondaryContainer from "../SecondaryContainer";
import useTopRated from "../../hooks/useTopRated";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import useTvShows from "../../hooks/useTvShows";
import GptSearchPage from "../gpt/GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearchPage = useSelector((store) => store.gpt?.showGptSearch);
  useNowPlayingMovies();
  useTopRated();
  useUpcomingMovies();
  useTvShows();
  return (
    <div>
      <Header />
      {showGptSearchPage ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
