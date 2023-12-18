import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovies = movies[0];

  const { original_title, id, overview } = mainMovies;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} id={id} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
