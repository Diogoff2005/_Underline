const MoviesHeader = ({
  children,
  handleSelectChange,
  selectedOption,
  isMobile = false,
}) => {
  return (
    <div className={`flex justify-between ${isMobile ? "pb-4" : "pb-8"}`}>
      <h2 className="text-2xl font-bold">All Movies</h2>
      <div>
        <select
          onChange={handleSelectChange}
          className="bg-gray-900 shadow-md hover:bg-gray-800 text-white rounded px-3 py-2 text-sm transition-colors duration-200"
          value={selectedOption}
        >
          <option value="relevance">Relevance</option>
          <option value="name">Name</option>
          <option value="year">Year</option>
        </select>
        {children && children}
      </div>
    </div>
  );
};

export default MoviesHeader;
