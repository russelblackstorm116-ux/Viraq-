import React from 'react';
import { motion } from 'motion/react';
import { Palette, Image, Music, Film, Check, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ServicesProps {
  onSelectServiceOrder: (serviceCategory: ServiceCategory) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceOrder }) => {
  const { t } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-purple-400" />;
      case 'Image':
        return <Image className="w-6 h-6 text-purple-400" />;
      case 'Music':
        return <Music className="w-6 h-6 text-purple-400" />;
      case 'Film':
        return <Film className="w-6 h-6 text-purple-400" />;
      default:
        return <Palette className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#08080d] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-900/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-purple-950/80 text-purple-300 border border-purple-800/40 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            {t.services.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-4 tracking-tight uppercase">
            {t.services.title}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg mt-3">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-[#101018] border border-purple-900/30 hover:border-purple-500/60 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(139,92,246,0.35)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Background Visual */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={service.bgImage}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101018] via-[#101018]/70 to-black/30" />

                {/* Category Floating Badge */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-purple-500/40 text-purple-200 text-xs font-bold">
                  {getIcon(service.iconName)}
                  <span>{service.category}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between -mt-12 relative z-10">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-purple-300 font-semibold text-sm mt-1 mb-3 italic">
                    {service.tagline}
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="p-1 rounded-full bg-purple-950 text-purple-400 mt-0.5 shrink-0 border border-purple-800/50">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={() => onSelectServiceOrder(service.category)}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-900/80 via-purple-700 to-indigo-800 hover:from-purple-600 hover:to-indigo-600 border border-purple-500/50 text-white font-extrabold text-sm shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all flex items-center justify-center space-x-2 group/btn"
                >
                  <span>{service.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 text-purple-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
