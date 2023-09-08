import React from "react";
import { BG_IMG_URL } from "../../utiles/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchPage = () => {
  return (
    <div>
        <div className="absolute -z-20">
      <img src={BG_IMG_URL} alt="bg-img" />
        </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  );
};

export default GptSearchPage;
