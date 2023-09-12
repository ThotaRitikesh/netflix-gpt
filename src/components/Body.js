import React from "react";
import Login from "./routes/Login";
import Browse from "./routes/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NowPlaying from "./routes/NowPlaying";
import TopRated from "./routes/TopRated";
import UpComing from "./routes/UpComing";
import TvShows from "./routes/TvShows";
import GptSearchPage from "./gpt/GptSearchPage";
import ErrorPage from "./routes/ErrorPage";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <ErrorPage />,
    },
    {
      path: "/nowplaying",
      element: <NowPlaying />,
    },
    {
      path: "/toprated",
      element: <TopRated />,
    },
    {
      path: "/upcoming",
      element: <UpComing />,
    },
    {
      path: "/tvshows",
      element: <TvShows />,
    },
    {
      path: "/gptsearch",
      element: <GptSearchPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
