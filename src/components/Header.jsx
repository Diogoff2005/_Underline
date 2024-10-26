import AppNav from "./AppNav";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MenuHamburguer from "./MenuHamburguer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openCloseMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" bg-white dark:bg-gray-900">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/*Website Name*/}
        <NavLink to="/" className="text-white text-3xl font-bold">
          _underline
        </NavLink>

        {/* Hamburger Menu*/}
        <MenuHamburguer onClick={openCloseMenu} />

        {/*App Navigation*/}
        <AppNav isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Header;
