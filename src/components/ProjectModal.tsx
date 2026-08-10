import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, User, Tag, CheckCircle } from 'lucide-react';
import { PortfolioItem, ServiceCategory } from '../types';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onSelectServiceOrder: (serviceCategory: ServiceCategory) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectServiceOrder
}) => {
  if (!project) return null;

  const getServiceCategoryFromProject = (category: string): ServiceCategory => {
    switch (category) {
      case 'Logos':
        return 'Logo Design';
      case 'Bannières':
        return 'Bannière / Poster';
      case 'Music / Lyrics':
        return 'Lyrics';
      case 'Videos':
        return 'Montage vidéo';
      default:
        return 'Logo Design';
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-[#101018] border border-purple-500/40 rounded-3xl shadow-[0_0_50px_rgba(139,92,246,0.3)] overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 border border-purple-500/30 text-gray-300 hover:text-white hover:bg-purple-900/50 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content Scrollable */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-left">
            {/* Project Cover Image */}
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-purple-900/40">
              <img
                src={project.imageUrl}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101018] via-transparent to-transparent" />

              <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-bold bg-purple-600 text-white shadow-lg">
                {project.category}
              </span>
            </div>

            {/* Title & Metadata */}
            <div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">{project.title}</h2>
              <p className="text-purple-300 text-base font-semibold mt-1">{project.shortDesc}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-black/60 border border-purple-900/30 text-xs">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-purple-400" />
                <div>
                  <p className="text-gray-400">Client</p>
                  <p className="font-bold text-white">{project.client}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-purple-400" />
                <div>
                  <p className="text-gray-400">Année</p>
                  <p className="font-bold text-white">{project.year || '2026'}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <Tag className="w-4 h-4 text-purple-400" />
                <div>
                  <p className="text-gray-400">Spécialité</p>
                  <p className="font-bold text-purple-300">{project.category}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-2">
                Description du projet
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.fullDesc}
              </p>
            </div>

            {/* Deliverables if present */}
            {project.deliverables && (
              <div>
                <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-2">
                  Livrables fournis
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300 p-2 rounded-lg bg-purple-950/30 border border-purple-900/30">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-purple-950/60 border border-purple-800/40 text-purple-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA in Modal */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-purple-900/30">
              <p className="text-xs text-gray-400">
                Vous désirez un résultat équivalent pour votre entreprise ou votre musique ?
              </p>
              <button
                onClick={() => {
                  onClose();
                  onSelectServiceOrder(getServiceCategoryFromProject(project.category));
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 transition-all flex items-center justify-center space-x-2"
              >
                <span>Commander un projet similaire</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
