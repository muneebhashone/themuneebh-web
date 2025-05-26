'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react'; // Assuming Star icon is used here

// Basic type for a repository, adjust as needed based on actual data structure
interface Repo {
  id: number;
  html_url: string;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
}

interface GithubSectionProps {
  repos: Repo[];
}

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

export default function GithubSection({ repos }: GithubSectionProps) {
  return (
    <motion.section
      className="container section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="heading">I&apos;ve built some stuff for free</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <motion.div
            key={repo.id}
            variants={itemVariants} // Animate each card
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            transition={hoverTransition}
          >
            <Link 
              href={repo.html_url} 
              target="_blank"
              className="card group hover:border-accent transition-colors h-full flex flex-col justify-between" // Added h-full and flex for consistent card height
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                    {repo.name}
                  </h3>
                  <span className="mono text-sm text-accent">→</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {repo.description || 'No description available'}
                </p>
              </div>
              <div className="flex gap-3 items-end justify-end">
                {repo.language && (
                  <span className="mono text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                    {repo.language}
                  </span>
                )}
                <span className="flex gap-2 items-center justify-centermono text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                  <Star className="w-4 h-4" /> {repo.stargazers_count}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
