'use client';

import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        const progress = (currentScroll / scrollHeight) * 100;
        setScrollProgress(Math.min(progress, 100));
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initialize on mount

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return scrollProgress;
}

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY && scrollY > 80) {
        setScrollDirection('down');
      } else if (scrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener('scroll', updateScrollDirection, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [lastScrollY]);

  return scrollDirection;
}

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', updatePosition, { passive: true });
    updatePosition(); // Initialize

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
}
