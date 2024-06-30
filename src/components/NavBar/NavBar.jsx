import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-muted py-8 flex justify-center items-center border-b border-solid mx-9">
      <div className="align-element flex justify-between items center">
        <div className="flex justify-center items-center gap-x-4">
          <NavLink
            to={"/auth/home"}
            className={({ isActive }) => {
              return `capitalize w-full ${isActive ? "text-primary" : ""}`;
            }}
          >
            Home
          </NavLink>

          <NavLink
            to={"/auth/about"}
            className={({ isActive }) => {
              return `capitalize w-full ${isActive ? "text-primary" : ""}`;
            }}
          >
            About
          </NavLink>
          <NavLink
            to={"/auth/contact"}
            className={({ isActive }) => {
              return `capitalize w-full ${isActive ? "text-primary" : ""}`;
            }}
          >
            Contact
          </NavLink>
          <NavLink
            to={"/auth/apidoc"}
            className={({ isActive }) => {
              return `capitalize w-full ${isActive ? "text-primary" : ""}`;
            }}
          >
            APIDoc
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
