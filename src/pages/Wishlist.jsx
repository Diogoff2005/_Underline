import Layout from "../components/Layout";
import useFavourites from "../hooks/useFavourites";
import WishlistMovie from "../components/WishlistMovie";
import useLoading from "../hooks/useLoading";
import Loader from "../components/Loader";
import { useEffect } from "react";

const Wishlist = () => {
  const [favourites, toggleFavourite] = useFavourites();
  const [isLoading, errorMessage, handleLoading] = useLoading();

  useEffect(() => {
    favourites && favourites.length === 0 && handleLoading(false);
  }, [favourites]);

  return (
    <Layout>
      {isLoading && <Loader message={errorMessage} />}
      <div hidden={isLoading}>
        <div className="flex items-center justify-center ">
          <div className="max-w-[1200px] min-h-screen w-full px-4 md:py-14 py-4">
            <h1 className="text-2xl font-bold">Wishlist</h1>
            <section className=" flex flex-wrap gap-6 md:justify-normal justify-center pt-8">
              {favourites && favourites.length !== 0 ? (
                favourites.map(
                  (movieId, index) =>
                    movieId && (
                      <WishlistMovie
                        key={index}
                        id={movieId}
                        isFavourite={true}
                        toggleFavourite={toggleFavourite}
                        isLoading={isLoading}
                        handleLoading={handleLoading}
                      />
                    )
                )
              ) : (
                <h3 className="text-xl">No Favorites</h3>
              )}
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
