function Inicio() {
  return (
    <div className="text-center space-y-6 px-4 sm:px-8">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-snug">
        Encantado, soy{" "}
        <span className="text-blue-600 dark:text-blue-400">Juan Diego</span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium">
        Desarrollador Web{" "}
        <span className="text-blue-600 dark:text-blue-400 font-semibold">
          Front-end
        </span>{" "}
        |{" "}
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
          Back-end
        </span>
      </p>
    </div>
  );
}

export default Inicio;
