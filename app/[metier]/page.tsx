import { metiers, logiciels } from '../../data/metiers';

export async function generateStaticParams() {
  return metiers.map((metier) => ({ metier: metier.slug }));
}

export default function MetierPage({ params }: { params: { metier: string } }) {
  const data = metiers.find(m => m.slug === params.metier);
  
  if (!data) return <div>Métier non trouvé</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-2xl font-bold text-blue-900">🏗️ BTP-Compare</a>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-900 font-medium transition">Accueil</a>
              <a href="/plombier" className="text-gray-700 hover:text-blue-900 font-medium transition">Plombiers</a>
              <a href="/electricien" className="text-gray-700 hover:text-blue-900 font-medium transition">Électriciens</a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className="relative h-96 overflow-hidden">
        <img src={data.image} alt={data.nom} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold mb-4">
              📊 Comparatif {new Date().getFullYear()}
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Quel logiciel de devis pour {data.nom} ?
            </h1>
            <p className="text-xl text-gray-200">Analyse indépendante • Mis à jour en Juin 2026</p>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* INTRODUCTION */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Le défi administratif des {data.nom}s
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {data.intro}
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🎯</div>
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Problématique majeure identifiée</h3>
                <p className="text-blue-800">{data.probleme}</p>
              </div>
            </div>
          </div>
        </section>

        {/* VERDICT RAPIDE */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre verdict</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* OBAT - WINNER */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-green-900 px-3 py-1 rounded-full text-xs font-bold">
                🏆 CHOIX N°1
              </div>
              <div className="text-4xl mb-4">{logiciels.obat.logo}</div>
              <h3 className="text-2xl font-bold mb-3">{logiciels.obat.nom}</h3>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-lg mr-2">★</span>
                <span className="font-bold">{logiciels.obat.note}</span>
              </div>
              <p className="text-green-50 mb-6 leading-relaxed">{data.verdict_obat}</p>
              <a href={logiciels.obat.lien} className="block w-full bg-white text-green-600 text-center py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                Voir l'offre {logiciels.obat.nom}
              </a>
            </div>

            {/* AXONAUT - CHALLENGER */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gray-300 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                🥈 CHALLENGER
              </div>
              <div className="text-4xl mb-4">{logiciels.axonaut.logo}</div>
              <h3 className="text-2xl font-bold mb-3">{logiciels.axonaut.nom}</h3>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-lg mr-2">★</span>
                <span className="font-bold">{logiciels.axonaut.note}</span>
              </div>
              <p className="text-blue-50 mb-6 leading-relaxed">{data.verdict_axonaut}</p>
              <a href={logiciels.axonaut.lien} className="block w-full bg-white text-blue-600 text-center py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                Voir l'offre {logiciels.axonaut.nom}
              </a>
            </div>
          </div>
        </section>

        {/* TABLEAU COMPARATIF */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comparatif technique détaillé</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Critère</th>
                  <th className="text-left py-4 px-4 font-bold text-green-600">{logiciels.obat.logo} {logiciels.obat.nom}</th>
                  <th className="text-left py-4 px-4 font-bold text-blue-600">{logiciels.axonaut.logo} {logiciels.axonaut.nom}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-semibold text-gray-900">Idéal pour</td>
                  <td className="py-4 px-4 text-gray-700">Artisans seuls ou petites équipes</td>
                  <td className="py-4 px-4 text-gray-700">PME en croissance avec salariés</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-4 font-semibold text-gray-900">Point fort</td>
                  <td className="py-4 px-4 text-green-700">{logiciels.obat.point_fort}</td>
                  <td className="py-4 px-4 text-blue-700">{logiciels.axonaut.point_fort}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-semibold text-gray-900">Point faible</td>
                  <td className="py-4 px-4 text-red-600">{logiciels.obat.point_faible}</td>
                  <td className="py-4 px-4 text-red-600">{logiciels.axonaut.point_faible}</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-gray-900">Note globale</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★★★★★</span>
                      <span className="font-bold">{logiciels.obat.note}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★★★★★</span>
                      <span className="font-bold">{logiciels.axonaut.note}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CRITÈRES SPÉCIFIQUES */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Critères essentiels pour les {data.nom}s</h2>
          <div className="space-y-4">
            {data.criteres.map((critere, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{critere}</h3>
                  <p className="text-gray-600">Critère évalué dans notre analyse comparative</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CROSS-SELL BANQUE */}
        <section className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-xl p-8 mb-8">
          <div className="flex items-start">
            <div className="text-5xl mr-6">💳</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">N'oubliez pas votre compte pro</h2>
              <p className="text-gray-800 mb-4 leading-relaxed">
                Pour automatiser votre comptabilité avec {logiciels.obat.nom} ou {logiciels.axonaut.nom}, nous recommandons <strong>Qonto</strong>. 
                La synchronisation bancaire se fait en 1 clic, fini la saisie manuelle le dimanche soir.
              </p>
              <a href="https://qonto.com/?ref=btp_compare" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition">
                Découvrir Qonto →
              </a>
            </div>
          </div>
        </section>

        {/* RETour */}
        <div className="text-center">
          <a href="/" className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition">
            ← Voir tous les métiers
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold text-white mb-4">🏗️ BTP-Compare</div>
          <p className="mb-4">Le comparateur n°1 pour les artisans du bâtiment</p>
          <div className="text-sm">© 2026 BTP-Compare.fr - Tous droits réservés</div>
        </div>
      </footer>
    </div>
  );
}
