import LastReviews from "../components/LastReviews";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import ReviewForm from "../components/ReviewForm";
import useLoading from "../hooks/useLoading";

const Reviews = () => {
  const [isLoading, errorMessage, handleLoading] = useLoading();

  return (
    <Layout>
      {isLoading && <Loader message={errorMessage} />}
      <div hidden={isLoading}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col max-w-[1200px] w-full px-4 md:py-14 py-6 justify-center">
            <div>
              <ReviewForm isLoading={isLoading} handleLoading={handleLoading} />
            </div>
            <LastReviews isLoading={isLoading} handleLoading={handleLoading} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
