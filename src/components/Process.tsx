import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Lightbulb, RefreshCw, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      title: 'Vous nous expliquez votre idée',
      description: 'Remplissez notre formulaire rapide ou contactez-nous directement sur WhatsApp pour nous détailler votre vision, vos objectifs et vos préférences.',
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />
    },
    {
      number: '02',
      title: 'Nous créons le concept',
      description: 'Nos créatifs conçoivent des propositions de grande qualité (maquettes de logos, visuels, premiers montages vidéo ou rédaction de lyrics).',
      icon: <Lightbulb className="w-6 h-6 text-purple-400" />
    },
    {
      number: '03',
      title: 'Vous donnez vos retours',
      description: 'Nous affinons le travail selon vos remarques. Nous faisons les ajustements nécessaires jusqu’à ce que le résultat dépasse vos attentes.',
      icon: <RefreshCw className="w-6 h-6 text-purple-400" />
    },
    {
      number: '04',
      title: 'Nous livrons votre projet',
      description: 'Réception de vos fichiers HD/4K finaux complets prêts à être exploités (Vectoriels SVG/EPS, Vidéos MP4 4K, PDF HD, etc.).',
      icon: <CheckCircle2 className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#090910] relative overflow-hidden border-t border-purple-900/30">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-purple-950/80 text-purple-300 border border-purple-800/40 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            {t.process.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-4 tracking-tight uppercase">
            {t.process.title}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg mt-3">
            {t.process.subtitle}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left relative">
          {/* Connector Line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-600 -translate-y-12 z-0 opacity-30" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative z-10 p-6 rounded-2xl bg-[#101018] border border-purple-900/40 hover:border-purple-500/60 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-purple-950 border border-purple-800/50 shadow-[0_0_15px_rgba(139,92,246,0.4)] group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black text-purple-500/40 font-mono group-hover:text-purple-400 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-950/60 flex items-center justify-between text-[11px] text-purple-400 font-semibold">
                <span>Étape {step.number}</span>
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
