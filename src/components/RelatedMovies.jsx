import Movie from "./Movie";
import { Link } from "react-router-dom";
import { useFetchGet } from "../hooks/useFecthGet";

const RelatedMovies = ({
  id,
  favorites,
  toggleFavorite,
  handleLoading,
  isLoading,
}) => {
  const movies = useFetchGet(`GetRelated?id=${id}`, isLoading, handleLoading);

  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-2xl">Related Movies</h3>
        <Link to="/movies">
          <p className="underline text-sm text-gray-500">See all</p>
        </Link>
      </div>
      {movies && movies.length != 0 ? (
        <section className=" flex flex-wrap gap-6 pt-4 md:justify-normal justify-center">
          {movies.map((movie, index) => (
            <Movie
              key={index}
              movie={movie}
              isFavourite={favorites.includes(movie.id)}
              addFavourite={toggleFavorite}
            />
          ))}
        </section>
      ) : (
        <h3 className="text-xl pt-4">No Related Movies Found</h3>
      )}
    </>
  );
};

export default RelatedMovies;
