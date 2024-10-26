import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">Page Not Found</h1>
          <p className="mt-4 text-lg text-gray-600">
            Oops! The page you are looking for does not exist.
          </p>
          <p className="mt-2 text-gray-500">404</p>
          <Link
            to="/"
            className="mt-6 inline-block bg-slate-500 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
