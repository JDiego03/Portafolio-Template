import React from "react";

function Footer() {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 py-6 mt-16 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0">
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center sm:text-left font-medium select-none">
          © {new Date().getFullYear()} Juan Diego — Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
