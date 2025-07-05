function TechBadge({ label }) {
  return (
    <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full border border-blue-300 text-blue-500 dark:text-blue-400 dark:hover:text-white dark:border-blue-600 transition-transform duration-200 hover:scale-110 hover:bg-blue-500 hover:text-white cursor-default select-none">
      {label}
    </span>
  );
}

const experiencias = [
  {
    puesto: "Desarrollador Full-Stack",
    empresa: "Easy",
    periodo: "Marzo 2025 - Mayo 2025",
    descripcion:
      "Desarrollo y mantenimiento de aplicaciones web con React, Node.js y MongoDB. Implementé código React y colaboré en backend con Node.js usando Git para control de versiones. Estilos con Tailwind CSS y librerías componentes.",
  },
];

const educacion = [
  {
    centro: "CIF César Manrique",
    diploma: "Superior en Desarrollador de aplicaciones web",
    periodo: "Septiembre 2023 - Mayo 2025",
    descripcion:
      "Aprendí tecnologías web modernas: HTML, CSS, JavaScript, React, Node.js y bases de datos SQL/NoSQL, enfocándome en aplicaciones eficientes.",
  },
  {
    centro: "IES Santa Ana",
    diploma: "Medio en Sistemas microinformáticos y redes",
    periodo: "Septiembre 2020 - Mayo 2022",
    descripcion:
      "Formación en instalación, configuración y mantenimiento de sistemas y redes informáticas, con conocimiento en hardware y software.",
  },
];

function AcercaDeMi() {
  return (
    <>
      <h3 className="text-4xl font-extrabold text-center mb-20 text-gray-900 dark:text-white">
        Sobre mí
      </h3>

      <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-900 rounded-3xl p-10 sm:p-16 shadow-md transition-colors duration-300 space-y-20">
        {/* Habilidades */}
        <section>
          <h4 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
            Habilidades
          </h4>
          <div className="flex flex-wrap justify-center gap-4 ">
            {[
              "Node.js",
              "React",
              "GitHub",
              ".NET",
              "API REST",
              "C#",
              "Tailwind CSS",
              "HTML",
              "Javascript",
              "CSS",
              "SQL",
              "Docker",
              "WordPress",
            ].map((tech, i) => (
              <TechBadge key={i} label={tech} />
            ))}
          </div>
        </section>

        {/* Experiencia */}
        <section>
          <h4 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-10">
            Experiencia
          </h4>

          <div className="space-y-8">
            {experiencias.map(
              ({ puesto, empresa, periodo, descripcion }, idx) => (
                <article
                  key={idx}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 bg-gray-50 dark:bg-gray-800"
                >
                  <h5 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    {puesto}
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 italic">
                    {empresa} | {periodo}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
                    {descripcion}
                  </p>
                </article>
              )
            )}
          </div>
        </section>

        {/* Educación */}
        <section>
          <h4 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-10">
            Educación
          </h4>

          <div className="flex flex-wrap justify-center gap-10">
            {educacion.map(({ centro, diploma, periodo, descripcion }, idx) => (
              <article
                key={idx}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-gray-50 dark:bg-gray-800
                   w-full sm:w-[48%] lg:w-[40%] min-w-[280px]"
              >
                <h5 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {diploma}
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic">
                  {centro} | {periodo}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
                  {descripcion}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default AcercaDeMi;
