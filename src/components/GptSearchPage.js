import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_IMG} alt="Netflix"></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
