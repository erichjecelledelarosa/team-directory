import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar({ favoritesCount, darkMode, onToggleDark }) {
  const linkStyle = ({ isActive }) => (isActive ? "font-bold underline" : "");

  return (
    <nav className="flex gap-6 p-4 bg-gray-200 dark:bg-gray-800">
      <NavLink to="/" className={linkStyle}>Home</NavLink>
      <NavLink to="/users" className={linkStyle}>Users</NavLink>
      <NavLink to="/about" className={linkStyle}>About</NavLink>

      <span className="ml-auto">Favorites: {favoritesCount}</span>
      <Button
        label={darkMode ? "Light Mode" : "Dark Mode"}
        onClick={onToggleDark}
        variant="primary"
      />
    </nav>
  );
}
export default Navbar;