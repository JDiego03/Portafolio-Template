import ButtomVolver from "../ButtomVolver";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaGithub } from "react-icons/fa";

import img1 from "../../assets/Acufade/img1.webp";
import img2 from "../../assets/Acufade/img2.webp";
import img3 from "../../assets/Acufade/img3.webp";
import img4 from "../../assets/Acufade/img4.webp";
import img5 from "../../assets/Acufade/img5.webp";

const images = [
  { original: img1, thumbnail: img1 },
  { original: img2, thumbnail: img2 },
  { original: img2, thumbnail: img3 },
  { original: img4, thumbnail: img4 },
  { original: img5, thumbnail: img5 },
];

function TechBadge({ label }) {
  return (
    <span className="inline-block text-sm px-4 py-1.5 rounded-full border border-blue-400 text-blue-600 dark:text-blue-300 dark:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:ring-2 hover:ring-blue-300/40 dark:hover:ring-blue-500/40 backdrop-blur-sm cursor-default">
      {label}
    </span>
  );
}

function ProyectoAcufade() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 py-16 space-y-16">
      <ButtomVolver />
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Proyecto Acufade
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-xl mx-auto text-left">
          Este proyecto ya no tengo acceso a la web ni al repositorio, rescate
          imagenes de una platilla que hice para la empresa que trabaje E-ASY,
          pero el proyecto real fue para acufade, el proyecto es igual que esta
          template que hice a partir de la de Acufade.
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
            Este proyecto fue desarrollado para acufade, una ONG, donde la idea
            era solucionar que los familiares tenga una web donde tener los
            cobros, ver el personal que estaba a cargo del familiar que
            estuviera en la residencia, tambien se podian contratar servicios
            que tenia la empresa. Usamos muchas librerias de react y node
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl text-center font-semibold text-gray-900 dark:text-white">
          Tecnologías utilizadas
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          <TechBadge label="Node.js" />
          <TechBadge label="Express" />
          <TechBadge label="React" />
          <TechBadge label="Tailwind CSS" />
          <TechBadge label="Git" />
          <TechBadge label="ApiRest" />
          <TechBadge label="Base de datos" />
          <TechBadge label="Docker" />
        </div>
      </div>
    </section>
  );
}

export default ProyectoAcufade;
