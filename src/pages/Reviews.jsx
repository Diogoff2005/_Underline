import LastReviews from "../components/LastReviews";
import Layout from "../components/Layout";
import ReviewForm from "../components/ReviewForm";

const Reviews = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col max-w-[1200px] w-full px-4 md:py-14 py-4 justify-center">
          <div>
            <ReviewForm />
          </div>
          <LastReviews />
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
