import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { ServiceCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface LogoShowcaseProps {
  onSelectServiceOrder: (serviceCategory: ServiceCategory) => void;
}

export const LogoShowcase: React.FC<LogoShowcaseProps> = ({ onSelectServiceOrder }) => {
  const { t } = useLanguage();

  const logoStyles = t.logoShowcase.styles || [
    { title: 'Minimaliste & Épuré', desc: 'Symboles géométriques simples pour marques haut de gamme' },
    { title: 'Cyber & Néon', desc: 'Identités futuristes à fort impact visuel lumineux' },
    { title: 'Monogramme & Luxe', desc: 'Sceau d\'excellence pour marques de mode, hôtel & produits' },
    { title: 'Typographique Vectoriel', desc: 'Lettrages sur-mesure dessinés à la main' }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-b border-purple-900/30">
      {/* Background Graphic Image with Ambient Lighting */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={IMAGES.logoBg}
          alt="Logo Showcase Ambient Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 text-left"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-bold mb-4">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>{t.logoShowcase.badge}</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight uppercase">
              {t.logoShowcase.title}
            </h2>

            <p className="text-gray-300 text-lg sm:text-xl font-light mt-4 mb-8">
              {t.logoShowcase.subtitle}
            </p>

            <div className="space-y-4 mb-8">
              {logoStyles.map((item: any, index: number) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-xl bg-purple-950/40 border border-purple-900/30">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onSelectServiceOrder('Identité visuelle')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-extrabold text-base shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center space-x-3"
            >
              <span>{t.logoShowcase.cta}</span>
              <ArrowRight className="w-5 h-5 text-purple-200" />
            </button>
          </motion.div>

          {/* Right Logo Grid Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            {[
              { name: 'VIRAQ LABS', tag: 'Vector Monogram', color: 'from-purple-900/80 to-black' },
              { name: 'CYBER VIBE', tag: 'Neon Electric 3D', color: 'from-indigo-950/80 to-black' },
              { name: 'BLACKSTORM', tag: 'Minimal Emblem', color: 'from-purple-950/80 to-black' },
              { name: 'AURA LUXURY', tag: 'Gold & Obsidian', color: 'from-purple-900/80 to-black' }
            ].map((logo, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl bg-gradient-to-br ${logo.color} border border-purple-500/30 flex flex-col items-center justify-center text-center group hover:border-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all`}
              >
                <div className="w-16 h-16 rounded-2xl bg-black/80 border border-purple-500/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="font-black text-2xl text-purple-300 group-hover:text-purple-200">
                    {logo.name.charAt(0)}
                  </span>
                </div>
                <p className="font-extrabold text-lg text-white tracking-wider group-hover:text-purple-300">
                  {logo.name}
                </p>
                <p className="text-[11px] font-semibold text-purple-400 mt-1 uppercase tracking-widest">
                  {logo.tag}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
