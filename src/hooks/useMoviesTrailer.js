import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerKey } from "../utils/moviesSlice";

const useMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getVideoMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterTrailerData = json.results?.filter(
      (data) => data.type === "Trailer"
    );

    const trailer = filterTrailerData.length
      ? filterTrailerData[0]
      : json.results[0];

    console.log("TRAILERs", trailer);
    dispatch(addTrailerKey(trailer));
  };

  useEffect(() => {
    !trailerVideo && getVideoMovies();
  }, []);
};

export default useMoviesTrailer;
