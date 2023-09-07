import React from "react";
import lang from "../utiles/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  console.log(langKey);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2  grid  grid-cols-12 bg-black  bg-opacity-70 rounded-full">
        <input
          className="p-2 px-4 m-4 col-span-9 rounded-lg"
          type="text"
          name=""
          id=""
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button className=" m-4 py-2 px-4 col-span-3 text-white bg-red-700 rounded-lg">
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
