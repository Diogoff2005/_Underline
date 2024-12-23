import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import MovieDetailsLayout from "../components/MovieDetailsLayout";
import RelatedMovies from "../components/RelatedMovies";
import useFavourites from "../hooks/useFavourites";
import LastReviews from "../components/LastReviews";
import useLoading from "../hooks/useLoading";
import Loader from "../components/Loader";

const MovieDetails = () => {
  const { id } = useParams();
  const [favourites, toggleFavourite] = useFavourites();
  const [isLoading, errorMessage, handleLoading] = useLoading();

  return (
    <Layout>
      {isLoading && <Loader message={errorMessage} />}
      <div hidden={isLoading}>
        <div className="flex items-center justify-center ">
          <div className=" flex flex-col max-w-[1200px] w-full px-4 md:py-14 py-4 ">
            <MovieDetailsLayout
              id={id}
              favourites={favourites}
              toggleFavourite={toggleFavourite}
              isLoading={isLoading}
              handleLoading={handleLoading}
            />
            <div className="h-10" />
            <RelatedMovies
              id={id}
              favourites={favourites}
              toggleFavourite={toggleFavourite}
              isLoading={isLoading}
              handleLoading={handleLoading}
            />
            <div className="py-10">
              <LastReviews
                id={id}
                isLoading={isLoading}
                handleLoading={handleLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetails;
