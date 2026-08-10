import React from 'react';
import { Sparkles, PhoneCall, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface FooterProps {
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-purple-900/40 text-gray-400 py-16 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-purple-950/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left mb-12">
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 p-0.5 shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                  <span className="font-black text-xl text-white">V</span>
                </div>
              </div>
              <span className="text-3xl font-black tracking-widest text-white">VIRAQ</span>
            </div>

            <p className="text-purple-300 font-extrabold text-lg italic font-serif">
              {t.footer.tagline}
            </p>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            {/* Language Selector in Footer */}
            <div className="pt-2">
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                Langue / Language
              </p>
              <LanguageSelector />
            </div>

            {/* Social Links Placeholders */}
            <div className="pt-2">
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                {t.footer.followUs}
              </p>
              <div className="flex items-center space-x-3">
                {[
                  { name: 'Instagram', icon: '📸', url: '#' },
                  { name: 'Facebook', icon: '📘', url: '#' },
                  { name: 'TikTok', icon: '🎵', url: '#' },
                  { name: 'YouTube', icon: '🎬', url: '#' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    onClick={(e) => {
                      if (social.url === '#') e.preventDefault();
                    }}
                    className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-800/40 hover:border-purple-500 text-gray-300 hover:text-white flex items-center justify-center text-sm transition-all"
                    title={`${social.name} VIRAQ (Lien éditable)`}
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-purple-400 transition-colors">🎨 Logo Design</a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-400 transition-colors">🖼️ Bannières & Visuels</a>
              </li>
              <li>
                <a href="#artists" className="hover:text-purple-400 transition-colors">🎵 Lyrics & Contenus</a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-400 transition-colors">🎬 Montage Vidéo Pro</a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-400 transition-colors">✨ Identité Visuelle</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Liens Rapides */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-purple-400 transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-400 transition-colors">Nos Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-purple-400 transition-colors">Notre Portfolio</a>
              </li>
              <li>
                <a href="#process" className="hover:text-purple-400 transition-colors">Comment ça marche</a>
              </li>
              <li>
                <button onClick={onOpenOrderModal} className="text-purple-400 font-bold hover:underline text-left">
                  Passer une commande
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Officiel */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Direct</h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/243990270258"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 p-2 rounded-lg bg-purple-950/40 border border-purple-900/40 hover:border-purple-500 text-purple-300 font-mono transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>+243 990 270 258</span>
              </a>

              <a
                href="mailto:blackstormstudios21@gmail.com"
                className="flex items-center space-x-2 p-2 rounded-lg bg-purple-950/40 border border-purple-900/40 hover:border-purple-500 text-purple-300 font-mono text-[11px] truncate transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="truncate">blackstormstudios21@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-purple-950/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 VIRAQ. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="text-purple-400/60">Designed for VIRAQ Creative Agency</span>
            <Sparkles className="w-3.5 h-3.5 text-purple-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
