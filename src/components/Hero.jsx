import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFecth";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isLoading, errorMessage, headline] = useFetch("GetHeadline");

  return (
    <>
      {isLoading && <Loader />}
      {errorMessage && <Loader message={errorMessage} />}
      {
        /* Hero */
        headline && (
          <section className="relative flex items-center justify-center h-[60vh]">
            {/* Hero Image */}
            <img
              src={headline.image}
              alt="Hero Background"
              className="absolute inset-0 w-full h-full object-cover bg-fixed"
            />
            {/* Hero Content */}
            <div className="relative z-10 text-white px-4 text-left max-w-[1200px] w-full">
              <h1 className="text-5xl font-bold mb-4">{headline.title}</h1>
              <p className="text-lg mb-6 break-words max-w-[400px]">
                {headline.description}
              </p>
              <Link to={`/movie-details/${headline.id}`}>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                  See details
                </button>
              </Link>
            </div>
          </section>
        )
      }
    </>
  );
};

export default Hero;
