import React from "react";
import Login from "./routes/Login";
import Browse from "./routes/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
