import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaGithub } from "react-icons/fa";

import img1 from "../../assets/Automarket/img1.webp";
import img2 from "../../assets/Automarket/img2.webp";
import img4 from "../../assets/Automarket/img4.webp";
import img5 from "../../assets/Automarket/img5.webp";
import img6 from "../../assets/Automarket/img6.webp";
import img7 from "../../assets/Automarket/img7.webp";
import img8 from "../../assets/Automarket/img8.webp";
import img9 from "../../assets/Automarket/img9.webp";
import ButtomVolver from "../ButtomVolver";

const images = [
  { original: img1, thumbnail: img1 },
  { original: img2, thumbnail: img2 },
  { original: img4, thumbnail: img4 },
  { original: img5, thumbnail: img5 },
  { original: img6, thumbnail: img6 },
  { original: img7, thumbnail: img7 },
  { original: img8, thumbnail: img8 },
  { original: img9, thumbnail: img9 },
];

function TechBadge({ label }) {
  return (
    <span className="inline-block text-sm px-4 py-1.5 rounded-full border border-blue-400 text-blue-600 dark:text-blue-300 dark:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:ring-2 hover:ring-blue-300/40 dark:hover:ring-blue-500/40 backdrop-blur-sm cursor-default">
      {label}
    </span>
  );
}

function GaleriaAutomarket() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 py-16 space-y-16">
      <ButtomVolver />

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Proyecto Automarket
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-xl mx-auto text-left">
          A continuación, te muestro algunas imágenes de la web, acompañadas del
          repositorio, las tecnologías utilizadas y una descripción del
          proyecto.
        </p>
      </div>

      <div>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={true}
          showThumbnails={true}
          showNav={true}
          lazyLoad={true}
        />
      </div>

      <div className="space-y-12 text-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Descripción
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto text-left">
            Este proyecto fue desarrollado como parte del trabajo final del
            ciclo de Desarrollo de Aplicaciones Web. Se trata de un marketplace
            de coches con funcionalidades avanzadas como autenticación segura,
            sistema de publicación, filtros por características, y un completo
            panel de usuario.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Tecnologías utilizadas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <TechBadge label="Node.js" />
            <TechBadge label="Express" />
            <TechBadge label="React" />
            <TechBadge label="Tailwind CSS" />
            <TechBadge label="Git" />
            <TechBadge label="SQL" />
            <TechBadge label="Docker" />
          </div>
        </div>

        {/* Enlace a la repo */}
        <div className="pt-8">
          <a
            href="https://github.com/JDiego03/AutomarketRepo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-white bg-gray-900 dark:bg-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-200 transition-all duration-300 shadow-md"
          >
            <FaGithub className="text-lg" />
            Ver repositorio en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default GaleriaAutomarket;
