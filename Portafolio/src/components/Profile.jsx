function Profile() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <main className="flex-1 flex items-center justify-center p-6">
        <section className="max-w-3xl w-full space-y-8 text-center">
          <header>
            <h1 className="text-4xl font-bold tracking-tight">Bienvenido</h1>
          </header>

          <article className="text-left space-y-4" id="sobre-mi">
            <h2 className="text-2xl font-semibold">Sobre mí</h2>
            <p className="text-base leading-relaxed">
              Soy un desarrollador apasionado por crear soluciones tecnológicas
              que tengan impacto. Disfruto trabajar tanto en el frontend como en
              el backend, y siempre estoy en busca de nuevos retos que me
              permitan aprender y crecer profesionalmente.
            </p>
            <p className="text-base leading-relaxed">
              Tengo experiencia con tecnologías como React, Node.js, Tailwind
              CSS, y bases de datos como PostgreSQL y MongoDB. Me enfoco en
              escribir código limpio, accesible y escalable.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Profile;
