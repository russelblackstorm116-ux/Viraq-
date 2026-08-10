import React from 'react';
import { motion } from 'motion/react';
import { Music, Mic, Disc, Image, Smartphone, Film, ArrowRight } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { ServiceCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ArtistSectionProps {
  onSelectServiceOrder: (serviceCategory: ServiceCategory) => void;
}

export const ArtistSection: React.FC<ArtistSectionProps> = ({ onSelectServiceOrder }) => {
  const { t } = useLanguage();

  const artistOfferings = [
    { icon: <Music className="w-6 h-6 text-purple-400" />, title: '🎵 Lyrics & Songwriting', desc: 'Création et structuration de paroles captivantes et percutantes.' },
    { icon: <Disc className="w-6 h-6 text-purple-400" />, title: '🎨 Cover Art Single / Album', desc: 'Pochettes haute définition pour Spotify, Apple Music & Vinyles.' },
    { icon: <Image className="w-6 h-6 text-purple-400" />, title: '🖼️ Posters & Affiches', desc: 'Visuels de concert, tournées et sorties de singles.' },
    { icon: <Smartphone className="w-6 h-6 text-purple-400" />, title: '📱 Social Media Visuals', desc: 'Templates Instagram, Teasers Canvas Spotify animés & Bannières.' },
    { icon: <Film className="w-6 h-6 text-purple-400" />, title: '🎬 Music Videos & Lyric Videos', desc: 'Clip vidéo officiel et vidéo de paroles animée 2D/3D.' }
  ];

  return (
    <section id="artists" className="relative py-24 bg-black overflow-hidden border-t border-purple-900/30">
      {/* Background Image of Music Studio / Artist */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.musicBg}
          alt="Artist Music Studio Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-purple-500/40 p-2 bg-gradient-to-br from-purple-900/40 via-purple-950/80 to-black shadow-[0_0_50px_rgba(139,92,246,0.4)]">
              <img
                src={IMAGES.artistsBg}
                alt="Music Studio VIRAQ"
                referrerPolicy="no-referrer"
                className="w-full h-96 sm:h-[480px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-purple-500/30 flex items-center space-x-3">
                <div className="p-3 rounded-full bg-purple-600 text-white shrink-0">
                  <Mic className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">VIRAQ MUSIC HUB</h4>
                  <p className="text-xs text-purple-300">Donnez une dimension pro à vos sorties musicales</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Text & List Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-left"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-bold mb-4">
              <Music className="w-4 h-4 text-purple-400" />
              <span>{t.artistSection.badge}</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              {t.artistSection.title}
            </h2>

            <p className="text-gray-300 text-base sm:text-lg font-light mt-3 mb-8">
              {t.artistSection.subtitle}
            </p>

            <div className="space-y-4 mb-8">
              {artistOfferings.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#12121c] border border-purple-900/30 hover:border-purple-500/50 flex items-start space-x-4 transition-all group">
                  <div className="p-2.5 rounded-xl bg-purple-950 border border-purple-800/40 shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onSelectServiceOrder('Lyrics')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-extrabold text-base shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center space-x-3"
            >
              <span>Parlons de votre projet</span>
              <ArrowRight className="w-5 h-5 text-purple-200" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
