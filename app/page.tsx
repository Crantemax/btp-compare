import { metiers } from '../data/metiers';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* HEADER PREMIUM */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-900">
                🏗️ BTP-Compare
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-900 font-medium transition">Accueil</a>
              <a href="/plombier" className="text-gray-700 hover:text-blue-900 font-medium transition">Plombiers</a>
              <a href="/electricien" className="text-gray-700 hover:text-blue-900 font-medium transition">Électriciens</a>
              <a href="/macon" className="text-gray-700 hover:text-blue-900 font-medium transition">Maçons</a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-6">
              ⭐ Mis à jour Juin 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Quel logiciel de devis<br />pour votre métier ?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Analyses indépendantes et comparatifs détaillés pour les artisans du bâtiment. 
              <span className="block mt-2 font-semibold text-yellow-400">Plus de 500 avis testés et vérifiés.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <a href="#metiers" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105">
                Voir les comparatifs →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900">500+</div>
              <div className="text-gray-600 mt-2">Avis analysés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900">15+</div>
              <div className="text-gray-600 mt-2">Métiers couverts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900">100%</div>
              <div className="text-gray-600 mt-2">Indépendant</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900">2026</div>
              <div className="text-gray-600 mt-2">Données à jour</div>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTIERS GRID */}
      <section id="metiers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choisissez votre métier
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sélectionnez votre profession pour découvrir le logiciel de devis parfaitement adapté à vos besoins
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metiers.map((metier) => (
            <a 
              key={metier.slug}
              href={`/${metier.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={metier.image} 
                  alt={metier.nom}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">{metier.nom}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    🎯 Problématique
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  {metier.probleme}
                </p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-blue-600 font-semibold group-hover:text-blue-800 transition">
                    Voir le comparatif
                  </span>
                  <span className="text-blue-600 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Pourquoi nous faire confiance ?</h2>
            <p className="text-xl text-gray-300">Notre méthodologie d'analyse rigoureuse</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Analyses indépendantes</h3>
              <p className="text-gray-300">
                Aucun logiciel ne nous paie pour être mieux classé. Nos avis sont 100% objectifs et basés sur des critères techniques mesurables.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3">500+ avis analysés</h3>
              <p className="text-gray-300">
                Nous lisons systématiquement tous les avis Trustpilot, Google et Capterra pour identifier les vrais points forts et les failles récurrentes.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Mis à jour en 2026</h3>
              <p className="text-gray-300">
                Les fonctionnalités et tarifs évoluent constamment. Nous mettons à jour nos comparatifs chaque mois pour garantir des informations fraîches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">🏗️ BTP-Compare</div>
            <p className="mb-4">Le comparateur n°1 pour les artisans du bâtiment</p>
            <div className="text-sm">
              © 2026 BTP-Compare.fr - Tous droits réservés
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
