import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const shouldUseDark = savedTheme === "dark" || savedTheme === null;
    if (shouldUseDark) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home toggleTheme={toggleTheme} darkMode={darkMode} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
