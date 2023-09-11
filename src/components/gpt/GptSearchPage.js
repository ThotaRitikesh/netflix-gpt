import React from "react";
import { BG_IMG_URL } from "../../utiles/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-20">
        <img
          className="h-screen object-cover md:h-auto"
          src={BG_IMG_URL}
          alt="bg-img"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearchPage;
