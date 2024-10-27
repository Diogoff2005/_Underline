import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Movie from "../components/Movie";
import { useFetch } from "../hooks/useFecth";
import Loader from "../components/Loader";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [isLoading, errorMessage, movies] = useFetch(`GetMovies?${query}`);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    }
  };

  useEffect(() => {
    const categoryQuery = selectedCategories.length
      ? `category=[${selectedCategories.map((cat) => `"${cat}"`).join(",")}]`
      : "";

    setQuery(`${categoryQuery}`);
  }, [selectedCategories]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <Layout>
      <div className="relative flex items-center justify-center ">
        <div className=" flex max-w-[1200px] w-full px-4 py-14">
          <div className="w-1/5">
            <Categories handleCheckboxChange={handleCheckboxChange} />
          </div>
          <div className="w-4/5">
            <h2 className="text-2xl font-bold">All Movies</h2>
            {isLoading && <Loader />}
            {errorMessage && <Loader message={errorMessage} />}
            {movies && (
              <section className=" flex flex-wrap ">
                {movies.map((movie, index) => (
                  <p key={index}>{movie.title}</p>
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
