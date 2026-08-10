import React from 'react';
import { motion } from 'motion/react';
import { Film, Play, Scissors, Sparkles, Layers, Volume2, ArrowRight } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { ServiceCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface VideoSectionProps {
  onSelectServiceOrder: (serviceCategory: ServiceCategory) => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onSelectServiceOrder }) => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 bg-[#090910] overflow-hidden">
      {/* Background Video Editing Workspace Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.videoBg}
          alt="Video Editing Workspace"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-[#090910]/80 to-black/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-bold mb-4"
        >
          <Film className="w-4 h-4 text-purple-400" />
          <span>{t.videoSection.badge}</span>
        </motion.div>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight"
        >
          {t.videoSection.title}
        </motion.h2>

        <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg mt-4 mb-12 font-light">
          {t.videoSection.subtitle}
        </p>

        {/* Interactive Editing Workstation Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden bg-black/80 border border-purple-500/40 p-4 sm:p-6 shadow-[0_0_50px_rgba(139,92,246,0.3)] text-left mb-12"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-purple-900/40 mb-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs font-mono text-purple-300 ml-2">VIRAQ_Timeline_Edit_4K60.project</span>
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-400 border border-purple-800">
              PRORES 422 HQ
            </span>
          </div>

          {/* Timeline & Screen Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Main Video Monitor */}
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden bg-purple-950/40 border border-purple-800/40 aspect-video flex items-center justify-center group">
              <img
                src={IMAGES.videoBg}
                alt="Video Edit Monitor"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
              <div className="w-16 h-16 rounded-full bg-purple-600/90 border-2 border-white/80 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.8)] cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-7 h-7 text-white fill-current ml-1" />
              </div>

              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/80 text-[11px] font-mono text-purple-300 border border-purple-500/30">
                00:02:45:12 / 00:05:00:00
              </div>
            </div>

            {/* Sidebar Tools */}
            <div className="space-y-3 flex flex-col justify-between">
              <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-900/40 flex items-center space-x-3">
                <Scissors className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white">Coupes & Rythme</h4>
                  <p className="text-[11px] text-gray-400">Rétention maximale</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-900/40 flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white">Étalonnage Cinema</h4>
                  <p className="text-[11px] text-gray-400">Color grading professionnel</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-900/40 flex items-center space-x-3">
                <Volume2 className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white">Sound Design FX</h4>
                  <p className="text-[11px] text-gray-400">Audio immersif & SFX</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-900/40 flex items-center space-x-3">
                <Layers className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white">Sous-titres Animés</h4>
                  <p className="text-[11px] text-gray-400">Style dynamique viral</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Tracks */}
          <div className="p-3 rounded-xl bg-black/90 border border-purple-900/50 space-y-2 font-mono text-[10px]">
            <div className="flex items-center space-x-2">
              <span className="text-purple-400 w-8 font-bold">V1:</span>
              <div className="flex-1 h-4 rounded bg-purple-900/80 border border-purple-500/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 opacity-80" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple-400 w-8 font-bold">A1:</span>
              <div className="flex-1 h-3 rounded bg-purple-950 border border-purple-800/40 relative">
                <div className="w-3/4 h-full bg-purple-500/40 rounded" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Button */}
        <button
          onClick={() => onSelectServiceOrder('Montage vidéo')}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-extrabold text-base shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] hover:scale-105 active:scale-95 transition-all inline-flex items-center space-x-3"
        >
          <span>Demander un montage</span>
          <ArrowRight className="w-5 h-5 text-purple-200" />
        </button>
      </div>
    </section>
  );
};
