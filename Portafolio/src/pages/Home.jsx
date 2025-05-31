import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <main className="flex-1 flex items-center justify-center p-6">
        <section className="text-center space-y-6 max-w-xl">
          <h1 className="text-4xl font-bold tracking-tight">Juan Diego</h1>
          <p className="text-lg leading-relaxed">
            Soy desarrollador <span className="font-semibold">front-end</span> y{" "}
            <span className="font-semibold">backend</span>. Me encanta construir
            ideas, aprender nuevas tecnologías y convertir conceptos en
            productos reales.
          </p>
          <button
            onClick={() => navigate("/Profile")}
            className="hoverable inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition"
            aria-label="Ir al portafolio de Juan Diego"
          >
            Ver portafolio
          </button>
        </section>
      </main>
    </div>
  );
}
