import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {


  return (
    <div className="px-4 ">
      <h1 className="py-2 text-3xl text-white">{title}</h1>
      <div className="flex scrollbar-hide md:scrollbar-default overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCards
              key={movie.id}
              posterpath={movie?.poster_path}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
