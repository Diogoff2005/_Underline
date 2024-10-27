import Heart from "./Hearth";
import { useFetch } from "../hooks/useFecth";
import Loader from "../components/Loader";

const MovieDetailsLayout = ({ id, favorites, toggleFavorite }) => {
  const [isLoading, errorMessage, movie] = useFetch(`GetMovies?id=${id}`);

  return (
    <>
      {isLoading && <Loader />}
      {errorMessage && <Loader message={errorMessage} />}
      {movie && (
        <div className="flex w-full flex-wrap">
          <div className="w-full md:w-1/5 justify-center items-center">
            <img src={movie.posterUrl} className="w-[220px] h-[326px]r" />
          </div>
          <div className="w-full md:w-4/5 md:pt-0 pt-4 pl-0 md:pl-6">
            <div className="flex ">
              <h2 className="font-bold text-3xl">{movie.title}</h2>
              <div className="flex items-center pl-4">
                <div
                  onClick={() => {
                    toggleFavorite(movie.id);
                  }}
                  className="p-1 bg-gray-900 rounded-full shadow-md hover:bg-gray-800 transition duration-200 cursor-pointer"
                >
                  <Heart isFilled={favorites.includes(movie.id)} />
                </div>
              </div>
            </div>
            <p className="pt-4 font-semibold text-l">{movie.summary}</p>
            <p className="pt-4 text-l">
              <span className="font-bold ">Year: </span>
              {movie.year}
            </p>
            <p className="pt-2 text-l">
              <span className="font-bold ">Duration: </span>
              {movie.runtime}
            </p>
            <p className="pt-2 text-l">
              <span className="font-bold ">Category: </span>
              {movie.genres}
            </p>
            <div className="flex pt-4 gap-10">
              <div>
                <p className="text-l font-bold ">Directors:</p>
                <ul>
                  {movie.director.map((director, index) => (
                    <li key={index}>{director}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-l font-bold ">Actors:</p>
                <ul>
                  {movie.actors.map((actor, index) => (
                    <li key={index}>{actor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailsLayout;
