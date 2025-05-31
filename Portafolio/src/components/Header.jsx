import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function Header({ toggleTheme, darkMode }) {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <nav aria-label="Main navigation">
          <ul className="flex gap-6 text-base font-medium">
            <li>
              <a
                href="#sobre-mi"
                className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <button
          onClick={toggleTheme}
          className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          aria-label={`Activar modo ${darkMode ? "claro" : "oscuro"}`}
        >
          {darkMode ? <CiLight /> : <MdDarkMode />}
        </button>
      </div>
    </header>
  );
}

export default Header;
