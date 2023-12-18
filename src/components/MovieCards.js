import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { hasMovieDetail } from "../utils/moviesSlice";
import { useNavigate } from "react-router-dom";

const MovieCards = ({ posterpath, movie }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!posterpath) return null;

  const handleClickEvent = () => {
    dispatch(hasMovieDetail(movie));
    navigate("/movie_detail");
  };

  return (
    <div className="w-36 pr-4">
      <img
        className="rounded-full"
        alt="moviecard"
        src={IMG_CDN_URL + posterpath}
        onClick={handleClickEvent}
      ></img>
    </div>
  );
};

export default MovieCards;
