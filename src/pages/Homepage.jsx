import Hero from "../components/Hero";
import LastReviews from "../components/LastReviews";
import Layout from "../components/Layout";
import { useFetch } from "../hooks/useFecth";

const Homepage = () => {
  const [isLoading, errorMessage, headline] = useFetch("GetHeadline");

  return (
    <Layout>
      <Hero />
      <LastReviews />
    </Layout>
  );
};

export default Homepage;
