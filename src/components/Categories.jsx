import Loader from "./Loader";
import { useFetch } from "../hooks/useFecth";
import { useState } from "react";

const Categories = ({ handleCheckboxChange }) => {
  const [isLoading, errorMessage, categories] = useFetch("GetGenres");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {isLoading && <Loader />}
      {errorMessage && <Loader message={errorMessage} />}
      {
        /* Last Reviews */
        categories && (
          <>
            <div className="flex items-center justify-between md:hidden mb-4">
              <button
                onClick={() => {
                  toggleSidebar();
                }}
                className={`${isSidebarOpen ? "bg-gray-700" : "bg-gray-900"} p-2 rounded-full w-12 h-12 focus:outline-none`}
              >
                <span className="material-symbols-outlined text-white text-3xl">
                  filter_alt
                </span>
              </button>
            </div>

            <aside
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } md:block md:w-1/5 bg-white md:bg-transparent p-0 md:p-0 md:relative md:flex-shrink-0`}
            >
              <h3 className="font-bold text-xl mb-4">Category</h3>
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={() => {
                        handleCheckboxChange(category);
                      }}
                    />
                    <span className="text-l font-semibold whitespace-nowrap">
                      {category}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </>
        )
      }
    </>
  );
};

export default Categories;
