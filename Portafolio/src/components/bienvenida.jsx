function bienvenida() {
  return (
    <div className="text-center space-y-2 py-6">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
        Hola, soy{" "}
        <strong className="text-blue-600 dark:text-blue-400">Juan Diego</strong>
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Desarrollador web <span className="font-medium">Front-end</span> |{" "}
        <span className="font-medium">Back-end</span>
      </p>
    </div>
  );
}

export default bienvenida;
