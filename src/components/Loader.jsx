import Layout from "../components/Layout";

const Loader = ({ message }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">
          {message ? message : "Loading..."}
        </h1>
      </div>
    </div>
  );
};

export default Loader;
