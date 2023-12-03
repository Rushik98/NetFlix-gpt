import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  const getNowUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("Up COming", json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upComingMovies && getNowUpComingMovies();
  }, []);
};

export default useUpcomingMovies;
