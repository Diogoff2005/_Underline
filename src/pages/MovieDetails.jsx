import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import MovieDetailsLayout from "../components/MovieDetailsLayout";
import RelatedMovies from "../components/RelatedMovies";
import useFavourites from "../hooks/useFavourites";
import LastReviews from "../components/LastReviews";

const MovieDetails = () => {
  const { id } = useParams();
  const [favorites, toggleFavorite] = useFavourites();

  return (
    <Layout>
      <div className="flex items-center justify-center ">
        <div className=" flex flex-col max-w-[1200px] w-full px-4 md:py-14 py-4 ">
          <MovieDetailsLayout
            id={id}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
          <div className="h-10" />
          <RelatedMovies
            id={id}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
          <div className="h-10" />
          <LastReviews id={id} />
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetails;
