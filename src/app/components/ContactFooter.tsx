'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeInOut",
      staggerChildren: 0.2, // Stagger the animation of child links
    } 
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

export default function ContactFooter() {
  const contactLinks = [
    { href: "https://github.com/muneebhashone", text: "github/muneebhashone" },
    { href: "https://linkedin.com/in/muneebhussainmodi", text: "linkedin/in/muneebhussainmodi" },
    { href: "mailto:themuneebh@gmail.com", text: "themuneebh@gmail.com" },
  ];

  return (
    <motion.footer
      id="contact-footer"
      className="container py-24"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {contactLinks.map((linkInfo) => (
          <motion.div key={linkInfo.href} variants={linkVariants}>
            <Link
              href={linkInfo.href}
              className="mono text-sm text-muted hover:text-accent transition-colors"
              target={linkInfo.href.startsWith('http') ? '_blank' : undefined}
              rel={linkInfo.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {linkInfo.text}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.footer>
  );
}
