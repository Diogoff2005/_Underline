import { Link } from "react-router-dom";
import Heart from "./Hearth";

const Movie = ({ movie, isFavourite, addFavourite }) => {
  return (
    <div className="bg-gray-900 text-white py-3 px-3 rounded-xl">
      <div
        onClick={() => {
          addFavourite(movie.id);
        }}
        className="absolute p-1 bg-gray-900 m-1 rounded-full shadow-md hover:bg-gray-800 transition duration-200 cursor-pointer"
      >
        <Heart isFilled={isFavourite} addFavourite={addFavourite} />
      </div>
      <Link to={`/movie-details/${movie.id}`}>
        <img src={movie.posterUrl} className="w-[220px] h-[326px]" />
        <p className="text-sm text-gray-300 pt-2">{movie.genres}</p>
        <h2 className="font-bold">{movie.title}</h2>
      </Link>
    </div>
  );
};

export default Movie;
