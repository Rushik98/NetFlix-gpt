import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langs = useSelector((store) => store.config.lang);
  const searchValue = useRef();
  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleNetflixGptSearch = async () => {
    console.log(searchValue.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchValue.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices?.[0]?.message?.content);

    // we get 5 different movies
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // For each movie I will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise] which return promise because it take time to load

    const tmdbResults = await Promise.all(promiseArray);

    // console.log("tmdbResults", tmdbResults);

    dispatch(
      addGptMovieResult({ movieName: gptMovies, tmdbMovieResult: tmdbResults })
    );
  };
  return (
    <div className="pt-40 flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchValue}
          className="p-4 m-4 col-span-9 rounded-lg"
          type="text"
          placeholder={lang[langs].gptSearchPlaceholder}
        />
        <button
          className="p-4 m-4 bg-red-700 rounded-lg col-span-3"
          onClick={handleNetflixGptSearch}
        >
          {lang[langs].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
