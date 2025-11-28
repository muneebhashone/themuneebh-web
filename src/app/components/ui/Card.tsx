'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = true, onClick }: CardProps) {
  const baseStyles = 'p-8 rounded-2xl bg-black-card border border-white/10 backdrop-blur-3xl backdrop-saturate-200 transition-all duration-300';

  const hoverStyles = hover
    ? 'hover:translate-y-[-8px] hover:border-lime hover:shadow-[0_20px_60px_var(--accent-lime-glow)]'
    : '';

  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </motion.div>
  );
}
