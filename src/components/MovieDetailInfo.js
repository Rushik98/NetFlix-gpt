import React from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import { BG_IMG, IMG_CDN_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

const MovieDetailInfo = () => {
  const movieDetail = useSelector((store) => store.movies.movieDetailInfo);

  const { title, overview } = movieDetail;
  return (
    <div className="absolute bg-gradient-to-r from-black overflow-hidden">
      <div className="fixed -z-10  ">
        <img src={BG_IMG} alt="Netflix"></img>
      </div>
      {/* <div className="p-4 m-4 bg-black bg-opacity-80"> */}
      <div className="pt-[30%] bg-black md:pt-0  text-white ">
        <div className="absolute pt-80 ml-24  flex">
          <img
            className="mr-2"
            src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=40&h=30"
          ></img>
          <span className="text-xl">Series</span>
        </div>
        <VideoTitle title={title} overview={overview} />
        <div className="w-screen ">
          <img
            className="float-right h-screen"
            alt="moviecard"
            src={IMG_CDN_URL + movieDetail?.poster_path}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailInfo;
