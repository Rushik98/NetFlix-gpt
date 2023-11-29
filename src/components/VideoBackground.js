import React from "react";
import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // fetch trailer video && update the store with trailer data
  useMoviesTrailer(movieId);
  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1"
        }
        title="YouTube video player"
        // frameBorder="0"
        // border= "none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowFullScreen= ""
        // width="100%" height="100%"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
