import React, { useRef } from "react";
import lang from "../utiles/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utiles/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);

  const userInput = useRef();

  const handleGptSearch = async () => {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: userInput.current.value }],
      model: "gpt-3.5-turbo",
    });
    console.log(completion.choices);
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
