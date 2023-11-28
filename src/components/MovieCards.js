import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({posterpath}) => {
    
    return(
        <div className="w-36 pr-4">
            <img alt="moviecard" src={IMG_CDN_URL + posterpath}></img>
        </div>
    )
}

export default MovieCards;