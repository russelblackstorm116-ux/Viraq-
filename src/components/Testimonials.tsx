import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#08080d] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-900/10 blur-[130px] rounded-full pointer-events-none" />

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
            {t.testimonials.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-4 tracking-tight uppercase">
            {t.testimonials.title}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg mt-3">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#101018] border border-purple-900/40 hover:border-purple-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-purple-900" />
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-4 border-t border-purple-950/60">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-purple-500/50"
                />
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-1 truncate">
                    <span>{item.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-gray-400 truncate">
                    {item.role} • <span className="text-purple-300">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
