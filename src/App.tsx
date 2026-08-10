import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { LogoShowcase } from './components/LogoShowcase';
import { VideoSection } from './components/VideoSection';
import { ArtistSection } from './components/ArtistSection';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderModal, PresetOrderDetails } from './components/OrderModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceCategory } from './types';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<ServiceCategory>('Logo Design');
  const [initialPreset, setInitialPreset] = useState<PresetOrderDetails | null>(null);

  const handleOpenOrderModal = (service?: ServiceCategory) => {
    setInitialPreset(null);
    if (service) {
      setPreselectedService(service);
    }
    setIsOrderModalOpen(true);
  };

  const handlePresetOrder = (preset: PresetOrderDetails) => {
    setInitialPreset(preset);
    if (preset.service) {
      setPreselectedService(preset.service);
    }
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-600 selection:text-white antialiased overflow-x-hidden">
      {/* Top Fixed Glass Navigation */}
      <Navbar onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Hero Section */}
      <Hero onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Services Section */}
      <Services onSelectServiceOrder={(service) => handleOpenOrderModal(service)} />

      {/* Official VIRAQ Pricing & Packs Section */}
      <Pricing onSelectPresetOrder={handlePresetOrder} />

      {/* Logo Showcase Section */}
      <LogoShowcase onSelectServiceOrder={(service) => handleOpenOrderModal(service)} />

      {/* Video Editing Section */}
      <VideoSection onSelectServiceOrder={(service) => handleOpenOrderModal(service)} />

      {/* Artist & Music Section */}
      <ArtistSection onSelectServiceOrder={(service) => handleOpenOrderModal(service)} />

      {/* Portfolio Gallery */}
      <Portfolio onSelectServiceOrder={(service) => handleOpenOrderModal(service)} />

      {/* How it works Process */}
      <Process />

      {/* Customer Reviews */}
      <Testimonials />

      {/* Big Call to Action */}
      <CTASection onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Contact Details */}
      <ContactSection onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Dark Footer */}
      <Footer onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* WhatsApp Floating Action Button */}
      <FloatingWhatsApp onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Interactive Order System Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        preselectedService={preselectedService}
        initialPreset={initialPreset}
      />
    </div>
  );
}
