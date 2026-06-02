'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Minus, Info, ChevronDown, ChevronUp, Users, Calculator, ExternalLink } from 'lucide-react';
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
  if (note === 0) return (
    <div className="flex flex-col items-center gap-1">
      <X className="w-4 h-4 text-red-500" />
      <span className="text-[10px] text-red-500 font-semibold">Absent</span>
    </div>
  );
  if (note === 5) return (
    <div className="flex flex-col items-center gap-1">
      <Check className="w-4 h-4 text-green-500" />
      <span className="text-[10px] text-green-500 font-semibold">Excellent</span>
    </div>
  );

  const config: Record<number, { dot: string; label: string; text: string }> = {
    1: { dot: 'bg-red-500',    label: 'Faible',  text: 'text-red-500' },
    2: { dot: 'bg-orange-400', label: 'Moyen',   text: 'text-orange-400' },
    3: { dot: 'bg-yellow-400', label: 'Correct', text: 'text-yellow-500' },
    4: { dot: 'bg-green-500',  label: 'Bon',     text: 'text-green-500' },
  };
  const c = config[note] ?? { dot: 'bg-primary', label: `${note}/5`, text: 'text-primary' };

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i < note ? c.dot : 'bg-foreground/15'}`}
          />
        ))}
      </div>
      <span className={`text-[10px] font-semibold ${c.text}`}>{c.label}</span>
    </div>
  );
}

export function ComparisonTable({ criteres, alternatives, metierNom }: ComparisonTableProps) {
  const [teamSize, setTeamSize] = useState(1);
  // Les 2 premiers critères essentiels sont ouverts par défaut
  const [expandedCriteres, setExpandedCriteres] = useState<number[]>([0, 1]);
  const [showAlternatives, setShowAlternatives] = useState(false);

  const obatPrixBase = 39;
  const axonautPrixBase = 49;
  
  const obatCoutMensuel = Math.round(obatPrixBase + (teamSize - 1) * 15);
  const axonautCoutMensuel = axonautPrixBase * teamSize;
  
  const toggleCritere = (index: number) => {
    setExpandedCriteres(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const criteresEssentiels = criteres.filter(c => c.categorie === 'essentiel');
  const criteresImportants = criteres.filter(c => c.categorie === 'important');
  const criteresConfort = criteres.filter(c => c.categorie === 'confort');

  // Score pondéré : essentiel × 3, important × 2, confort × 1
  const weight = (c: CritereComparatif) => c.categorie === 'essentiel' ? 3 : c.categorie === 'important' ? 2 : 1;
  const totalWeight = criteres.reduce((sum, c) => sum + weight(c), 0);
  const scoreObat = totalWeight > 0
    ? Math.round((criteres.reduce((sum, c) => sum + c.obat.note * weight(c), 0) / (totalWeight * 5)) * 50) / 10
    : 0;
  const scoreAxonaut = totalWeight > 0
    ? Math.round((criteres.reduce((sum, c) => sum + c.axonaut.note * weight(c), 0) / (totalWeight * 5)) * 50) / 10
    : 0;

  return (
    <div className="space-y-8">
      
      {/* SÉLECTEUR TAILLE D'ÉQUIPE */}
      <div className="card-base p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Users className="w-5 h-5 text-primary" />
          <h3 className="heading-editorial text-2xl">Taille de votre équipe</h3>
        </div>
        <div className="flex items-center space-x-3 mb-6">
          <input
            type="range"
            min="1"
            max="15"
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="flex-1 h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="stat-number text-4xl w-16 text-center">{teamSize}</div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card-base p-5 border-2 border-success">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{logiciels.obat.logo}</span>
                <span className="font-semibold text-foreground">{logiciels.obat.nom}</span>
              </div>
              <span className="pill badge-excellent text-xs">Forfait + utilisateurs</span>
            </div>
            <div className="stat-number text-3xl mb-1">{obatCoutMensuel}€<span className="text-base text-muted-foreground font-sans">/mois</span></div>
            <div className="text-xs text-muted-foreground mt-2">
              {teamSize === 1 ? 'Forfait solo' : `${obatPrixBase}€ de base + ${(teamSize - 1) * 15}€ (${teamSize - 1} × 15€)`}
            </div>
            <div className="text-xs text-muted-foreground/60 mt-1">
              Tarif estimé — <a href="https://obat.com/tarifs" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground">vérifier sur obat.com</a>
            </div>
          </div>
          
          <div className="card-base p-5 border-2 border-primary">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{logiciels.axonaut.logo}</span>
                <span className="font-semibold text-foreground">{logiciels.axonaut.nom}</span>
              </div>
              <span className="pill badge-bon text-xs">Par utilisateur</span>
            </div>
            <div className="stat-number text-3xl mb-1">{axonautCoutMensuel}€<span className="text-base text-muted-foreground font-sans">/mois</span></div>
            <div className="text-xs text-muted-foreground mt-2">
              {teamSize} × {axonautPrixBase}€/utilisateur
            </div>
            <div className="text-xs text-muted-foreground/60 mt-1">
              Tarif estimé — <a href="https://axonaut.com/tarifs" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground">vérifier sur axonaut.com</a>
            </div>
          </div>
        </div>

        {teamSize >= 5 && (
          <div className="mt-6 disclosure-banner">
            <div className="dot"></div>
            <p>
              <strong>À partir de {teamSize} utilisateurs</strong>, Axonaut devient significativement plus cher. 
              Obat reste plus économique grâce à son modèle forfaitaire.
            </p>
          </div>
        )}
      </div>

      {/* SCORES GLOBAUX */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className={`card-base p-6 ${scoreObat >= scoreAxonaut ? 'border-2 border-success' : ''}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">{logiciels.obat.logo}</span>
              <span className="heading-editorial text-2xl">{logiciels.obat.nom}</span>
            </div>
            {scoreObat > scoreAxonaut && (
              <span className="pill badge-excellent">MEILLEUR SCORE</span>
            )}
          </div>
          <div className="stat-number text-5xl mb-1">{scoreObat}<span className="text-xl text-muted-foreground font-sans">/5</span></div>
          <div className="text-sm text-muted-foreground">Score global pour {metierNom.toLowerCase()}s</div>
        </div>

        <div className={`card-base p-6 ${scoreAxonaut >= scoreObat ? 'border-2 border-primary' : ''}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">{logiciels.axonaut.logo}</span>
              <span className="heading-editorial text-2xl">{logiciels.axonaut.nom}</span>
            </div>
            {scoreAxonaut > scoreObat && (
              <span className="pill badge-bon">MEILLEUR SCORE</span>
            )}
          </div>
          <div className="stat-number text-5xl mb-1">{scoreAxonaut}<span className="text-xl text-muted-foreground font-sans">/5</span></div>
          <div className="text-sm text-muted-foreground">Score global pour {metierNom.toLowerCase()}s</div>
        </div>
      </div>

      {/* CRITÈRES ESSENTIELS */}
      <div>
        <div className="divider-label mb-6">
          <span>Critères essentiels</span>
        </div>
        <div className="space-y-3">
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

      {/* CRITÈRES IMPORTANTS */}
      <div>
        <div className="divider-label mb-6">
          <span>Critères importants</span>
        </div>
        <div className="space-y-3">
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

      {/* CRITÈRES DE CONFORT */}
      <div>
        <div className="divider-label mb-6">
          <span>Critères de confort</span>
        </div>
        <div className="space-y-3">
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

      {/* ALTERNATIVES */}
      <div>
        <button
          onClick={() => setShowAlternatives(!showAlternatives)}
          className="w-full card-base p-5 hover:border-primary transition-smooth"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Calculator className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="heading-editorial text-xl">
                  {alternatives.length} autres logiciels testés
                </div>
                <div className="text-sm text-muted-foreground">
                  Alternatives à considérer selon votre situation
                </div>
              </div>
            </div>
            {showAlternatives ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
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
                <div key={i} className="card-base p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="heading-editorial text-2xl mb-2">{alt.nom}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{alt.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-sm font-semibold text-foreground">{alt.tarif}</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Idéal :</strong> {alt.idealPour}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{alt.pointFort}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{alt.pointFaible}</span>
                    </div>
                    <div>
                      <a
                        href={alt.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline text-sm font-medium"
                      >
                        Voir le site <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* LÉGENDE */}
      <div className="card-base p-5 text-sm text-muted-foreground">
        <div className="font-semibold text-foreground mb-3">Comment lire ce tableau :</div>
        <div className="grid md:grid-cols-2 gap-2">
          <div>• <strong>5 barres vertes</strong> = Fonctionnalité parfaite</div>
          <div>• <strong>✗ rouge</strong> = Absent ou inadapté</div>
          <div>• Cliquez sur un critère pour voir l'analyse détaillée</div>
          <div>• Score pondéré : Essentiel × 3, Important × 2, Confort × 1</div>
        </div>
      </div>
    </div>
  );
}

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
      className="card-base overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-5 flex items-center justify-between hover:bg-accent/50 transition-smooth"
      >
        <div className="flex-1 text-left">
          <div className="flex items-center space-x-2 mb-1">
            <span className={`pill text-xs ${
              critere.categorie === 'essentiel' ? 'badge-limite' :
              critere.categorie === 'important' ? 'badge-moyen' :
              'bg-secondary text-muted-foreground'
            }`}>
              {critere.categorie === 'essentiel' ? 'ESSENTIEL' : 
               critere.categorie === 'important' ? 'IMPORTANT' : 'CONFORT'}
            </span>
          </div>
          <div className="font-semibold text-foreground mb-1">{critere.nom}</div>
          <div className="text-xs text-muted-foreground">{critere.description}</div>
        </div>
        <div className="flex items-center space-x-6 ml-4">
          <div className="text-center">
            <div className="text-xs text-success mb-1 font-semibold">Obat</div>
            <NoteDisplay note={critere.obat.note} />
          </div>
          <div className="text-center">
            <div className="text-xs text-primary mb-1 font-semibold">Axonaut</div>
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
            <div className="p-5 pt-0 border-t border-border bg-accent/30">
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="card-base p-4 bg-success-bg border-success/20">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-success font-semibold">{logiciels.obat.nom}</span>
                    <span className="text-xs text-muted-foreground">Note : {critere.obat.note}/5</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {critere.obat.commentaire || 'Pas de commentaire spécifique pour ce critère.'}
                  </p>
                </div>
                <div className="card-base p-4 bg-primary-muted border-primary/20">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-primary font-semibold">{logiciels.axonaut.nom}</span>
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
