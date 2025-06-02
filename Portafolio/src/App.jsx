import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import ProyectoAutomarket from "./components/ComponentesProyectos/ProyectoAutomarket";
import ProyectoGestor from "./components/ComponentesProyectos/ProyectoGestor";
import ProyectoAcufade from "./components/ComponentesProyectos/ProyectoAcufade";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <BrowserRouter>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route
              path="/ProyectoAutomarket"
              element={<ProyectoAutomarket />}
            />
            <Route path="/ProyectoGestor" element={<ProyectoGestor />} />
            <Route path="/ProyectoAcufade" element={<ProyectoAcufade />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
