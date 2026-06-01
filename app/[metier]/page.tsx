// app/[metier]/page.tsx
import { metiers, logiciels } from '../../data/metiers';

export async function generateStaticParams() {
  return metiers.map((metier) => ({ metier: metier.slug }));
}

export default function MetierPage({ params }: { params: { metier: string } }) {
  const data = metiers.find(m => m.slug === params.metier);
  
  if (!data) return <div>Métier non trouvé</div>;

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: '#1f2937', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      
      {/* HEADER / NAVIGATION */}
      <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', padding: '20px 0', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e40af' }}>🏗️ BTP-Compare</div>
          <nav>
            <a href="/" style={{ color: '#4b5563', textDecoration: 'none', marginRight: '20px' }}>Accueil</a>
            <a href="/plombier" style={{ color: '#4b5563', textDecoration: 'none', marginRight: '20px' }}>Plombiers</a>
            <a href="/electricien" style={{ color: '#4b5563', textDecoration: 'none', marginRight: '20px' }}>Électriciens</a>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* HERO SECTION */}
        <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', marginBottom: '40px', height: '400px' }}>
          <img src={data.image} alt={data.nom} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', padding: '40px', color: 'white' }}>
            <h1 style={{ fontSize: '42px', margin: 0, marginBottom: '10px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Quel logiciel de devis pour {data.nom} en 2026 ?
            </h1>
            <p style={{ fontSize: '18px', opacity: 0.9 }}>Analyse indépendante • Mis à jour en Juin 2026</p>
          </div>
        </div>

        {/* INTRODUCTION EDITORIALE */}
        <section style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '24px', color: '#1e40af', marginBottom: '20px' }}>Le défi administratif des {data.nom}s</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151', marginBottom: '20px' }}>
            {data.intro}
          </p>
          <div style={{ backgroundColor: '#eff6ff', borderLeft: '4px solid #3b82f6', padding: '15px', borderRadius: '8px' }}>
            <strong>Problématique majeure identifiée :</strong> {data.probleme}
          </div>
        </section>

        {/* VERDICT RAPIDE */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
          {/* OBAT */}
          <div style={{ backgroundColor: '#10b981', color: 'white', padding: '30px', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>🏆</div>
            <h3 style={{ margin: 0, marginBottom: '10px', fontSize: '24px' }}>Le Choix n°1 : {logiciels.obat.nom}</h3>
            <p style={{ opacity: 0.9, flex: 1 }}>{data.verdict_obat}</p>
            <a href={logiciels.obat.lien} style={{ display: 'block', textAlign: 'center', backgroundColor: 'white', color: '#10b981', padding: '15px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', marginTop: '20px' }}>
              Voir l'offre {logiciels.obat.nom}
            </a>
          </div>
          
          {/* AXONAUT */}
          <div style={{ backgroundColor: '#3b82f6', color: 'white', padding: '30px', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>🥈</div>
            <h3 style={{ margin: 0, marginBottom: '10px', fontSize: '24px' }}>Le Challenger : {logiciels.axonaut.nom}</h3>
            <p style={{ opacity: 0.9, flex: 1 }}>{data.verdict_axonaut}</p>
            <a href={logiciels.axonaut.lien} style={{ display: 'block', textAlign: 'center', backgroundColor: 'white', color: '#3b82f6', padding: '15px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', marginTop: '20px' }}>
              Voir l'offre {logiciels.axonaut.nom}
            </a>
          </div>
        </section>

        {/* TABLEAU COMPARATIF (Le Saint Graal du SEO) */}
        <section style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', marginBottom: '40px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '24px', color: '#1e40af', marginBottom: '20px' }}>Comparatif technique détaillé</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '15px' }}>Critère</th>
                <th style={{ padding: '15px' }}>🟢 {logiciels.obat.nom}</th>
                <th style={{ padding: '15px' }}>🔵 {logiciels.axonaut.nom}</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '15px', fontWeight: 'bold' }}>Idéal pour</td>
                <td style={{ padding: '15px' }}>Artisans seuls ou petites équipes</td>
                <td style={{ padding: '15px' }}>PME en croissance avec salariés</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '15px', fontWeight: 'bold' }}>Point fort</td>
                <td style={{ padding: '15px' }}>{logiciels.obat.point_fort}</td>
                <td style={{ padding: '15px' }}>{logiciels.axonaut.point_fort}</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '15px', fontWeight: 'bold' }}>Point faible</td>
                <td style={{ padding: '15px', color: '#dc2626' }}>{logiciels.obat.point_faible}</td>
                <td style={{ padding: '15px', color: '#dc2626' }}>{logiciels.axonaut.point_faible}</td>
              </tr>
              <tr>
                <td style={{ padding: '15px', fontWeight: 'bold' }}>Note globale</td>
                <td style={{ padding: '15px' }}>{logiciels.obat.note}</td>
                <td style={{ padding: '15px' }}>{logiciels.axonaut.note}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* CROSS-SELL BANQUE */}
        <section style={{ backgroundColor: '#fffbeb', border: '2px solid #fbbf24', padding: '30px', borderRadius: '12px', marginBottom: '40px' }}>
          <h2 style={{ color: '#92400e', marginTop: 0 }}>💳 N'oubliez pas votre compte pro</h2>
          <p style={{ color: '#78350f', fontSize: '16px' }}>
            Pour automatiser votre comptabilité avec {logiciels.obat.nom} ou {logiciels.axonaut.nom}, nous recommandons <strong>Qonto</strong>. La synchronisation bancaire se fait en 1 clic, fini la saisie manuelle le dimanche soir.
          </p>
          <a href="https://qonto.com/?ref=btp_compare" style={{ display: 'inline-block', backgroundColor: '#78350f', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', marginTop: '10px' }}>
            Découvrir Qonto
          </a>
        </section>

      </main>

      <footer style={{ backgroundColor: '#1f2937', color: '#9ca3af', padding: '40px 20px', textAlign: 'center' }}>
        <p>© 2026 BTP-Compare.fr - Le comparateur n°1 pour les artisans du bâtiment</p>
      </footer>

    </div>
  );
}
