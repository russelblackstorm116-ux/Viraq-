import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, AlertCircle, Copy, Mail, MessageSquare } from 'lucide-react';
import { OrderFormData, ServiceCategory, FormErrors } from '../types';
import { useLanguage } from '../context/LanguageContext';

export interface PresetOrderDetails {
  service?: ServiceCategory;
  packageName?: string;
  price?: number;
  description?: string;
}

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: ServiceCategory;
  initialPreset?: PresetOrderDetails | null;
}

const OFFICIAL_WHATSAPP = '+243990270258';
const OFFICIAL_EMAIL = 'blackstormstudios21@gmail.com';

const INITIAL_FORM_DATA: OrderFormData = {
  fullName: '',
  companyName: '',
  email: '',
  whatsappNumber: '',
  selectedService: 'Logo Design',
  projectType: '',
  projectDescription: '',
  desiredStyle: '',
  desiredColors: '',
  budgetRange: '100$ - 300$',
  timeframe: '48h - 72h',
  referencesUrl: '',
  extraInfo: ''
};

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  initialPreset
}) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<OrderFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [copied, setCopied] = useState(false);
  const [isSuccessSent, setIsSuccessSent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (initialPreset) {
        setFormData((prev) => ({
          ...prev,
          selectedService: initialPreset.service || preselectedService || 'Logo Design',
          projectType: initialPreset.packageName
            ? `${initialPreset.packageName}${initialPreset.price ? ` ($${initialPreset.price})` : ''}`
            : prev.projectType,
          budgetRange: initialPreset.price ? `${initialPreset.price}$` : prev.budgetRange,
          projectDescription: initialPreset.description || prev.projectDescription,
        }));
      } else if (preselectedService) {
        setFormData((prev) => ({ ...prev, selectedService: preselectedService }));
      }
    }
  }, [initialPreset, preselectedService, isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Le nom complet est obligatoire';
    if (!formData.email.trim()) {
      newErrors.email = "L'adresse email est obligatoire";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Veuillez saisir une adresse email valide';
    }
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'Le numéro WhatsApp est obligatoire';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Veuillez décrire brièvement votre projet';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateFormattedMessage = (): string => {
    return `━━━━━━━━━━━━━━━━
🚀 NOUVELLE COMMANDE VIRAQ
━━━━━━━━━━━━━━━━

👤 CLIENT
Nom : ${formData.fullName.trim()}
Email : ${formData.email.trim()}

🏢 ENTREPRISE
${formData.companyName.trim() || 'Non spécifié'}

📱 WHATSAPP
${formData.whatsappNumber.trim()}

🎨 SERVICE
${formData.selectedService}

📋 TYPE DE PROJET
${formData.projectType.trim() || 'Non spécifié'}

📝 DESCRIPTION
${formData.projectDescription.trim()}

🎨 STYLE / COULEURS
Style : ${formData.desiredStyle.trim() || 'Libre / Selon VIRAQ'}
Couleurs : ${formData.desiredColors.trim() || 'Libre / Selon VIRAQ'}

💰 BUDGET
${formData.budgetRange}

⏱️ DÉLAI
${formData.timeframe}

🔗 RÉFÉRENCES
${formData.referencesUrl.trim() || 'Aucun lien'}

💬 INFORMATIONS SUPPLÉMENTAIRES
${formData.extraInfo.trim() || 'Aucune'}

━━━━━━━━━━━━━━━━
Message envoyé depuis le site VIRAQ
━━━━━━━━━━━━━━━━`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateFormattedMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${OFFICIAL_WHATSAPP.replace('+', '')}?text=${encodedMessage}`;

    setIsSuccessSent(true);

    // Open WhatsApp after brief feedback
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  const handleCopyMessage = () => {
    if (!validate()) return;
    const message = generateFormattedMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendEmailFallback = () => {
    if (!validate()) return;
    const message = generateFormattedMessage();
    const subject = encodeURIComponent(`Nouvelle Commande VIRAQ - ${formData.selectedService} (${formData.fullName})`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${OFFICIAL_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#0f0f16] border border-purple-500/30 rounded-2xl shadow-[0_0_50px_rgba(139,92,246,0.25)] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 md:p-6 bg-gradient-to-r from-purple-950/60 via-purple-900/30 to-black border-b border-purple-500/20 shrink-0">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-600/30 text-purple-300 border border-purple-400/40">
                  {t.orderModal.badge}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-white mt-1">
                {t.orderModal.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-400">
                {t.orderModal.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/50 text-gray-400 hover:text-white hover:bg-purple-900/50 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form Body */}
          <div className="p-5 md:p-8 overflow-y-auto space-y-6 text-left">
            {isSuccessSent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-purple-950/80 border border-purple-500/50 text-purple-200 flex items-start space-x-3"
              >
                <CheckCircle2 className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Prêt à transmettre votre commande !</p>
                  <p className="text-xs text-purple-300 mt-0.5">
                    WhatsApp va s'ouvrir automatiquement avec votre message prérempli au <span className="font-mono text-white">{OFFICIAL_WHATSAPP}</span>.
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSendWhatsApp} className="space-y-6">
              {/* Grid 1: Coordonnées Client */}
              <div className="bg-black/40 p-4 rounded-xl border border-purple-900/30 space-y-4">
                <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider flex items-center space-x-2">
                  <span>1. Coordonnées du Client</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Nom complet <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="ex: Serge Kabamba"
                      className={`w-full px-4 py-2.5 rounded-lg bg-black/60 border ${
                        errors.fullName ? 'border-red-500' : 'border-purple-900/50 focus:border-purple-500'
                      } text-white text-sm outline-none transition-all focus:ring-1 focus:ring-purple-500`}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Nom de l'entreprise / Marque
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="ex: BlackStorm Studio, Urban Fashion..."
                      className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-purple-900/50 focus:border-purple-500 text-white text-sm outline-none transition-all focus:ring-1 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Adresse Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ex: votre-email@domaine.com"
                      className={`w-full px-4 py-2.5 rounded-lg bg-black/60 border ${
                        errors.email ? 'border-red-500' : 'border-purple-900/50 focus:border-purple-500'
                      } text-white text-sm outline-none transition-all focus:ring-1 focus:ring-purple-500`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Numéro WhatsApp <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      placeholder="ex: +243 900 000 000"
                      className={`w-full px-4 py-2.5 rounded-lg bg-black/60 border ${
                        errors.whatsappNumber ? 'border-red-500' : 'border-purple-900/50 focus:border-purple-500'
                      } text-white text-sm outline-none transition-all focus:ring-1 focus:ring-purple-500`}
                    />
                    {errors.whatsappNumber && (
                      <p className="text-red-400 text-xs mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.whatsappNumber}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Grid 2: Détails du Projet */}
              <div className="bg-black/40 p-4 rounded-xl border border-purple-900/30 space-y-4">
                <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider">
                  2. Spécifications du Projet
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Service souhaité <span className="text-purple-400">*</span>
                    </label>
                    <select
                      name="selectedService"
                      value={formData.selectedService}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#14141e] border border-purple-900/50 focus:border-purple-500 text-white text-sm outline-none transition-all"
                    >
                      <option value="Logo Design">🎨 Logo Design</option>
                      <option value="Bannière / Poster">🖼️ Bannière / Poster / Visual</option>
                      <option value="Lyrics">🎵 Lyrics & Content Artiste</option>
                      <option value="Montage vidéo">🎬 Montage vidéo Pro</option>
                      <option value="Identité visuelle">✨ Identité visuelle globale</option>
                      <option value="Autre">💡 Autre service sur-mesure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Type de projet
                    </label>
                    <input
                      type="text"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      placeholder="ex: Nouveau logo, Clip TikTok, Pochette album..."
                      className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-purple-900/50 focus:border-purple-500 text-white text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Description détaillée du projet <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    name="projectDescription"
                    rows={3}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    placeholder="Expliquez votre vision, vos objectifs, l'esprit de votre marque ou de votre musique..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-black/60 border ${
                      errors.projectDescription ? 'border-red-500' : 'border-purple-900/50 focus:border-purple-500'
                    } text-white text-sm outline-none transition-all focus:ring-1 focus:ring-purple-500`}
                  />
                  {errors.projectDescription && (
                    <p className="text-red-400 text-xs mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.projectDescription}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Style visuel souhaité
                    </label>
                    <input
                      type="text"
                      name="desiredStyle"
                      value={formData.desiredStyle}
                      onChange={handleChange}
                      placeholder="ex: Futuriste, Minimaliste, Cyberpunk, Luxe, Épuré..."
                      className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-purple-900/50 focus:border-purple-500 text-white text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Couleurs souhaitées
                    </label>
                    <input
                      type="text"
                      name="desiredColors"
                      value={formData.desiredColors}
                      onChange={handleChange}
                      placeholder="ex: Noir & Violet Néon, Or & Noir, Rose & Cyan..."
                      className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-purple-900/50 focus:border-purple-500 text-white text-sm outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Grid 3: Budget & Délais */}
              <div className="bg-black/40 p-4 rounded-xl border border-purple-900/30 space-y-4">
                <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider">
                  3. Budget, Délais & Inspirations
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Budget estimé (USD)
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#14141e] border border-purple-900/50 focus:border-purple-500 text-white text-sm outline-none transition-all"
                    >
                      <option value="10$">10$ (Affiche / Cover / Bannière Basic)</option>
                      <option value="15$">15$ (Logo / Montage Video / Lyrics Basic)</option>
                      <option value="20$">20$ (Flyer / Cover / Bannière Standard)</option>
                      <option value="25$">25$ (Carte Visite / Pack Réseaux Basic)</option>
                      <option value="30$">30$ (Logo / Video / Lyrics Standard)</option>
                      <option value="35$">35$ (PACK STARTER VIRAQ 🏆)</option>
                      <option value="50$">50$ (Logo Premium / Branding Basic)</option>
                      <option value="60$">60$ (Montage Vidéo Premium)</option>
                      <option value="80$">80$ (PACK BUSINESS VIRAQ 🏆)</option>
                      <option value="100$">100$ (Branding Standard)</option>
                      <option value="150$">150$ (PACK BRAND PREMIUM VIRAQ 🏆)</option>
                      <option value="180$">180$ (Branding Premium Sur-Mesure)</option>
                      <option value="200$+">200$+ (Projet d'Envergure)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Délai souhaité
                    </label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#14141e] border border-purple-900/50 focus:border-purple-500 text-white text-sm outline-none transition-all"
                    >
                      <option value="Urgent 24h">⚡ Urgent (24 heures)</option>
                      <option value="48h - 72h">⏱️ Standard (48h - 72h)</option>
                      <option value="1 semaine">📅 1 semaine</option>
                      <option value="Flexible">🕊️ Flexible / Selon complexité</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Lien vers références ou inspirations (Lien Drive, Pinterest, YouTube...)
                  </label>
                  <input
                    type="url"
                    name="referencesUrl"
                    value={formData.referencesUrl}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-purple-900/50 focus:border-purple-500 text-white text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Informations supplémentaires
                  </label>
                  <input
                    type="text"
                    name="extraInfo"
                    value={formData.extraInfo}
                    onChange={handleChange}
                    placeholder="Tout détail technique supplémentaire..."
                    className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-purple-900/50 focus:border-purple-500 text-white text-sm outline-none transition-all"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-200 hover:text-white hover:bg-purple-900/70 text-xs font-semibold flex items-center justify-center space-x-2 transition-all"
                >
                  <Copy className="w-4 h-4 text-purple-400" />
                  <span>{copied ? t.orderModal.copiedMessage : t.orderModal.copyMessage}</span>
                </button>

                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleSendEmailFallback}
                    className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-700/50 text-xs font-semibold flex items-center justify-center space-x-2 transition-all"
                    title="Envoyer la commande par email"
                  >
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>Email</span>
                  </button>

                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-bold text-sm shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:shadow-[0_0_35px_rgba(168,85,247,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-5 h-5 fill-current" />
                    <span>{t.orderModal.sendWhatsapp}</span>
                    <Send className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-center text-gray-500">
                Numéro Officiel VIRAQ : <span className="text-purple-400 font-mono font-bold">{OFFICIAL_WHATSAPP}</span> • Email : <span className="text-purple-400 font-mono">{OFFICIAL_EMAIL}</span>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
