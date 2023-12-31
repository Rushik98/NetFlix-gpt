import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import MovieCards from "./MovieCards";

const GptMovieSuggestion = () => {
  const { movieName, tmdbMovieResult } = useSelector((store) => store.gpt);

  if (!movieName) return null;
  // const filterMovies = tmdbMovieResult.filter((value) => {
  //   return movieName.indexOf(value) == -1;
  // });

  // console.log("FIlterMovies", filterMovies[4]?.[0].title);

  // tmdbMovieResult.forEach((innerArray) => {
  //   innerArray.forEach((item) => {
  //     movieName.map((mov) => {
  //       console.log("Mov", item.title);
  //     });
  //   });
  // });

  console.log("TMDB", tmdbMovieResult[0]?.[0].title);
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        {movieName?.map((movie, index) => {
          return <MovieList key={index} title={movie} movies={tmdbMovieResult[index]} />
        })}

      </div>
    </div>
  );
};

export default GptMovieSuggestion;
