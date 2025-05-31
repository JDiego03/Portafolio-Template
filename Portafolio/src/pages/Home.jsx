import Header from "../components/header";

export default function Home({ toggleTheme, darkMode }) {
  return (
    <>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Bienvenido a mi portafolio</h1>
        {/* Tu contenido */}
      </main>
    </>
  );
}
