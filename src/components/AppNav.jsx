import MenuNavLink from "./MenuNavLink";

const AppNav = ({ isOpen = true }) => {
  return (
    <nav className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <MenuNavLink path={"/movies"} name={"Movies"} />
        </li>
        <li>
          <MenuNavLink path={"/wishlist"} name={"Wishlist"} />
        </li>
        <li>
          <MenuNavLink path={"/reviews"} name={"Reviews"} />
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
