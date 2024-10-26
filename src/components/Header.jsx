import AppNav from "./AppNav";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" bg-white dark:bg-gray-900">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Homepage Logo*/}
        <NavLink to="/" className="text-white text-3xl font-bold">
          _underline
        </NavLink>

        {/* Hamburger Menu*/}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open Menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/*App Navigation*/}
        <AppNav isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Header;
