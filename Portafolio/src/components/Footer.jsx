import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Juan Diego — Todos los derechos
          reservados.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/juan-diego-calvo-arocha-1a7181307/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
