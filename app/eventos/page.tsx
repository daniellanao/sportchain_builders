import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'SportChain | Eventos',
  description: 'Eventos organizados por SportChain. Torneos, entrenamientos, partidos sueltos.',
  keywords: ['eventos deportivos', 'torneos pádel', 'torneos fútbol', 'competiciones', 'deportes', 'pádel', 'fútbol', 'sportchain', 'eventos', 'entrenamientos', 'partidos sueltos'],
  openGraph: {
    title: 'Eventos | SportChain',
    description: 'Eventos organizados por SportChain. Torneos, entrenamientos, partidos sueltos.',
    url: 'https://sportchain.io/eventos',
    images: [
      {
        url: '/sportchain_og.png',
        width: 1200,
        height: 630,
        alt: 'Eventos SportChain - Torneos y competiciones',
      },
    ],
  },
  twitter: {
    title: 'Eventos | SportChain',
    description: 'Eventos organizados por SportChain. Torneos, entrenamientos, partidos sueltos.',
    images: ['/sportchain_og.jpg'],
  },
  alternates: {
    canonical: '/eventos',
  },
};

export default function Eventos() {
  return (
    <main className="min-h-screen background-blue py-20">
      <Navbar />  

      <h2 className="text-4xl font-bold  mb-12 text-center text-white">Eventos Finalizados</h2>

      {/* Main Content */}
      <section className="pb-20 px-4 text-white">
        <div className="max-w-6xl mx-auto">                    

            <div className="grid md:grid-cols-3 gap-8">
            {/* Past Event: Padel DevConnect Tournament */}
            <div className="bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
              <div className="relative mb-4">
                <Image
                  src="/eventos/sportchain_padel_devconnect.jpg"
                  alt="Torneo de Pádel DevConnect"
                  width={400}
                  height={300}
                  className="rounded-xl object-cover w-full h-48"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    PÁDEL
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs font-bold">
                    FINALIZADO
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
              Padel DevConnect Tournament
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
              Torneo de pádel previo al DevConnect 2025.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                  🏆 Ganador: Nico & Tommy
                </span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                  📅 16 de Noviembre 2025
                </span>
              </div>
            </div>

            {/* Past Event: Padel Tournament for Startups & Web3 7.0 */}
            <div className="bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
              <div className="relative mb-4">
                <Image
                  src="/eventos/sportchain_padel_tournament_7.jpg"
                  alt="Torneo de Pádel para Startups & Web3 7.0"
                  width={400}
                  height={300}
                  className="rounded-xl object-cover w-full h-48"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    PÁDEL
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs font-bold">
                    FINALIZADO
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
              Padel Tournament for Startups & Web3 7.0
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
              ¡Regresó el torneo friendly de pádel y diversión! Súmate a este tipo de eventos donde podrás conocer a otros startups y founders.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                  🏆 Ganador: Nico & Vicente
                </span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                  📅 12 de Octubre 2025
                </span>
              </div>
            </div>

            {/* Past Event: Padel Experience */}
            <div className="bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
              <div className="relative mb-4">
                <Image
                  src="/eventos/sportchain_padel_experience.jpg"
                  alt="Sportchain Padel Experience"
                  width={400}
                  height={300}
                  className="rounded-xl object-cover w-full h-48"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    PÁDEL
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs font-bold">
                    FINALIZADO
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Padel Experience
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Una experiencia única de padel y networking, donde los participantes disfrutaron de partidos amistosos, entrenamiento y un ambiente relajado para conectar con otros entusiastas del deporte y la tecnología.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                  🏆 Ganador: Rony & Seba
                </span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                  📅 28 de Setiembre 2025
                </span>
              </div>
            </div>

                  {/* Past Event 3 */}
                  <div className="bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
                    <div className="relative mb-4">
                      <Image
                        src="/eventos/sportchain_padel_tournament_6.jpg"
                        alt="Torneo de Pádel para Startups & Web3 6.0"
                        width={400}
                        height={300}
                        className="rounded-xl object-cover w-full h-48"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                        Padel Tournament for Startups & Web3 6.0
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      Un torneo emocionante que reunió a 16 personas en una tarde de diversion y networking.
                    </p>                
                    <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                                      🏆 Ganador: Emperadores
                                    </span>
                                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                                      📅 07 de Setiembre 2025
                                    </span>
                    </div>
                  </div>

              {/* Past Event 3 */}
              <div className="bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
                <div className="relative mb-4">
                  <Image
                    src="/eventos/sportchain_padel_tournament_5.jpg"
                    alt="Sportchain Padel Tournament for Startups & Web3 5.0"
                    width={400}
                    height={300}
                    className="rounded-xl object-cover w-full h-48"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      PÁDEL
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs font-bold">
                      FINALIZADO
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Padel Tournament for Startups & Web3 5.0
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Un torneo emocionante que reunió a 16 personas en una tarde de diversion y networking.
                </p>                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                    🏆 Ganador: Iluminados & Mentores 
                  </span>
                  <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                    📅 24 de Agosto 2025
                  </span>
                </div>
                
               
              </div>

              {/* Past Event 2 */}
              <div className="bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
                <div className="relative mb-4">
                  <Image
                    src="/eventos/sportchain_padel_tournament_4.jpg"
                    alt="Sportchain Padel Tournament for Startups & VCs 4.0"
                    width={400}
                    height={300}
                    className="rounded-xl object-cover w-full h-48"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      PÁDEL
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs font-bold">
                      FINALIZADO
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Padel Tournament for Startups & VCs 4.0
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  2do torneo de Pádel organizado por SportChain, con 16 participantes.
                </p>                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                    🏆 Ganador: Elevadores
                  </span>
                  <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                    📅 10 de Agosto 2025
                  </span>
                </div>
                
              </div>

              {/* Past Event 1 */}
              <div className="bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
                <div className="relative mb-4">
                  <Image
                    src="/eventos/sportchain_padel_tournament_3.jpg"
                    alt="Sportchain Padel Tournament for Startups & VCs 3.0"
                    width={400}
                    height={300}
                    className="rounded-xl object-cover w-full h-48"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      PÁDEL
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs font-bold">
                      FINALIZADO
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Padel Tournament for Startups & VCs 3.0
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Primer Torneo de Pádel organizado por SportChain, con 16 participantes.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                    🏆 Ganador: Backspin Brothers
                  </span>
                  <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                    📅 27 Julio 2025
                  </span>
                </div>                
              </div>
            </div>
          </div>
      </section>
    </main>
  );
}
