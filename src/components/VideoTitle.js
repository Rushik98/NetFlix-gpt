import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white ">
      <p className="text-3xl font-extrabold ">{title}</p>
      <p className="w-2/4 text-lg">{overview}</p>
      <div className="py-4">
        <button className="bg-white text-black rounded-md p-2 px-10 text-lg hover:bg-gray-300">
          Play
        </button>
        <button className="mx-3 bg-gray-500 text-white rounded-md p-2 px-10 text-lg bg-opacity-50">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
