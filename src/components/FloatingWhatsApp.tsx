import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenOrderModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2 pointer-events-auto">
      {/* Tooltip badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/90 border border-purple-500/50 text-purple-300 text-xs font-semibold shadow-[0_0_15px_rgba(139,92,246,0.4)] backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
        <span>VIRAQ WhatsApp (+243 990 270 258)</span>
      </motion.div>

      {/* Button */}
      <a
        href="https://wa.me/243990270258"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter VIRAQ sur WhatsApp"
        className="relative group p-4 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white shadow-[0_0_30px_rgba(139,92,246,0.7)] hover:shadow-[0_0_40px_rgba(168,85,247,0.9)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
      >
        <span className="absolute -inset-1 rounded-full bg-purple-500/40 animate-ping pointer-events-none" />
        <MessageSquare className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
};
