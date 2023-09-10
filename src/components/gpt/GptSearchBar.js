import React, { useRef } from "react";
import lang from "../../utiles/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../utiles/openai";
import { API_OPTIONS } from "../../utiles/constants";
import { addGptMovieResults } from "../../utiles/store/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config?.lang);

  const userInput = useRef();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a movie Recommendation syaytem and suggest the movie names for the query " +
      userInput.current.value +
      ". Only give name of 10 movies , commasaperated movies like given in examples ahead. Example result : raaz , bhoot , Darna Mana Hai ,  Anando Brahma ,  raat , hero ";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults) {
      //error page
    }

    const gptmovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptmovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResults({ movieNames: gptmovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2  grid  grid-cols-12 bg-black  bg-opacity-70 rounded-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-2 px-4 m-4 col-span-9 rounded-lg"
          type="text"
          name=""
          id=""
          ref={userInput}
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button
          className=" m-4 py-2 px-4 col-span-3 text-white bg-red-700 rounded-lg"
          onClick={handleGptSearch}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
