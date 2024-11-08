import { useState, useEffect } from "react";

const useFavourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedFavourites =
      JSON.parse(sessionStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id)
        ? prev.filter((movieId) => movieId !== id)
        : [...prev, id]
    );
  };

  return [favourites, toggleFavourite];
};

export default useFavourites;
