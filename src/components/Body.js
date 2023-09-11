import React from "react";
import Login from "./routes/Login";
import Browse from "./routes/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NowPlaying from "./routes/NowPlaying";
import TopRated from "./routes/TopRated";
import UpComing from "./routes/UpComing";
import TvShows from "./routes/TvShows";
import Header from "./Header";

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
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
