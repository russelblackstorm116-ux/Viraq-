import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, MessageSquare, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.artists, href: '#artists' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.contact, href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex items-center space-x-3 cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 p-0.5 shadow-[0_0_20px_rgba(139,92,246,0.6)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.9)] transition-all">
            <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
              <span className="font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">
                V
              </span>
            </div>
            <Sparkles className="w-3.5 h-3.5 text-purple-300 absolute -top-1 -right-1 animate-pulse" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-widest text-white group-hover:text-purple-300 transition-colors">
              VIRAQ
            </span>
            <span className="hidden sm:inline-block text-[10px] font-semibold text-purple-400 tracking-wider ml-2 px-2 py-0.5 rounded-full bg-purple-950/60 border border-purple-800/40">
              CREATIVE AGENCY
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Language Selector */}
        <div className="hidden md:flex items-center space-x-3">
          <LanguageSelector />

          <a
            href="https://wa.me/243990270258"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-gray-300 hover:text-purple-300 flex items-center space-x-1 px-3 py-2 rounded-lg bg-purple-950/40 border border-purple-800/30 hover:border-purple-500/50 transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5 text-purple-400" />
            <span>+243 990 270 258</span>
          </a>

          <button
            onClick={onOpenOrderModal}
            className="relative group px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 transition-all duration-300 group-hover:scale-105" />
            <div className="relative flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t.nav.startProject}</span>
            </div>
          </button>
        </div>

        {/* Mobile Hamburger Toggle & Language Selector */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSelector compact />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-purple-950/60 border border-purple-800/40 text-gray-200 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-purple-400" /> : <Menu className="w-6 h-6 text-purple-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-purple-500/30 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-purple-950/60">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Langue / Language</span>
                <LanguageSelector />
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block text-base font-semibold text-gray-200 hover:text-purple-400 transition-colors py-2 border-b border-purple-950/40"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrderModal();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-[0_0_20px_rgba(139,92,246,0.5)] flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.nav.startProject}</span>
                </button>

                <a
                  href="https://wa.me/243990270258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-purple-950/80 border border-purple-800/50 text-purple-300 font-medium text-xs flex items-center justify-center space-x-2"
                >
                  <PhoneCall className="w-4 h-4 text-purple-400" />
                  <span>Contact WhatsApp : +243 990 270 258</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
