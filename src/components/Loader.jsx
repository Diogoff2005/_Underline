const Loader = ({ message }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center">
        <div className="inline-block animate-bounce">
          <h1 className="text-6xl font-bold text-white">
            {message ? message : "_underline"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
