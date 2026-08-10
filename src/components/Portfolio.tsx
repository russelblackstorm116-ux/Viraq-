import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PortfolioItem, ServiceCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioProps {
  onSelectServiceOrder: (serviceCategory: ServiceCategory) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectServiceOrder }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories = [t.portfolio.all || 'Tous', 'Logos', 'Bannières', 'Videos', 'Music / Lyrics'];

  const filteredProjects = (activeCategory === 'Tous' || activeCategory === t.portfolio.all)
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#08080d] relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-purple-950/80 text-purple-300 border border-purple-800/40 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            {t.portfolio.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-4 tracking-tight uppercase">
            {t.portfolio.title}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg mt-3">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.6)] scale-105'
                  : 'bg-purple-950/40 border border-purple-900/40 text-gray-400 hover:text-white hover:bg-purple-900/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden bg-[#101018] border border-purple-900/30 hover:border-purple-500/60 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(139,92,246,0.35)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Project Image Container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101018] via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-black/80 backdrop-blur-md border border-purple-500/40 text-purple-300">
                    {project.category}
                  </span>

                  {/* Hover Eye Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-950/40 backdrop-blur-xs">
                    <div className="p-3.5 rounded-full bg-purple-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.9)] transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider">
                      {project.client}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1 mt-0.5">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-purple-950/60">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-900/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectServiceOrder={onSelectServiceOrder}
      />
    </section>
  );
};
