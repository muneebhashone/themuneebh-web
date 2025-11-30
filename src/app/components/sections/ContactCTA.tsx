"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "../ui/Button";
import { CTAModal } from "../ui/CTAModal";
import { ContactModal } from "../ui/ContactModal";
import { siteConfig } from "@/app/data/config";

export function ContactCTA() {
  const { contact } = siteConfig;
  const headlineParts = contact.headline.split(contact.headlineAccent);
  const [showCTAModal, setShowCTAModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleStartProject = () => {
    setShowCTAModal(true);
  };

  const handleCalendlySelect = () => {
    setShowCTAModal(false);
    const calendlyUrl =
      process.env.NEXT_PUBLIC_CALENDLY_URL ||
      "https://calendly.com/themuneebh/new-meeting";
    window.open(calendlyUrl, "_blank");
  };

  const handleContactFormSelect = () => {
    setShowCTAModal(false);
    setShowContactModal(true);
  };

  return (
    <section id="contact" className="py-16 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-black via-gray-900 to-black border border-white/5 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-lime/5 via-transparent to-lime/5 pointer-events-none"></div>

          {/* Content */}
          <div className="relative text-center">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {headlineParts[0]}
              <span className="text-lime">{contact.headlineAccent}</span>
              {headlineParts[1]}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              {contact.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button variant="primary" size="lg" onClick={handleStartProject}>
                {contact.cta.primary.label}
              </Button>
            </div>

            {/* Availability Indicator */}
            {contact.availability.status === "available" && (
              <motion.div
                className="flex items-center justify-center gap-2 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.span
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.span>
                <span>{contact.availability.text}</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

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
