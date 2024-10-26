import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section>{children}</section>
    </>
  );
};

export default Layout;
