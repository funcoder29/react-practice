import { NavLink } from "react-router";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Categories
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Favorites
          </NavLink>
        </nav>
      </header>
    </>
  );
};
