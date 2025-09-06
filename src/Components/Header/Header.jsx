import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">JsonPlaceholder</h1>
        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:underline ${isActive ? "font-semibold" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                `hover:underline ${isActive ? "font-semibold" : ""}`
              }
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `hover:underline ${isActive ? "font-semibold" : ""}`
              }
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header 