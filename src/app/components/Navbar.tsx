'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  const navItemVariants = {
    hover: {
      scale: 1.1,
    },
    transition: {
      duration: 0.2,
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-white/[0.08] z-50">
      <div className="container py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="mono text-lg font-semibold hover:text-accent transition-colors"
        >
          themuneebh.
        </Link>
        <div className="flex gap-8 items-center"> {/* Added items-center for better alignment with scaled items */}
          <motion.div whileHover="hover" transition={navItemVariants.transition} variants={navItemVariants}>
            <Link 
              href="/" 
              className={`mono text-sm transition-colors ${
                pathname === '/' ? 'text-accent' : 'text-muted hover:text-accent'
              }`}
            >
              Home
            </Link>
          </motion.div>
          <motion.div whileHover="hover" transition={navItemVariants.transition} variants={navItemVariants}>
            <Link 
              href="/blog" 
              className={`mono text-sm transition-colors ${
                pathname === '/blog' ? 'text-accent' : 'text-muted hover:text-accent'
              }`}
            >
              Blog
            </Link>
          </motion.div>
          <motion.div whileHover="hover" transition={navItemVariants.transition} variants={navItemVariants}>
            <a 
              href="https://github.com/muneebhashone" 
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-sm text-muted hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
