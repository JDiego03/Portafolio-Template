import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Navegación en escritorio */}
        <nav className="hidden md:flex items-center gap-6 text-base font-medium text-gray-900 dark:text-white">
          {[
            { id: "inicio", label: "Inicio" },
            { id: "proyectos", label: "Proyectos" },
            { id: "acercaDeMi", label: "Sobre mí" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Botones sociales + tema (escritorio) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/juan-diego-calvo-arocha-1a7181307/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/JDiego03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded transition"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <p>|</p>
          <button
            onClick={toggleTheme}
            className="text-2xl rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            aria-label={`Activar modo ${darkMode ? "claro" : "oscuro"}`}
          >
            {darkMode ? <CiLight /> : <MdDarkMode />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white dark:bg-gray-900 border-t flex flex-col gap-4 text-base font-medium text-gray-900 dark:text-white">
          {[
            { id: "inicio", label: "Inicio" },
            { id: "proyectos", label: "Proyectos" },
            { id: "acercaDeMi", label: "Sobre mí" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="text-left hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition"
            >
              {label}
            </button>
          ))}
          <div className="flex justify-center gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/juan-diego-calvo-arocha-1a7181307/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/JDiego03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-gray-200"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
            <p>|</p>
            <button
              onClick={toggleTheme}
              className="text-2xl rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              aria-label={`Activar modo ${darkMode ? "claro" : "oscuro"}`}
            >
              {darkMode ? <CiLight /> : <MdDarkMode />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
