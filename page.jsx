// page.jsx - Template de page BTP Compare
export default function ComparateurLogiciel() {
  // Ces données viendront de notre base de données plus tard
  const heroSoftware = {
    name: "Obat",
    score: 9.2,
    targetAudience: "Plombiers et électriciens",
    keyFeature: "Bibliothèque de prix Batichiffrage intégrée",
    pricing: "Sur devis",
    demoCPL: 40,
    conversionCPA: 200,
    affiliateLink: "https://obat.com/?ref=btp_compare",
    painPoint: "Pas de mode hors-ligne sur chantiers sans réseau"
  };

  const challenger = {
    name: "Axonaut",
    score: 9.5,
    targetAudience: "PME en croissance",
    keyFeature: "CRM + Gestion complète",
    pricing: "À partir de 49€/mois",
    conversionCPA: 300,
    affiliateLink: "https://axonaut.com/?ref=btp_compare"
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      {/* HEADER */}
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '48px', color: '#1e40af', marginBottom: '20px' }}>
          Quel logiciel de devis pour {heroSoftware.targetAudience} en 2026 ?
        </h1>
        <p style={{ fontSize: '20px', color: '#6b7280' }}>
          Notre algorithme a analysé +500 avis d'artisans. Voici le verdict sans filtre.
        </p>
      </header>

      {/* HERO PRODUCT - LE GAGNANT */}
      <div style={{ 
        background: '#10b981', 
        padding: '40px', 
        borderRadius: '16px', 
        marginBottom: '30px',
        boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '36px', color: 'white', margin: 0 }}>
            🏆 Le Choix n°1 : {heroSoftware.name}
          </h2>
          <span style={{ fontSize: '24px', color: 'white', fontWeight: 'bold' }}>
            {heroSoftware.score}/10
          </span>
        </div>
        <p style={{ fontSize: '18px', color: 'white', marginBottom: '20px' }}>
          <strong>Pourquoi on le recommande :</strong> {heroSoftware.keyFeature}
        </p>
        <a 
          href={heroSoftware.affiliateLink}
          style={{
            display: 'block',
            textAlign: 'center',
            background: 'white',
            color: '#10b981',
            padding: '20px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '20px'
          }}
        >
          Demander ma démo gratuite
        </a>
      </div>

      {/* CHALLENGER */}
      <div style={{ 
        background: '#3b82f6', 
        padding: '40px', 
        borderRadius: '16px', 
        marginBottom: '30px',
        boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
      }}>
        <h2 style={{ fontSize: '28px', color: 'white', marginBottom: '20px' }}>
          L'alternative pour les équipes : {challenger.name}
        </h2>
        <p style={{ fontSize: '16px', color: 'white', marginBottom: '20px' }}>
          <strong>Idéal pour :</strong> {challenger.targetAudience}
        </p>
        <a 
          href={challenger.affiliateLink}
          style={{
            display: 'block',
            textAlign: 'center',
            background: 'white',
            color: '#3b82f6',
            padding: '15px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          Essayer {challenger.name}
        </a>
      </div>

      {/* CROSS-SELL BANCAIRE */}
      <div style={{ 
        background: '#fbbf24', 
        padding: '30px', 
        borderRadius: '16px',
        border: '3px solid #f59e0b'
      }}>
        <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#78350f' }}>
          💳 Ne bloquez pas vos encaissements !
        </h3>
        <p style={{ fontSize: '16px', color: '#78350f', marginBottom: '20px' }}>
          {heroSoftware.name} se synchronise parfaitement avec <strong>Qonto</strong> pour automatiser votre rapprochement bancaire.
        </p>
        <a 
          href="https://qonto.com/?ref=btp_compare"
          style={{
            display: 'inline-block',
            background: '#78350f',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Ouvrir mon compte Qonto
        </a>
      </div>

      {/* PAIN POINT - CRÉDIBILITÉ */}
      <div style={{ 
        background: '#fee2e2', 
        padding: '20px', 
        borderRadius: '12px', 
        marginTop: '30px',
        borderLeft: '4px solid #dc2626'
      }}>
        <h3 style={{ fontSize: '18px', color: '#dc2626', marginBottom: '10px' }}>
          ⚠️ Le point noir à connaître
        </h3>
        <p style={{ color: '#7f1d1d', margin: 0 }}>
          <strong>Attention :</strong> {heroSoftware.painPoint}
        </p>
      </div>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', marginTop: '60px', color: '#9ca3af', fontSize: '14px' }}>
        <p>© 2026 BTP Compare - Comparateur indépendant pour artisans du bâtiment</p>
      </footer>
    </div>
  );
}
