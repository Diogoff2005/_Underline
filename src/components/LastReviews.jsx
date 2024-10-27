import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFecth";
import Review from "./Review";

const LastReviews = () => {
  const [isLoading, errorMessage, reviews] = useFetch("GetReviews");

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1200px] w-full py-14 px-4">
        <h2 className="text-3xl font-bold text-gray-800 pb-8">Last Reviews:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isLoading && <Loader />}
          {errorMessage && <Loader message={errorMessage} />}
          {
            /* Last Reviews */
            reviews &&
              reviews.map((review, index) => (
                <Review key={index} review={review} />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default LastReviews;
