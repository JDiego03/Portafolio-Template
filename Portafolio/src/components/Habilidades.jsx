function TechBadge({ label }) {
  return (
    <span className="inline-block text-sm px-4 py-1.5 rounded-full border border-blue-400 text-blue-600 dark:text-blue-300 dark:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:ring-2 hover:ring-blue-300/40 dark:hover:ring-blue-500/40 backdrop-blur-sm cursor-default">
      {label}
    </span>
  );
}

function Habilidades() {
  return (
    <div className="text-center space-y-10 bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 sm:p-12 shadow-md dark:shadow-lg transition-all duration-300">
      <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
        Habilidades
      </h3>

      <div className="flex justify-center flex-wrap gap-4 pt-2">
        <TechBadge label="Node.js" />
        <TechBadge label="React" />
        <TechBadge label="GitHub" />
        <TechBadge label=".NET" />
        <TechBadge label="API REST" />
        <TechBadge label="C#" />
        <TechBadge label="Tailwind CSS" />
        <TechBadge label="HTML" />
        <TechBadge label="Javascript" />
        <TechBadge label="CSS" />
        <TechBadge label="SQL" />
        <TechBadge label="Docker" />
        <TechBadge label="WordPress" />
      </div>
    </div>
  );
}

export default Habilidades;
