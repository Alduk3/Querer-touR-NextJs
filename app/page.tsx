import Head from 'next/head';
import "../app/ui/global.css"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>QuerertouR</title>
        <meta name="description" content="Descubre los mejores lugares turísticos de Antioquia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="background: linear-gradient(67.32deg, rgba(141, 26, 171, 0.9) 0%, rgba(25, 10, 113, 0.9) 100%);
; text-white py-4">
        <h1 className="text-3xl text-center">QuerertouR</h1>
      </header>

      <main className="p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to Jerico</h2>
          <p className="text-gray-700">
            Explore places and ativities you can reach out in Jericó.
          </p>
        </section>

        <section className="bg-blue-800">
          <h2 className="text-2xl font-bold mb-4">.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            Best place to share with your family
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src="/images/#" alt="ParqueConcepcion" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold mb-2">Parque Concepcion</h3>
              <p className="text-gray-700">Discover the amazing world of the gastronomy in this bautiful place.</p>
            </div>
            {/* Más lugares destacados */}
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white text-center py-4">
        <p>&copy; 2024 QuerertouR. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
