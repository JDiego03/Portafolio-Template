import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

function ButtomVolver() {
  return (
    <div className="fixed top-4 left-4 z-50">
      <Link
        to="/"
        className="flex items-center gap-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-500 px-4 py-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
      >
        <IoArrowBackSharp className="text-xl" />
        <span className="text-sm font-medium">Volver al inicio</span>
      </Link>
    </div>
  );
}

export default ButtomVolver;
