import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function Header({ toggleTheme, darkMode }) {
  return (
    <header className="flex justify-between items-center p-4 border-b-2">
      <h1 className="text-2xl font-bold">Juan Diego</h1>

      <nav>
        <ul className="flex gap-6 text-lg">
          <li className="hover:text-blue-500 cursor-pointer transition">
            Sobre mí
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition">
            Proyectos
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition">
            Contacto
          </li>
        </ul>
      </nav>

      <button
        onClick={toggleTheme}
        className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <CiLight /> : <MdDarkMode />}
      </button>
    </header>
  );
}

export default Header;
