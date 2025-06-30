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
  const [isDownloading, setIsDownloading] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  const descargarCV = async () => {
    try {
      setIsDownloading(true);
      const response = await fetch(
        `${import.meta.env.BASE_URL}JuanDiegoCV.pdf`
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "JuanDiegoCV.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al descargar el CV:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <header
      className="fixed top-0 w-full z-50 border-b-4 border-gray-200 dark:border-blue-600 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md transition-colors"
      role="banner"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Navegación */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t md:border-0 md:static md:w-auto md:flex md:items-center`}
          aria-label="Navegación principal"
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-base font-medium text-gray-900 dark:text-white px-4 py-4 md:p-0">
            {[
              { id: "inicio", label: "Inicio" },
              { id: "sobre-mi", label: "Sobre mí" },
              { id: "proyectos", label: "Proyectos" },
              { id: "experiencia", label: "Experiencia" },
              { id: "educacion", label: "Educación" },
              { id: "habilidades", label: "Habilidades" },
            ].map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botones derecho (descarga y tema) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={descargarCV}
            disabled={isDownloading}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition shadow-md flex items-center gap-2 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isDownloading ? (
              <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-white border-solid"></span>
            ) : (
              "Descargar CV"
            )}
          </button>

          <button
            onClick={toggleTheme}
            className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            aria-label={`Activar modo ${darkMode ? "claro" : "oscuro"}`}
          >
            {darkMode ? <CiLight /> : <MdDarkMode />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4">
          <button
            onClick={descargarCV}
            disabled={isDownloading}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition shadow-md text-center flex justify-center items-center gap-2 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isDownloading ? (
              <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-white border-solid"></span>
            ) : (
              "Descargar CV"
            )}
          </button>

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
