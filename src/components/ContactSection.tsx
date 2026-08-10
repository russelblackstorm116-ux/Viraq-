import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PhoneCall, Mail, MessageSquare, Send, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  onOpenOrderModal: () => void;
}

const OFFICIAL_WHATSAPP = '+243990270258';
const OFFICIAL_EMAIL = 'blackstormstudios21@gmail.com';

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenOrderModal }) => {
  const { t } = useLanguage();
  const [quickName, setQuickName] = useState('');
  const [quickMsg, setQuickMsg] = useState('');
  const [sent, setSent] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMsg.trim()) return;

    const message = `Bonjour VIRAQ ! Je m'appelle ${quickName.trim() || 'Client'}.\n\nMessage : ${quickMsg.trim()}`;
    const url = `https://wa.me/${OFFICIAL_WHATSAPP.replace('+', '')}?text=${encodeURIComponent(message)}`;
    
    setSent(true);
    setTimeout(() => {
      window.open(url, '_blank');
      setSent(false);
      setQuickMsg('');
      setQuickName('');
    }, 300);
  };

  return (
    <section id="contact" className="py-24 bg-[#08080d] relative overflow-hidden border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-purple-950/80 text-purple-300 border border-purple-800/40 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            {t.contact.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-4 tracking-tight uppercase">
            {t.contact.title}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg mt-3">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          {/* Left Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#101018] border border-purple-500/30 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:border-purple-400 transition-all flex items-start space-x-4">
              <div className="p-3.5 rounded-2xl bg-purple-600 text-white shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.7)]">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                  WhatsApp Officiel
                </p>
                <p className="text-xl font-black text-white mt-0.5 font-mono">
                  +243 990 270 258
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Réponse instantanée direct avec l'équipe VIRAQ
                </p>
                <a
                  href="https://wa.me/243990270258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 mt-3 text-xs font-bold text-purple-300 hover:text-white underline"
                >
                  <span>Lancer la conversation WhatsApp</span>
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#101018] border border-purple-500/30 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:border-purple-400 transition-all flex items-start space-x-4">
              <div className="p-3.5 rounded-2xl bg-purple-950 border border-purple-800 text-purple-400 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                  Email Studio
                </p>
                <p className="text-base sm:text-lg font-extrabold text-white mt-0.5 font-mono truncate">
                  blackstormstudios21@gmail.com
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Pour demandes de devis et partenariats
                </p>
                <a
                  href="mailto:blackstormstudios21@gmail.com"
                  className="inline-flex items-center space-x-2 mt-3 text-xs font-bold text-purple-300 hover:text-white underline"
                >
                  <span>Envoyer un email</span>
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Studio Hours / Info */}
            <div className="p-6 rounded-2xl bg-purple-950/30 border border-purple-900/40 space-y-3 text-xs text-gray-300">
              <div className="flex items-center space-x-2 text-purple-300 font-bold">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Disponibilité & Support Client</span>
              </div>
              <p>7j/7 - Support prioritaire par WhatsApp pour tous les clients actifs.</p>
              <div className="flex items-center space-x-2 text-purple-300 font-bold pt-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Portée Internationale</span>
              </div>
              <p>Projets livrés en RDC, Afrique, Europe, Canada & USA.</p>
            </div>
          </motion.div>

          {/* Right Quick Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#101018] border border-purple-500/30 shadow-[0_0_40px_rgba(139,92,246,0.2)]"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-black text-white">Message Rapide</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Transmettez votre message directement sur notre ligne WhatsApp
                </p>
              </div>
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </div>

            {sent && (
              <div className="mb-4 p-3 rounded-xl bg-purple-950 border border-purple-500 text-purple-200 text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Redirection vers WhatsApp...</span>
              </div>
            )}

            <form onSubmit={handleQuickSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Votre Nom</label>
                <input
                  type="text"
                  value={quickName}
                  onChange={(e) => setQuickName(e.target.value)}
                  placeholder="ex: Patrick Ilunga"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-purple-900/50 focus:border-purple-500 text-white text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Votre Message</label>
                <textarea
                  rows={4}
                  value={quickMsg}
                  onChange={(e) => setQuickMsg(e.target.value)}
                  placeholder="Expliquez brièvement votre projet ou votre question..."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-purple-900/50 focus:border-purple-500 text-white text-sm outline-none transition-all"
                  required
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-bold text-sm shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-102 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer par WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenOrderModal}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-200 font-bold text-xs hover:text-white hover:bg-purple-900 transition-all"
                >
                  Formulaire Complet
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
