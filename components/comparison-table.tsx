'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Minus, Info, ChevronDown, ChevronUp, Users, Calculator } from 'lucide-react';
import { logiciels } from '../data/metiers';

interface CritereComparatif {
  nom: string;
  categorie: 'essentiel' | 'important' | 'confort';
  description: string;
  obat: {
    note: 0 | 1 | 2 | 3 | 4 | 5;
    commentaire?: string;
  };
  axonaut: {
    note: 0 | 1 | 2 | 3 | 4 | 5;
    commentaire?: string;
  };
}

interface Alternative {
  nom: string;
  description: string;
  idealPour: string;
  tarif: string;
  lien: string;
  pointFort: string;
  pointFaible: string;
}

interface ComparisonTableProps {
  criteres: CritereComparatif[];
  alternatives: Alternative[];
  metierNom: string;
}

function NoteDisplay({ note }: { note: number }) {
  if (note === 0) return <X className="w-5 h-5 text-red-500 mx-auto" />;
  if (note === 5) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
  
  const circles = Array.from({ length: 5 }, (_, i) => (
    <div
      key={i}
      className={`w-2 h-2 rounded-full mx-0.5 ${
        i < note ? 'bg-foreground' : 'bg-muted-foreground/30'
      }`}
    />
  ));
  
  return <div className="flex justify-center">{circles}</div>;
}

export function ComparisonTable({ criteres, alternatives, metierNom }: ComparisonTableProps) {
  const [teamSize, setTeamSize] = useState(1);
  const [expandedCriteres, setExpandedCriteres] = useState<number[]>([]);
  const [showAlternatives, setShowAlternatives] = useState(false);

  // Calcul du coût mensuel réel
  const obatPrixBase = 39; // Prix de base estimé
  const axonautPrixBase = 49; // Prix par utilisateur
  
  const obatCoutMensuel = Math.round(obatPrixBase + (teamSize - 1) * 15); // +15€ par utilisateur supp
  const axonautCoutMensuel = axonautPrixBase * teamSize;
  
  const toggleCritere = (index: number) => {
    setExpandedCriteres(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const criteresEssentiels = criteres.filter(c => c.categorie === 'essentiel');
  const criteresImportants = criteres.filter(c => c.categorie === 'important');
  const criteresConfort = criteres.filter(c => c.categorie === 'confort');

  // Calcul du score global
  const scoreObat = Math.round((criteres.reduce((sum, c) => sum + c.obat.note, 0) / (criteres.length * 5)) * 10) / 10;
  const scoreAxonaut = Math.round((criteres.reduce((sum, c) => sum + c.axonaut.note, 0) / (criteres.length * 5)) * 10) / 10;

  return (
    <div className="space-y-8">
      
      {/* ═══════════════════════════════════════════════════
          SÉLECTEUR TAILLE D'ÉQUIPE
      ═══════════════════════════════════════════════════ */}
      <div className="bg-accent rounded-xl p-6 border border-border">
        <div className="flex items-center space-x-3 mb-4">
          <Users className="w-5 h-5 text-foreground" />
          <h3 className="font-semibold text-foreground">Taille de votre équipe</h3>
        </div>
        <div className="flex items-center space-x-3 mb-4">
          <input
            type="range"
            min="1"
            max="15"
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="flex-1 h-2 bg-background rounded-lg appearance-none cursor-pointer accent-foreground"
          />
          <div className="text-2xl font-bold text-foreground w-16 text-center">
            {teamSize}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-background rounded-lg p-4 border-2 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-foreground">🟢 Obat</span>
              <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded">Forfait + utilisateurs</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{obatCoutMensuel}€<span className="text-sm text-muted-foreground font-normal">/mois</span></div>
            <div className="text-xs text-muted-foreground mt-1">
              {teamSize === 1 ? 'Forfait solo' : `${obatPrixBase}€ de base + ${(teamSize - 1) * 15}€ (${teamSize - 1} × 15€)`}
            </div>
          </div>
          
          <div className="bg-background rounded-lg p-4 border-2 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-foreground">🔵 Axonaut</span>
              <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded">Par utilisateur</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{axonautCoutMensuel}€<span className="text-sm text-muted-foreground font-normal">/mois</span></div>
            <div className="text-xs text-muted-foreground mt-1">
              {teamSize} × {axonautPrixBase}€/utilisateur
            </div>
          </div>
        </div>

        {teamSize >= 5 && (
          <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <div className="flex items-start space-x-2">
              <Info className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                <strong>À partir de {teamSize} utilisateurs</strong>, Axonaut devient significativement plus cher. 
                Obat reste plus économique grâce à son modèle forfaitaire.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════
          SCORES GLOBAUX
      ═══════════════════════════════════════════════════ */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className={`rounded-xl p-6 border-2 ${scoreObat >= scoreAxonaut ? 'bg-green-500/5 border-green-500' : 'bg-card border-border'}`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{logiciels.obat.logo}</span>
              <span className="font-bold text-foreground">{logiciels.obat.nom}</span>
            </div>
            {scoreObat > scoreAxonaut && (
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full font-semibold">
                MEILLEUR SCORE
              </span>
            )}
          </div>
          <div className="text-4xl font-bold text-foreground mb-1">{scoreObat}<span className="text-lg text-muted-foreground">/5</span></div>
          <div className="text-sm text-muted-foreground">Score global pour {metierNom.toLowerCase()}s</div>
        </div>

        <div className={`rounded-xl p-6 border-2 ${scoreAxonaut >= scoreObat ? 'bg-blue-500/5 border-blue-500' : 'bg-card border-border'}`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{logiciels.axonaut.logo}</span>
              <span className="font-bold text-foreground">{logiciels.axonaut.nom}</span>
            </div>
            {scoreAxonaut > scoreObat && (
              <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full font-semibold">
                MEILLEUR SCORE
              </span>
            )}
          </div>
          <div className="text-4xl font-bold text-foreground mb-1">{scoreAxonaut}<span className="text-lg text-muted-foreground">/5</span></div>
          <div className="text-sm text-muted-foreground">Score global pour {metierNom.toLowerCase()}s</div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          CRITÈRES ESSENTIELS
      ═══════════════════════════════════════════════════ */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <h3 className="font-bold text-foreground">Critères essentiels</h3>
          <span className="text-xs text-muted-foreground">({criteresEssentiels.length} critères qui font ou défont le choix)</span>
        </div>
        <div className="space-y-2">
          {criteresEssentiels.map((critere, index) => (
            <CritereRow
              key={index}
              critere={critere}
              isExpanded={expandedCriteres.includes(index)}
              onToggle={() => toggleCritere(index)}
            />
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          CRITÈRES IMPORTANTS
      ═══════════════════════════════════════════════════ */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          <h3 className="font-bold text-foreground">Critères importants</h3>
          <span className="text-xs text-muted-foreground">({criteresImportants.length} critères)</span>
        </div>
        <div className="space-y-2">
          {criteresImportants.map((critere, index) => (
            <CritereRow
              key={index + 100}
              critere={critere}
              isExpanded={expandedCriteres.includes(index + 100)}
              onToggle={() => toggleCritere(index + 100)}
            />
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          CRITÈRES DE CONFORT
      ═══════════════════════════════════════════════════ */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <h3 className="font-bold text-foreground">Critères de confort</h3>
          <span className="text-xs text-muted-foreground">({criteresConfort.length} critères)</span>
        </div>
        <div className="space-y-2">
          {criteresConfort.map((critere, index) => (
            <CritereRow
              key={index + 200}
              critere={critere}
              isExpanded={expandedCriteres.includes(index + 200)}
              onToggle={() => toggleCritere(index + 200)}
            />
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          ALTERNATIVES (17 logiciels promis)
      ═══════════════════════════════════════════════════ */}
      <div>
        <button
          onClick={() => setShowAlternatives(!showAlternatives)}
          className="w-full flex items-center justify-between p-4 bg-accent rounded-xl hover:bg-accent/80 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <Calculator className="w-5 h-5 text-foreground" />
            <div className="text-left">
              <div className="font-semibold text-foreground">
                {alternatives.length} autres logiciels testés pour {metierNom.toLowerCase()}s
              </div>
              <div className="text-xs text-muted-foreground">
                Alternatives à considérer selon votre situation
              </div>
            </div>
          </div>
          {showAlternatives ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        <AnimatePresence>
          {showAlternatives && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-3"
            >
              {alternatives.map((alt, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{alt.nom}</h4>
                      <p className="text-sm text-muted-foreground">{alt.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-foreground">{alt.tarif}</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">+</span>
                      <span className="text-muted-foreground"><strong className="text-foreground">Idéal :</strong> {alt.idealPour}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-muted-foreground">{alt.pointFort}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2">−</span>
                      <span className="text-muted-foreground">{alt.pointFaible}</span>
                    </div>
                    <div>
                      <a
                        href={alt.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline hover:no-underline text-xs"
                      >
                        Voir le site →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ═══════════════════════════════════════════════════
          LÉGENDE
      ═══════════════════════════════════════════════════ */}
      <div className="bg-accent rounded-xl p-4 text-xs text-muted-foreground">
        <div className="font-semibold text-foreground mb-2">Comment lire ce tableau :</div>
        <div className="grid md:grid-cols-2 gap-2">
          <div>• <strong>5 points</strong> = Fonctionnalité parfaite pour votre métier</div>
          <div>• <strong>0 point</strong> = Absent ou inadapté</div>
          <div>• Cliquez sur un critère pour voir l'analyse détaillée</div>
          <div>• Les scores sont pondérés par catégorie</div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// SOUS-COMPOSANT : Ligne de critère
// ═══════════════════════════════════════════════════════
function CritereRow({
  critere,
  isExpanded,
  onToggle,
}: {
  critere: CritereComparatif;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-card rounded-xl border border-border overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between hover:bg-accent/50 transition-colors"
      >
        <div className="flex-1 text-left">
          <div className="font-semibold text-foreground mb-1">{critere.nom}</div>
          <div className="text-xs text-muted-foreground">{critere.description}</div>
        </div>
        <div className="flex items-center space-x-6 ml-4">
          <div className="text-center">
            <div className="text-xs text-green-600 mb-1">Obat</div>
            <NoteDisplay note={critere.obat.note} />
          </div>
          <div className="text-center">
            <div className="text-xs text-blue-600 mb-1">Axonaut</div>
            <NoteDisplay note={critere.axonaut.note} />
          </div>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 border-t border-border bg-accent/30">
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-3 bg-green-500/5 rounded-lg border border-green-500/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-green-600 font-semibold">Obat</span>
                    <span className="text-xs text-muted-foreground">Note : {critere.obat.note}/5</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {critere.obat.commentaire || 'Pas de commentaire spécifique pour ce critère.'}
                  </p>
                </div>
                <div className="p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-blue-600 font-semibold">Axonaut</span>
                    <span className="text-xs text-muted-foreground">Note : {critere.axonaut.note}/5</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {critere.axonaut.commentaire || 'Pas de commentaire spécifique pour ce critère.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
