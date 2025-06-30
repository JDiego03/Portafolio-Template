import { useEffect, useState } from "react";
import Inicio from "../components/Inicio";
import Proyectos from "../components/Proyectos";
import Header from "../components/Header";
import Experiencia from "../components/Experiencia";
import RainEffect from "../components/RainEffect";
import Habilidades from "../components/Habilidades";

function Profile() {
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
    <div className="min-h-screen flex flex-col bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />

      <main className="pt-24 flex-1 flex flex-col items-center justify-center">
        {/* Inicio Section */}
        <section
          id="inicio"
          className="w-full border-b-4 border-gray-300 dark:border-blue-600 relative overflow-hidden"
        >
          <RainEffect />
          <article className="max-w-4xl mx-auto px-6 py-20 sm:py-28 min-h-[80vh] flex items-center justify-center relative z-10">
            <Inicio />
          </article>
        </section>

        {/* Proyectos Section */}
        <section
          id="proyectos"
          className="w-full border-t border-gray-300 dark:border-blue-500/30"
          // borde top fino y translúcido en dark para separación
        >
          <article className="max-w-7xl mx-auto px-6 py-20">
            <Proyectos />
          </article>
        </section>

        {/* Habilidades Section */}
        <section
          id="habilidades"
          className="w-full border-t border-gray-300 dark:border-blue-500/30"
          // mismo borde para continuidad visual
        >
          <article className="max-w-4xl mx-auto px-6 py-20">
            <Habilidades />
          </article>
        </section>

        {/* Experiencia Section */}
        <section
          id="experiencia"
          className="w-full border-t border-gray-300 dark:border-blue-500/30"
          // mismo borde para continuidad visual
        >
          <article className="max-w-4xl mx-auto px-6 py-20">
            <Experiencia />
          </article>
        </section>
      </main>
    </div>
  );
}

export default Profile;
