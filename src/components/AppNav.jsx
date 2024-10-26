import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/wishlist">Wishlist</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">Reviews</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
