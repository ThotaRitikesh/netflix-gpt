import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-12 absolute bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-sm w-2/5">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-2 px-5  text-l font-semibold hover:bg-opacity-80 rounded-lg flex">
          <span className="material-symbols-outlined ">play_arrow</span>Play
        </button>
        <button className="mx-3 bg-gray-500 text-white p-2 px-4   text-l font-semibold bg-opacity-50 rounded-lg flex">
          <span className="material-symbols-outlined px-1">info</span> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
