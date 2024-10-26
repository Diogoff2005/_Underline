import AppNav from "./AppNav";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <NavLink to="/">_Underline</NavLink>
      <AppNav />
    </header>
  );
};

export default Header;
