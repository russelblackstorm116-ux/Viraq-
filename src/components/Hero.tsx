import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, MessageSquare, CheckCircle, ShieldCheck, Zap, Globe } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const { t } = useLanguage();

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesElement = document.querySelector('#services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Immersive Background Image with Dark Purple Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBg}
          alt="VIRAQ Creative Studio Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
        />
        {/* Dark Purple Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-black/85 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3)_0,transparent_70%)]" />
      </div>

      {/* Floating Light Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(139,92,246,0.4)] mx-auto mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-purple-400 animate-spin-slow" />
          <span>{t.hero.badge}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
        </motion.div>

        {/* Main Display Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-400">
            VIRAQ
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-300 my-4 tracking-wide italic font-serif"
        >
          {t.hero.tagline}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10"
        >
          {t.hero.subtitle}
          <br className="hidden sm:inline" />
          <span className="text-gray-400 text-sm sm:text-base">
            {t.hero.subtags}
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#services"
            onClick={scrollToServices}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-purple-950/80 border border-purple-500/50 text-white font-bold text-base hover:bg-purple-900/90 transition-all flex items-center justify-center space-x-2 backdrop-blur-md hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            <span>{t.hero.viewServices}</span>
            <ArrowRight className="w-5 h-5 text-purple-400" />
          </a>

          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-extrabold text-base shadow-[0_0_35px_rgba(139,92,246,0.7)] hover:shadow-[0_0_50px_rgba(168,85,247,0.9)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-3"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>{t.hero.contactUs}</span>
          </button>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-black/70 border border-purple-500/20 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          <div className="flex items-center space-x-3 p-2">
            <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-800/40 text-purple-400">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-black text-white">500+</p>
              <p className="text-xs text-gray-400 font-medium">{t.hero.stats.projects}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-2">
            <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-800/40 text-purple-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-black text-white">100%</p>
              <p className="text-xs text-gray-400 font-medium">{t.hero.stats.satisfaction}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-2">
            <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-800/40 text-purple-400">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-black text-white">24/48h</p>
              <p className="text-xs text-gray-400 font-medium">{t.hero.stats.delivery}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-2">
            <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-800/40 text-purple-400">
              <Globe className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-black text-white">Monde</p>
              <p className="text-xs text-gray-400 font-medium">{t.hero.stats.clients}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

