// app/page.tsx - Page d'accueil
import { metiers } from '../data/metiers';

export default function HomePage() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: '#1f2937', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', padding: '20px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e40af' }}>🏗️ BTP-Compare</div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', margin: 0, marginBottom: '20px' }}>
          Quel logiciel de devis pour votre métier ?
        </h1>
        <p style={{ fontSize: '20px', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
          Analyses indépendantes et comparatifs détaillés pour les artisans du bâtiment. 
          Plus de 500 avis testés et vérifiés pour chaque métier.
        </p>
      </section>

      {/* LISTE DES MÉTIERS */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ fontSize: '32px', color: '#1e40af', marginBottom: '40px', textAlign: 'center' }}>
          Choisissez votre métier
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {metiers.map((metier) => (
            <a 
              key={metier.slug}
              href={`/${metier.slug}`}
              style={{ 
                textDecoration: 'none',
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
                display: 'block'
              }}
            >
              <img 
                src={metier.image} 
                alt={metier.nom}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '24px', color: '#1e40af', margin: 0, marginBottom: '12px' }}>
                  {metier.nom}
                </h3>
                <p style={{ color: '#6b7280', margin: 0, fontSize: '14px' }}>
                  {metier.probleme}
                </p>
                <div style={{ marginTop: '20px', color: '#3b82f6', fontWeight: 'bold' }}>
                  Voir le comparatif →
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* SECTION CONFIANCE */}
      <section style={{ backgroundColor: 'white', padding: '60px 20px', marginTop: '60px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', color: '#1e40af', marginBottom: '20px' }}>Pourquoi nous faire confiance ?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '40px' }}>
            <div>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>📊</div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Analyses indépendantes</h3>
              <p style={{ color: '#6b7280' }}>Aucun logiciel ne nous paie pour être mieux classé. Nos avis sont 100% objectifs.</p>
            </div>
            <div>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🔍</div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>500+ avis analysés</h3>
              <p style={{ color: '#6b7280' }}>Nous lisons tous les avis Trustpilot et Google pour identifier les vrais points forts et faibles.</p>
            </div>
            <div>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>⚡</div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Mis à jour en 2026</h3>
              <p style={{ color: '#6b7280' }}>Les fonctionnalités et tarifs évoluent. Nous mettons à jour nos comparatifs chaque mois.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#1f2937', color: '#9ca3af', padding: '40px 20px', textAlign: 'center' }}>
        <p>© 2026 BTP-Compare.fr - Le comparateur n°1 pour les artisans du bâtiment</p>
      </footer>
    </div>
  );
}
