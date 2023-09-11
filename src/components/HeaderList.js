import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderList = () => {
  const Navigate = useNavigate();

  return (
    <ul className="text-white lg:flex gap-8 pl-3 pt-5 hidden sm:hidden bg-black">
      <li
        className="cursor-pointer hover:text-red-700"
        onClick={() => Navigate("/browse")}
      >
        Home
      </li>
      <li
        className="cursor-pointer hover:text-red-700"
        onClick={() => Navigate("/nowplaying")}
      >
        Now Playing
      </li>
      <li
        className="cursor-pointer  hover:text-red-700"
        onClick={() => Navigate("/toprated")}
      >
        Top Rated
      </li>
      <li
        className="cursor-pointer  hover:text-red-700"
        onClick={() => Navigate("/upcoming")}
      >
        UpComing Movies
      </li>
      <li
        className="cursor-pointer  hover:text-red-700"
        onClick={() => Navigate("/tvshows")}
      >
        TV Shows
      </li>
    </ul>
  );
};

export default HeaderList;
