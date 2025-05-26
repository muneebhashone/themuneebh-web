'use client';

import { motion } from 'framer-motion';

interface Service {
  name: string;
  logo: string;
}

interface ServicesSectionProps {
  servicesData: Service[];
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeInOut",
      staggerChildren: 0.1 // Stagger children animation
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardHoverTransition = { duration: 0.2, ease: "easeOut" };

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

const logoVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.15 },
};

const logoTransition = { duration: 0.2, ease: "easeOut" };

export default function ServicesSection({ servicesData }: ServicesSectionProps) {
  return (
    <motion.section
      className="container section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="heading">Technologies & Services I Leverage</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {servicesData.map((service) => (
          <motion.div
            key={service.name}
            className="card flex flex-col items-center justify-center p-6 text-center hover:border-accent transition-colors"
            variants={{ ...itemVariants, ...cardVariants }} // Combine entry animation with hover variants
            initial="hidden" // from itemVariants for entry
            animate="visible"  // from itemVariants for entry (will resolve to itemVariants.visible)
            whileInView="visible" // Ensures itemVariants.visible is triggered on scroll
            whileHover="hover"    // from cardVariants for hover
            transition={cardHoverTransition} // For the card's own hover effect
          >
            <motion.img
              src={service.logo}
              alt={`${service.name} logo`}
              className="h-12 w-12 mb-4 object-contain"
              variants={logoVariants} // Inherits hover state from parent card
              transition={logoTransition} // Specific transition for the logo's animation
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const textFallback = document.createElement('span');
                textFallback.textContent = service.name;
                textFallback.className = 'text-sm text-muted';
                target.parentNode?.insertBefore(textFallback, target.nextSibling);
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
