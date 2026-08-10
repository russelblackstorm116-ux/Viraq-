import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Mail, Sparkles } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { useLanguage } from '../context/LanguageContext';

interface CTASectionProps {
  onOpenOrderModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenOrderModal }) => {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 bg-black overflow-hidden border-t border-purple-900/30">
      {/* Background Graphic Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.ctaBg}
          alt="CTA Background VIRAQ"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-950/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.3)_0,transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-950/90 border border-purple-500/50 text-purple-300 text-xs font-bold mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.5)]">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>{t.cta.badge}</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6">
            {t.cta.title}
          </h2>

          <p className="max-w-2xl mx-auto text-lg sm:text-2xl text-gray-200 font-light mb-10 leading-relaxed">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={onOpenOrderModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-extrabold text-base shadow-[0_0_35px_rgba(139,92,246,0.7)] hover:shadow-[0_0_50px_rgba(168,85,247,0.9)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-3"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>{t.cta.orderNow}</span>
            </button>

            <a
              href="https://wa.me/243990270258"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-purple-950/80 border border-purple-500/50 text-white font-bold text-base hover:bg-purple-900 transition-all flex items-center justify-center space-x-2 backdrop-blur-md hover:scale-105 active:scale-95"
            >
              <span>{t.cta.whatsappDirect}</span>
            </a>

            <a
              href="mailto:blackstormstudios21@gmail.com"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-gray-900 border border-gray-700/50 text-gray-300 hover:text-white font-bold text-base hover:bg-gray-800 transition-all flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5 text-purple-400" />
              <span>{t.cta.email}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

