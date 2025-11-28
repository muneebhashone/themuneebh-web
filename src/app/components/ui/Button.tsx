'use client';

import { motion } from 'motion/react';
import { ComponentProps, ReactNode } from 'react';

interface ButtonProps extends Omit<ComponentProps<'button'>, 'className'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-full transition-all inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-lime text-black hover:bg-lime-dim border-2 border-lime hover:border-lime-dim',
    secondary: 'bg-transparent text-white border-2 border-white hover:border-lime hover:text-lime',
    ghost: 'bg-transparent text-gray-400 hover:text-lime'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm sm:px-4 sm:py-2',
    md: 'px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base',
    lg: 'px-5 py-2.5 text-base sm:px-8 sm:py-4 sm:text-lg'
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = motion.button;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        {...props}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionComponent
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
