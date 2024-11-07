import Hero from "../components/Hero";
import LastReviews from "../components/LastReviews";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import useLoading from "../hooks/useLoading";

const Homepage = () => {
  const [isLoading, errorMessage, handleLoading] = useLoading();

  return (
    <Layout>
      {isLoading && <Loader message={errorMessage} />}
      <div hidden={isLoading}>
        <Hero handleLoading={handleLoading} isLoading={isLoading} />
        <div className="flex items-center justify-center">
          <div className="max-w-[1200px] w-full md:py-14 py-6 px-4">
            <LastReviews handleLoading={handleLoading} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
