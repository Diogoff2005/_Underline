import Loader from "../components/Loader";
import { useFetchGet } from "../hooks/useFecthGet";
import Review from "./Review";

const LastReviews = ({ id = "" }) => {
  const [isLoading, errorMessage, reviews] = useFetchGet(`GetReviews?id=${id}`);

  return (
    <>
      <h2 className={`font-bold mb-2 text-2xl`}>Last Reviews:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isLoading && <Loader />}
        {errorMessage && <Loader message={errorMessage} />}
        {
          /* Last Reviews */
          reviews && reviews.length != 0 ? (
            reviews.map((review, index) => (
              <Review key={index} review={review} />
            ))
          ) : (
            <h3 className="text-xl">No Reviews Found</h3>
          )
        }
      </div>
    </>
  );
};

export default LastReviews;
