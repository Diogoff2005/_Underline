import Hero from "../components/Hero";
import LastReviews from "../components/LastReviews";
import Layout from "../components/Layout";

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <div className="flex items-center justify-center">
        <div className="max-w-[1200px] w-full py-14 px-4">
          <LastReviews />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
