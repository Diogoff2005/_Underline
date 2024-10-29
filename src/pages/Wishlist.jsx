import Layout from "../components/Layout";
import useFavourites from "../hooks/useFavourites";
import WishlistMovie from "../components/WishlistMovie";

const Wishlist = () => {
  const [favorites, toggleFavorite] = useFavourites();

  return (
    <Layout>
      <div className="flex items-center justify-center ">
        <div className="max-w-[1200px] min-h-screen w-full px-4 md:py-14 py-4">
          <h1 className="text-2xl font-bold">Wishlist</h1>
          <section className=" flex flex-wrap gap-6 md:justify-normal justify-center pt-8">
            {favorites && favorites.length !== 0 ? (
              favorites.map(
                (movieId, index) =>
                  movieId && (
                    <WishlistMovie
                      key={index}
                      id={movieId}
                      isFavourite={true}
                      toggleFavorite={toggleFavorite}
                    />
                  )
              )
            ) : (
              <h3 className="text-xl">No Favorites</h3>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
