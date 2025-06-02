import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function Header({ toggleTheme, darkMode }) {
  return (
    <header className="fixed top-0 w-full z-50 border-b-4 border-gray-200 dark:border-blue-600 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md transition-colors">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <nav aria-label="Main navigation">
          <ul className="flex gap-6 text-base font-medium text-gray-900 dark:text-white">
            <li>
              <a
                href="#inicio"
                className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition"
              >
                inicio
              </a>
            </li>
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
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/JuanDiegoCV.pdf"
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
    </header>
  );
}

export default Header;
