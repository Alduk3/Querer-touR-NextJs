import Head from 'next/head';

const Main = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Turismo en Antioquia</title>
        <meta name="description" content="Descubre los mejores lugares turísticos de Antioquia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-900 text-white py-6 shadow-md">
        <h1 className="text-4xl text-center font-bold">Turismo en Antioquia</h1>
      </header>

      <main className="p-8 background-#">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Bienvenidos a Antioquia</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Explora los pueblos y sitios de interés de Antioquia y Medellín. Descubre la historia, cultura y gastronomía de cada rincón de esta hermosa región.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Lugares Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ejemplo de lugar destacado */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src="/images/lugar1.jpg" alt="Lugar 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Pueblo 1</h3>
                <p className="text-gray-700 mb-4">Descripción breve del lugar turístico.</p>
                <a href="#" className="text-blue-500 hover:underline">Leer más</a>
              </div>
            </div>
            {/* Más lugares destacados */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src="/images/lugar2.jpg" alt="Lugar 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Pueblo 2</h3>
                <p className="text-gray-700 mb-4">Descripción breve del lugar turístico.</p>
                <a href="#" className="text-blue-500 hover:underline">Leer más</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src="/images/lugar3.jpg" alt="Lugar 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Pueblo 3</h3>
                <p className="text-gray-700 mb-4">Descripción breve del lugar turístico.</p>
                <a href="#" className="text-blue-500 hover:underline">Leer más</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white text-center py-6 mt-12 shadow-inner">
        <p>&copy; 2024 Turismo en Antioquia. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Main;
