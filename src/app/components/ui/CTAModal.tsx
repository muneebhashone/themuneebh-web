'use client';

import { Modal } from './Modal';
import { Calendar, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCalendly: () => void;
  onSelectContactForm: () => void;
}

export function CTAModal({ isOpen, onClose, onSelectCalendly, onSelectContactForm }: CTAModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Let's Connect">
      <div className="space-y-4">
        <p className="text-gray-400 text-center mb-4 sm:mb-8 text-sm sm:text-base">
          Choose how you&apos;d like to get started
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {/* Schedule Meeting */}
          <motion.button
            onClick={onSelectCalendly}
            className="group p-4 sm:p-6 md:p-8 bg-black border border-white/10 rounded-xl sm:rounded-2xl hover:border-lime transition-all hover:shadow-[0_20px_60px_var(--accent-lime-glow)] text-left"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-lime/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-lime/20 transition-colors">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-lime" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-lime transition-colors">
              Schedule a Meeting
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Book a time that works for you. We&apos;ll discuss your project in detail.
            </p>
          </motion.button>

          {/* Send Message */}
          <motion.button
            onClick={onSelectContactForm}
            className="group p-4 sm:p-6 md:p-8 bg-black border border-white/10 rounded-xl sm:rounded-2xl hover:border-lime transition-all hover:shadow-[0_20px_60px_var(--accent-lime-glow)] text-left"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-lime/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-lime/20 transition-colors">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-lime" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-lime transition-colors">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Describe your project and I&apos;ll get back to you within 24 hours.
            </p>
          </motion.button>
        </div>
      </div>
    </Modal>
  );
}
