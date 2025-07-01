import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 py-6 mt-16 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center sm:text-left font-medium select-none">
          © {new Date().getFullYear()} Juan Diego — Todos los derechos
          reservados.
        </p>
        <nav aria-label="Redes sociales" className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/juan-diego-calvo-arocha-1a7181307/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/JDiego03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded transition"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
