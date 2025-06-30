function Experiencia() {
  const experiencias = [
    {
      puesto: "Desarrollador Full-Stack",
      empresa: "Easy",
      periodo: "Marzo 2025 - Mayo 2025",
      descripcion:
        "Desarrollo y mantenimiento de aplicaciones web utilizando React, Node.js y bases de datos MongoDB. Implemente codigo React y ayude en Node.js, use Git para control de versiones y colaboracion con el equipo. Para estilar use Tailwind CSS y multiples librerias de componentes.",
    },
  ];

  return (
    <div className="text-center space-y-10 bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 sm:p-12 shadow-md dark:shadow-lg transition-all duration-300 max-w-4xl mx-auto">
      <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Experiencia
      </h3>

      <div className="space-y-8 text-left">
        {experiencias.map(({ puesto, empresa, periodo, descripcion }, idx) => (
          <div
            key={idx}
            className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition"
          >
            <h4 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
              {puesto}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
              {empresa} | {periodo}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiencia;
