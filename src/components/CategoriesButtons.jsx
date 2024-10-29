const CategoriesButton = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="flex items-center justify-between md:hidden mb-4">
      <button
        onClick={() => {
          toggleSidebar();
        }}
        className={`${isSidebarOpen ? "bg-gray-700" : "bg-gray-900"} p-2 rounded-full w-12 h-12 focus:outline-none`}
      >
        <span className="material-symbols-outlined text-white text-3xl">
          filter_alt
        </span>
      </button>
    </div>
  );
};

export default CategoriesButton;
