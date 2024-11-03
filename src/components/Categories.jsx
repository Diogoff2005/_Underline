import Loader from "./Loader";
import { useFetchGet } from "../hooks/useFecthGet";

const Categories = ({ handleCheckboxChange, isSidebarOpen }) => {
  const [isLoading, errorMessage, categories] = useFetchGet("GetGenres");

  return (
    <>
      {isLoading && <Loader />}
      {errorMessage && <Loader message={errorMessage} />}
      {
        /* Last Reviews */
        categories && (
          <>
            <aside
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } md:block md:w-1/5 bg-white md:bg-transparent p-0 md:p-0 md:relative md:flex-shrink-0`}
            >
              <h3 className="font-bold text-xl mb-4">Category</h3>
              <ul className="grid grid-cols-3 md:block">
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
