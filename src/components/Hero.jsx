import { Link } from "react-router-dom";
import { useFetchGet } from "../hooks/useFecthGet";

const Hero = ({ handleLoading, isLoading }) => {
  const headline = useFetchGet("GetHeadline", isLoading, handleLoading);

  return (
    <>
      {headline && (
        <section className="relative flex items-center justify-center h-[60vh]">
          <img
            src={headline.image}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover bg-fixed"
          />
          <div className="relative z-10 text-white px-4 text-left max-w-[1200px] w-full">
            <h1 className="text-4xl font-bold mb-4">{headline.title}</h1>
            <p className="text-lg mb-6 break-words max-w-[400px]">
              {headline.description}
            </p>
            <Link to={`/movie-details/${headline.id}`}>
              <button className="bg-gray-900  hover:bg-gray-800 text-m text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                See details
              </button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
