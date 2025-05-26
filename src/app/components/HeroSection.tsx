'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="container section flex flex-col justify-center pt-36">
      <motion.div
        {...animationProps}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mono text-sm text-accent mb-4"
      >
        Backend Systems Engineer
      </motion.div>
      <motion.h1
        {...animationProps}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-5xl sm:text-7xl font-bold mb-8 leading-tight"
      >
        Building Tomorrow&apos;s
        <br />
        <span className="gradient-text">Web</span>, Today.
      </motion.h1>
      <motion.p
        {...animationProps}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-xl sm:text-2xl text-muted max-w-2xl leading-relaxed"
      >
        I architect and develop cutting-edge, scalable web applications and backend systems that drive innovation and deliver exceptional user experiences.
      </motion.p>
      <motion.div
        {...animationProps}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="w-fit" // Ensure motion.div doesn't take full width if Link is inline-block
      >
        <Link
          href="#contact-footer"
          className="mt-8 px-6 py-3 bg-accent text-white rounded-lg shadow-md hover:bg-accent/90 transition-colors w-fit"
        >
          Get In Touch
        </Link>
      </motion.div>
    </section>
  );
}
