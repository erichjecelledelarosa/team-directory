import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-purple-200 text-black dark:bg-purple-950 dark:text-white">
        <Navbar
          favoritesCount={favorites.length}
          darkMode={darkMode}
          onToggleDark={() => setDarkMode(!darkMode)}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/users"
            element={<Users favorites={favorites} onToggleFavorite={toggleFavorite} />}
          />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;