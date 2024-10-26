import AppNav from "./AppNav";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MenuHamburguer from "./MenuHamburguer";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openCloseMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className=" bg-white dark:bg-gray-900">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/*App Navigation*/}
        <AppNav isOpen={isOpen} />

        {/* Hamburger Menu*/}
        <MenuHamburguer onClick={openCloseMenu} />

        {/*Website Name*/}
        <NavLink to="/" className="text-white text-3xl font-bold">
          _underline
        </NavLink>
      </nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-2">
        <p className="text-sm mx-auto text-gray-500">
          © 2023 Underline, Inc. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
