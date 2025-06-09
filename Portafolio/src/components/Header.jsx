import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

function Header({ toggleTheme, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 border-b-4 border-gray-200 dark:border-blue-600 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md transition-colors">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-gray-900 dark:text-white focus:outline-none"
            aria-label="Abrir menú"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t md:border-0 md:static md:w-auto md:flex md:items-center`}
          aria-label="Main navigation"
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-base font-medium text-gray-900 dark:text-white px-4 py-4 md:p-0">
            <li>
              <button
                onClick={() => handleNavClick("inicio")}
                className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("sobre-mi")}
                className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition"
              >
                Sobre mí
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("proyectos")}
                className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition"
              >
                Proyectos
              </button>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`${import.meta.env.BASE_URL}JuanDiegoCV.pdf`}
            download
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition shadow-md"
          >
            Descargar CV
          </a>

          <button
            onClick={toggleTheme}
            className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            aria-label={`Activar modo ${darkMode ? "claro" : "oscuro"}`}
          >
            {darkMode ? <CiLight /> : <MdDarkMode />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4">
          <a
            href={`${import.meta.env.BASE_URL}JuanDiegoCV.pdf`}
            download
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition shadow-md text-center"
          >
            Descargar CV
          </a>

          <button
            onClick={toggleTheme}
            className="self-center text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            aria-label={`Activar modo ${darkMode ? "claro" : "oscuro"}`}
          >
            {darkMode ? <CiLight /> : <MdDarkMode />}
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
