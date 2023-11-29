import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langs = useSelector((store) => store.config.lang);
  console.log(langs);
  return (
    <div className="pt-40 flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9 rounded-lg"
          type="text"
          placeholder={lang[langs].gptSearchPlaceholder}
        />
        <button className="p-4 m-4 bg-red-700 rounded-lg col-span-3">
          {lang[langs].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
