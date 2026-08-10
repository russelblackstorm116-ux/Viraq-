import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, Zap, Trophy, Crown, ArrowRight, Search, ShieldCheck } from 'lucide-react';
import { VIRAQ_PACKS, INDIVIDUAL_SERVICES_PRICING, ViraqPack, ServicePricingTier } from '../data/pricingData';
import { ServiceCategory } from '../types';
import { PresetOrderDetails } from './OrderModal';
import { useLanguage } from '../context/LanguageContext';

interface PricingProps {
  onSelectPresetOrder: (preset: PresetOrderDetails) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPresetOrder }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'packs' | 'services'>('packs');
  const [selectedTierLevel, setSelectedTierLevel] = useState<'basic' | 'standard' | 'premium'>('standard');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = INDIVIDUAL_SERVICES_PRICING.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOrderPack = (pack: ViraqPack) => {
    onSelectPresetOrder({
      service: pack.name.includes('BRAND') ? 'Identité visuelle' : 'Logo Design',
      packageName: `PACK ${pack.name}`,
      price: pack.price,
      description: `Commande du PACK ${pack.name} (${pack.price}$) : \nInclus : ${pack.features.join(', ')}.`
    });
  };

  const handleOrderServiceTier = (service: ServicePricingTier, tier: 'basic' | 'standard' | 'premium', price: number) => {
    const tierName = tier === 'basic' ? 'Basic' : tier === 'standard' ? 'Standard' : 'Premium';
    onSelectPresetOrder({
      service: service.category as ServiceCategory,
      packageName: `${service.name} - Formule ${tierName}`,
      price: price,
      description: `Commande du service ${service.name} (${tierName}) à $${price}.`
    });
  };

  return (
    <section id="pricing" className="py-24 bg-[#050508] relative overflow-hidden border-t border-purple-900/30">
      {/* Background Neon Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-purple-950/80 text-purple-300 border border-purple-800/40 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            {t.pricing.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-4 tracking-tight uppercase">
            {t.pricing.title}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg mt-3">
            {t.pricing.subtitle}
          </p>

          {/* Tab Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-[#0f0f18] border border-purple-900/50 shadow-inner">
            <button
              onClick={() => setActiveTab('packs')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all ${
                activeTab === 'packs'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>{t.pricing.tabPacks}</span>
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all ${
                activeTab === 'services'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>{t.pricing.tabServices}</span>
            </button>
          </div>
        </motion.div>

        {/* TAB 1: PACKS VIRAQ */}
        {activeTab === 'packs' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch text-left"
          >
            {VIRAQ_PACKS.map((pack) => {
              return (
                <div
                  key={pack.id}
                  className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    pack.isPopular
                      ? 'bg-gradient-to-b from-[#181128] via-[#120d20] to-[#0c0816] border-2 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.3)] md:-translate-y-3'
                      : 'bg-[#0e0e16] border border-purple-900/40 hover:border-purple-600/50 shadow-lg'
                  }`}
                >
                  {/* Badge */}
                  {pack.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.6)] flex items-center space-x-1">
                        <Sparkles className="w-3 h-3" />
                        <span>{pack.badge}</span>
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                        {pack.name}
                      </h3>
                      {pack.name === 'BRAND PREMIUM' && (
                        <Crown className="w-6 h-6 text-purple-400" />
                      )}
                    </div>

                    <p className="text-xs text-gray-400 mt-2 min-h-[36px]">
                      {pack.tagline}
                    </p>

                    {/* Price Tag */}
                    <div className="my-6 p-4 rounded-2xl bg-black/60 border border-purple-900/40 flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider block">
                          Prix Forfaitaire
                        </span>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                            ${pack.price}
                          </span>
                          <span className="text-xs text-gray-400 font-bold">USD</span>
                        </div>
                      </div>
                      <ShieldCheck className="w-6 h-6 text-purple-400/80" />
                    </div>

                    {/* Feature List */}
                    <div className="space-y-3 mb-8">
                      <p className="text-[11px] font-extrabold text-purple-300 uppercase tracking-widest">
                        {t.pricing.included}
                      </p>
                      <ul className="space-y-2.5">
                        {pack.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start space-x-2.5 text-xs text-gray-200">
                            <div className="p-1 rounded-full bg-purple-950 text-purple-400 shrink-0 mt-0.5 border border-purple-800">
                              <Check className="w-3 h-3" />
                            </div>
                            <span className="font-medium">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Recommendation & Button */}
                  <div className="pt-4 border-t border-purple-950/80 space-y-4">
                    <p className="text-[11px] text-gray-400 italic">
                      <span className="font-semibold text-purple-300">{t.pricing.recommendedFor}</span> {pack.recommendedFor}
                    </p>

                    <button
                      onClick={() => handleOrderPack(pack)}
                      className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all ${
                        pack.isPopular
                          ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:scale-102'
                          : 'bg-purple-950/80 hover:bg-purple-900 text-purple-200 border border-purple-700/50 hover:text-white'
                      }`}
                    >
                      <span>{t.pricing.orderPack} {pack.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* TAB 2: INDIVIDUAL SERVICES PRICING */}
        {activeTab === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8 text-left"
          >
            {/* Filter Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0e0e16] border border-purple-900/40">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.pricing.searchPlaceholder}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/60 border border-purple-900/50 text-white text-xs outline-none focus:border-purple-500 transition-all"
                />
              </div>

              {/* Tier Level Switcher */}
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 font-bold mr-2">{t.pricing.tierLabel}</span>

                {(['basic', 'standard', 'premium'] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setSelectedTierLevel(tier)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                      selectedTierLevel === tier
                        ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]'
                        : 'bg-black/50 text-gray-400 hover:text-white border border-purple-900/40'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Individual Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredServices.map((service) => {
                const currentPrice =
                  selectedTierLevel === 'basic'
                    ? service.basicPrice
                    : selectedTierLevel === 'standard'
                    ? service.standardPrice
                    : service.premiumPrice;

                return (
                  <div
                    key={service.id}
                    className="p-6 rounded-2xl bg-[#0c0c14] border border-purple-900/30 hover:border-purple-500/50 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl p-2.5 rounded-xl bg-purple-950/60 border border-purple-800/40">
                            {service.icon}
                          </span>
                          <div>
                            <h4 className="text-lg font-extrabold text-white group-hover:text-purple-300 transition-colors">
                              {service.name}
                            </h4>
                            <span className="text-[10px] uppercase font-bold text-purple-400 tracking-wider">
                              Catégorie: {service.category}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-xs text-gray-400 font-semibold uppercase block">
                            {selectedTierLevel}
                          </span>
                          <span className="text-3xl font-black text-white font-mono">
                            ${currentPrice}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Tier comparison mini badges */}
                      <div className="grid grid-cols-3 gap-2 my-4 pt-3 border-t border-purple-950/60 text-center">
                        <div
                          onClick={() => setSelectedTierLevel('basic')}
                          className={`p-2 rounded-xl border cursor-pointer transition-all ${
                            selectedTierLevel === 'basic'
                              ? 'bg-purple-950 border-purple-500 text-white'
                              : 'bg-black/40 border-purple-950 text-gray-400 hover:text-white'
                          }`}
                        >
                          <span className="text-[10px] uppercase font-bold block">Basic</span>
                          <span className="text-sm font-black font-mono">${service.basicPrice}</span>
                        </div>

                        <div
                          onClick={() => setSelectedTierLevel('standard')}
                          className={`p-2 rounded-xl border cursor-pointer transition-all ${
                            selectedTierLevel === 'standard'
                              ? 'bg-purple-950 border-purple-500 text-white'
                              : 'bg-black/40 border-purple-950 text-gray-400 hover:text-white'
                          }`}
                        >
                          <span className="text-[10px] uppercase font-bold block text-purple-300">Standard</span>
                          <span className="text-sm font-black font-mono">${service.standardPrice}</span>
                        </div>

                        <div
                          onClick={() => setSelectedTierLevel('premium')}
                          className={`p-2 rounded-xl border cursor-pointer transition-all ${
                            selectedTierLevel === 'premium'
                              ? 'bg-purple-950 border-purple-500 text-white'
                              : 'bg-black/40 border-purple-950 text-gray-400 hover:text-white'
                          }`}
                        >
                          <span className="text-[10px] uppercase font-bold block text-indigo-300">Premium</span>
                          <span className="text-sm font-black font-mono">${service.premiumPrice}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOrderServiceTier(service, selectedTierLevel, currentPrice)}
                      className="w-full py-2.5 rounded-xl bg-purple-950/80 hover:bg-purple-600 border border-purple-700/50 text-purple-200 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all mt-2"
                    >
                      <span>Commander {service.name} (${currentPrice})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
