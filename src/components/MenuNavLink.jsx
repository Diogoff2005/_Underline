import { NavLink } from "react-router-dom";

const MenuNavLink = ({ path, name }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `block rounded py-2 px-3 md:px-1 md:py-0 text-white ${
          isActive && "bg-slate-500"
        }`
      }
    >
      {name}
    </NavLink>
  );
};

export default MenuNavLink;
