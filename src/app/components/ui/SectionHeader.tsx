'use client';

import { motion } from 'motion/react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left'
}: SectionHeaderProps) {
  const alignmentClasses = align === 'center' ? 'text-center mx-auto max-w-3xl' : '';

  return (
    <motion.div
      className={`mb-16 ${alignmentClasses}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <div className="text-lime text-xs font-mono uppercase tracking-wide mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-lime rounded-full"></span>
          {eyebrow}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-400 max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
