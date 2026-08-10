import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../data/translations';

interface LanguageSelectorProps {
  compact?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ compact = false }) => {
  const { lang, setLang, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLang(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-800/40 hover:border-purple-500/60 text-gray-200 hover:text-white transition-all text-xs font-semibold shadow-sm focus:outline-none ${
          isOpen ? 'border-purple-500 ring-2 ring-purple-500/30' : ''
        }`}
        aria-label="Sélectionner la langue / Select language"
      >
        <Globe className="w-3.5 h-3.5 text-purple-400 shrink-0" />
        <span className="text-base leading-none">{currentLangObj.flag}</span>
        <span className="font-bold text-xs uppercase tracking-wider">{currentLangObj.code}</span>
        {!compact && (
          <span className="hidden lg:inline text-xs font-medium text-gray-300">
            {currentLangObj.nativeName}
          </span>
        )}
        <ChevronDown className={`w-3.5 h-3.5 text-purple-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-[#0f0f1a] border border-purple-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.9)] py-2 z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 border-b border-purple-900/40 mb-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-purple-400">
              Langue / Language
            </p>
          </div>
          {languages.map((l) => {
            const isSelected = l.code === lang;
            return (
              <button
                key={l.code}
                onClick={() => handleSelect(l.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                  isSelected
                    ? 'bg-purple-900/50 text-white font-bold'
                    : 'text-gray-300 hover:bg-purple-950/60 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <span className="text-lg leading-none">{l.flag}</span>
                  <div>
                    <p className="font-bold text-white text-xs">{l.nativeName}</p>
                    <p className="text-[10px] text-gray-400">{l.name}</p>
                  </div>
                </div>
                {isSelected && <Check className="w-4 h-4 text-purple-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
