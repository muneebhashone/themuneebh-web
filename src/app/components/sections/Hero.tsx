'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { Metric } from '../ui/Metric';
import { CTAModal } from '../ui/CTAModal';
import { ContactModal } from '../ui/ContactModal';
import { siteConfig } from '@/app/data/config';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const { hero, metrics } = siteConfig;
  const [showCTAModal, setShowCTAModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleStartProject = () => {
    setShowCTAModal(true);
  };

  const handleCalendlySelect = () => {
    setShowCTAModal(false);
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/themuneebh/new-meeting';
    window.open(calendlyUrl, '_blank');
  };

  const handleContactFormSelect = () => {
    setShowCTAModal(false);
    setShowContactModal(true);
  };

  // Split headline to animate the accent word
  const headlineParts = hero.headline.split(hero.headlineAccent);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="w-2 h-2 bg-lime rounded-full"></span>
          <span className="text-lime text-xs md:text-sm font-mono uppercase tracking-wide">
            {hero.eyebrow}
          </span>
        </motion.div>

        {/* Headline with staggered characters */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight"
          style={{ letterSpacing: 'var(--tracking-tighter)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-white">
            {headlineParts[0]}
          </span>
          <span className="text-lime">
            {hero.headlineAccent}
          </span>
          {headlineParts[1] && (
            <span className="text-white">
              {headlineParts[1]}
            </span>
          )}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Button
            variant="primary"
            size="lg"
            href={hero.cta.primary.href}
          >
            {hero.cta.primary.label}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={handleStartProject}

          >
            {hero.cta.secondary.label}
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="grid grid-cols-3 gap-8 md:gap-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Metric
            value={String(metrics.githubStars)}
            label="GitHub Stars"
            numeric={metrics.githubStars}
          />
          <Metric
            value={metrics.productionSystems}
            label="Production Systems"
          />
          <Metric
            value={String(metrics.countriesServed)}
            label="Countries Served"
            numeric={metrics.countriesServed}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <span className="text-xs font-mono text-gray-600 uppercase tracking-wide">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-lime" />
        </motion.div>
      </motion.div>

      {/* Modals */}
      <CTAModal
        isOpen={showCTAModal}
        onClose={() => setShowCTAModal(false)}
        onSelectCalendly={handleCalendlySelect}
        onSelectContactForm={handleContactFormSelect}
      />
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </section>
  );
}
