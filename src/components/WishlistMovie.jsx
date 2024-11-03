import { useFetchGet } from "../hooks/useFecthGet";
import Loader from "./Loader";
import Movie from "./Movie";

const WishlistMovie = ({ id, isFavourite, toggleFavorite }) => {
  const [isLoading, errorMessage, movie] = useFetchGet(`GetMovies?id=${id}`);

  return (
    <>
      {isLoading && <Loader />}
      {errorMessage && <Loader message={errorMessage} />}
      {movie && (
        <Movie
          movie={movie}
          isFavourite={isFavourite}
          addFavourite={toggleFavorite}
        />
      )}
    </>
  );
};

export default WishlistMovie;
