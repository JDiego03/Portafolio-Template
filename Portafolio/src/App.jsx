import React, { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import CursorFollower from "./components/Cursor";

const Profile = lazy(() => import("./pages/Profile"));
const ProyectoAutomarket = lazy(() =>
  import("./components/ComponentesProyectos/ProyectoAutomarket")
);
const ProyectoGestor = lazy(() =>
  import("./components/ComponentesProyectos/ProyectoGestor")
);
const ProyectoAcufade = lazy(() =>
  import("./components/ComponentesProyectos/ProyectoAcufade")
);

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-700 dark:text-gray-300 text-lg font-medium select-none">
        Cargando, por favor espera...
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <CursorFollower />
      <HashRouter>
        <main className="flex-1">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route
                path="/ProyectoAutomarket"
                element={<ProyectoAutomarket />}
              />
              <Route path="/ProyectoGestor" element={<ProyectoGestor />} />
              <Route path="/ProyectoAcufade" element={<ProyectoAcufade />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
