import imgAutomarket from "../assets/AutomarketHome.webp";
import imgGestorTarea from "../assets/GestorHome.webp";
import imgAcufade from "../assets/AcufadeLogin.webp";
import { useNavigate } from "react-router-dom";

const proyectos = [
  {
    titulo: "Automarket",
    descripcion:
      "Marketplace de coches con funcionalidades completas como login, publicación de vehículos, filtros y panel de usuario.",
    imagen: imgAutomarket,
    link: "ProyectoAutomarket",
  },
  {
    titulo: "Gestor de Tareas",
    descripcion:
      "Aplicación personal para gestionar tareas de forma eficiente con alertas, estados y colaboración.",
    imagen: imgGestorTarea,
    link: "ProyectoGestor",
  },
  {
    titulo: "Acufade",
    descripcion:
      "Software desarrollado para una ONG donde los familiares pueden acceder a la información de los trabajadores responsables del cuidado de sus seres queridos.",
    imagen: imgAcufade,
    link: "ProyectoAcufade",
  },
];

export default function Proyectos() {
  const navigate = useNavigate();
  return (
    <div className="text-center space-y-16 px-4 sm:px-8 lg:px-24 py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 rounded-2xl">
      <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        Proyectos
      </h3>

      <div className="flex flex-col items-center gap-14 sm:flex-row sm:flex-wrap sm:justify-center">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] lg:w-[46%] xl:w-[40%] bg-white dark:bg-gray-800 rounded-3xl shadow-lg dark:shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-[1.015]"
          >
            <div className="h-72 w-full overflow-hidden">
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {proyecto.titulo}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-base flex-1 leading-relaxed">
                {proyecto.descripcion}
              </p>
              <a
                onClick={() => navigate(`/${proyecto.link}`)}
                className="cursor-pointer mt-6 inline-flex items-center self-start bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
              >
                Más información
                <span className="ml-2 text-lg">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
