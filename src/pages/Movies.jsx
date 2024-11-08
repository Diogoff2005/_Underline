import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Movie from "../components/Movie";
import { useFetchGet } from "../hooks/useFecthGet";
import Loader from "../components/Loader";
import useFavourites from "../hooks/useFavourites";
import MoviesHeader from "../components/MoviesHeader";
import CategoriesButton from "../components/CategoriesButtons";
import useLoading from "../hooks/useLoading";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isLoading, errorMessage, handleLoading] = useLoading();
  const movies = useFetchGet(`GetMovies?${query}`, isLoading, handleLoading);
  const [favourites, toggleFavourite] = useFavourites();

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout>
      {isLoading && <Loader message={errorMessage} />}
      <div hidden={isLoading}>
        <div className="flex items-center justify-center ">
          <div className=" flex flex-col min-h-screen  md:flex-row max-w-[1200px] w-full px-4 md:py-14 py-4">
            <div className="w-full md:w-1/5">
              <div className="md:hidden w-full flex items-center">
                <CategoriesButton
                  isSidebarOpen={isSidebarOpen}
                  toggleSidebar={toggleSidebar}
                />
                <div className="w-full pl-4">
                  <MoviesHeader
                    handleSelectChange={handleSelectChange}
                    selectedOption={selectedOption}
                    isMobile={true}
                  />
                </div>
              </div>
              <div className="md:w-auto w-full md:pb-0 pb-4">
                <Categories
                  handleCheckboxChange={handleCheckboxChange}
                  isSidebarOpen={isSidebarOpen}
                  isLoading={isLoading}
                  handleLoading={handleLoading}
                />
              </div>
            </div>
            <div className="w-full md:w-4/5">
              <div className="hidden md:block">
                <MoviesHeader
                  handleSelectChange={handleSelectChange}
                  selectedOption={selectedOption}
                />
              </div>
              {!movies || movies.length === 0 ? (
                <h3 className="text-xl">No Results Found</h3>
              ) : (
                <section className=" flex flex-wrap gap-6 md:justify-normal justify-center">
                  {movies.map((movie, index) => (
                    <Movie
                      key={index}
                      movie={movie}
                      isFavourite={favourites.includes(movie.id)}
                      addFavourite={toggleFavourite}
                    />
                  ))}
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Movies;
