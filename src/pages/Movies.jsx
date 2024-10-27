import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Movie from "../components/Movie";
import { useFetch } from "../hooks/useFecth";
import Loader from "../components/Loader";
import useFavourites from "../hooks/useFavourites";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const [isLoading, errorMessage, movies] = useFetch(`GetMovies?${query}`);
  const [favorites, toggleFavorite] = useFavourites();

  useEffect(() => {
    const categoryQuery = selectedCategories.length
      ? `category=[${selectedCategories.map((cat) => `"${cat}"`).join(",")}]`
      : "";

    const selectQuery = selectedOption != "" ? `&sortBy=${selectedOption}` : "";

    setQuery(`${categoryQuery}${selectQuery}`);
  }, [selectedCategories, selectedOption]);

  const handleCheckboxChange = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    }
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center ">
        <div className=" flex flex-col md:flex-row max-w-[1200px] w-full px-4 md:py-14 py-4">
          <div className="w-full md:w-1/5">
            <Categories handleCheckboxChange={handleCheckboxChange} />
          </div>
          <div className="w-full md:w-4/5">
            <div className="flex justify-between pb-8">
              <h2 className="text-2xl font-bold">All Movies</h2>
              <select
                onChange={handleSelectChange}
                className="bg-gray-900 shadow-md hover:bg-gray-800 text-white rounded px-3 py-2 text-sm transition-colors duration-200"
                value={selectedOption}
              >
                <option value="relevance">Relevance</option>
                <option value="name">Name</option>
                <option value="year">Year</option>
              </select>
            </div>
            {isLoading && <Loader />}
            {errorMessage && <Loader message={errorMessage} />}
            {!movies || movies.length === 0 ? (
              <h3 className="text-xl">No Results Found</h3>
            ) : (
              <section className=" flex flex-wrap gap-6">
                {movies.map((movie, index) => (
                  <Movie
                    key={index}
                    movie={movie}
                    isFavourite={favorites.includes(movie.id)}
                    addFavourite={toggleFavorite}
                  />
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Movies;
