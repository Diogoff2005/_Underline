import { useFetchGet } from "../hooks/useFecthGet";
import Movie from "./Movie";

const WishlistMovie = ({
  id,
  isFavourite,
  toggleFavourite,
  isLoading,
  handleLoading,
}) => {
  const movie = useFetchGet(`GetMovies?id=${id}`, isLoading, handleLoading);

  return (
    <>
      {movie && (
        <Movie
          movie={movie}
          isFavourite={isFavourite}
          addFavourite={toggleFavourite}
        />
      )}
    </>
  );
};

export default WishlistMovie;
