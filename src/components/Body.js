import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetailInfo from "./MovieDetailInfo";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "", element: <Login /> },
    { path: "browse", element: <Browse /> },
    { path: "/movie_detail", element: <MovieDetailInfo /> },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
