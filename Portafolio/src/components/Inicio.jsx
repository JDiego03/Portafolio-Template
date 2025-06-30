function Inicio() {
  return (
    <section
      aria-label="Introducción"
      className="text-center space-y-8 px-6 sm:px-12 max-w-3xl mx-auto"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
        Encantado, soy{" "}
        <span className="text-blue-600 dark:text-blue-400">Juan Diego</span>
      </h1>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-semibold tracking-wide">
        Desarrollador Web{" "}
        <span className="text-blue-600 dark:text-blue-400">Front-end</span>{" "}
        {" | "}{" "}
        <span className="text-emerald-600 dark:text-emerald-400">Back-end</span>
      </p>

      <div className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 sm:p-12 shadow-md dark:shadow-lg transition-all duration-300">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-prose mx-auto">
          Soy un <strong>desarrollador full-stack</strong> con pasión por crear
          soluciones eficientes y elegantes. Me encanta aprender nuevas
          tecnologías, trabajar en equipo y contribuir en proyectos que
          realmente marcan la diferencia.
        </p>
      </div>
    </section>
  );
}

export default Inicio;
