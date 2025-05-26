'use client';

import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeInOut",
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const hoverTransition = { duration: 0.2, ease: "easeOut" };

export default function ExperienceSection() {
  // Experience data could be passed as props if it were dynamic
  // For this example, it's hardcoded as in the original page.tsx
  const experiences = [
    {
      id: "01",
      title: "Scalable System Architecture",
      description: "Architecting resilient and high-performance distributed systems designed for growth, fault tolerance, and optimal efficiency."
    },
    {
      id: "02",
      title: "Data Engineering & Optimization",
      description: "Expertly designing, optimizing, and managing data solutions, ensuring high availability, performance, and integrity for demanding applications."
    },
    {
      id: "03",
      title: "Secure API Development",
      description: "Building secure, well-documented, and developer-friendly APIs that enable seamless integration and promote system maintainability."
    },
    {
      id: "04",
      title: "Cloud Solutions Architecture",
      description: "Developing and deploying scalable, cost-effective cloud solutions that address complex business challenges and drive innovation."
    },
    {
      id: "05",
      title: "DevOps & Platform Engineering",
      description: "Enhancing development velocity and reliability by building robust CI/CD pipelines, automation tools, and scalable infrastructure platforms."
    },
    {
      id: "06",
      title: "Serverless & Edge Solutions",
      description: "Leveraging serverless and edge computing paradigms to build highly scalable, event-driven applications with optimized performance and cost."
    }
  ];

  return (
    <motion.section
      className="container section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="heading text-accent bg-accent/10 p-4 leading-tight rounded-lg shadow-lg">
        Transforming Challenges into Scalable and Efficient Solutions.
      </h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="card"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={hoverTransition}
          >
            <div className="mono text-accent text-sm mb-4">{exp.id}</div>
            <h3 className="text-2xl font-semibold mb-4">{exp.title}</h3>
            <p className="text-muted leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
