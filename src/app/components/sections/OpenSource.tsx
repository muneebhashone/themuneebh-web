"use client";

import { motion } from "motion/react";
import { Badge } from "../ui/Badge";
import { SectionHeader } from "../ui/SectionHeader";
import { StaggerChildren, StaggerItem } from "../animations/StaggerChildren";
import { Star, GitFork, ExternalLink } from "lucide-react";

interface Repository {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
  featured?: boolean;
}

interface OpenSourceProps {
  repositories: Repository[];
}

export function OpenSource({ repositories }: OpenSourceProps) {
  if (!repositories || repositories.length === 0) {
    return null;
  }

  const featured = repositories.find((r) => r.featured) || repositories[0];
  const others = repositories.filter((r) => r !== featured).slice(0, 3);

  return (
    <section id="open-source" className="py-16 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="OPEN SOURCE"
          title="Building tools for the developer community"
          description="Production-ready frameworks and toolkits trusted by developers worldwide."
        />

        {/* Featured Repository */}
        {featured && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FeaturedRepoCard repo={featured} />
          </motion.div>
        )}

        {/* Other Repositories */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((repo) => (
            <StaggerItem key={repo.name}>
              <RepoCard repo={repo} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

function FeaturedRepoCard({ repo }: { repo: Repository }) {
  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-8 md:p-10 rounded-3xl bg-black-card border-2 border-lime
                 transition-all duration-300 group hover:border-lime hover:shadow-[0_20px_60px_var(--accent-lime-glow)]"
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="lime">Featured</Badge>
          </div>
          <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-lime transition-colors">
            {repo.name}
          </h3>
        </div>
        <ExternalLink className="w-6 h-6 text-gray-600 group-hover:text-lime transition-colors" />
      </div>

      <p className="text-gray-400 mb-6 leading-relaxed text-lg">
        {repo.description}
      </p>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-lime">
          <Star className="w-5 h-5 fill-lime" />
          <span className="font-mono font-bold">{repo.stars}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <GitFork className="w-5 h-5" />
          <span className="font-mono">{repo.forks}</span>
        </div>
        <Badge variant="outline">{repo.language}</Badge>
      </div>
    </motion.a>
  );
}

function RepoCard({ repo }: { repo: Repository }) {
  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-2xl bg-black-card border border-white/10
                 transition-all duration-300 group hover:border-lime hover:shadow-[0_20px_60px_var(--accent-lime-glow)]"
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-lime transition-colors">
          {repo.name}
        </h3>
        <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-lime transition-colors flex-shrink-0" />
      </div>

      <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">
        {repo.description}
      </p>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-lime text-sm">
          <Star className="w-4 h-4 fill-lime" />
          <span className="font-mono font-semibold">{repo.stars}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-600 text-sm">
          <GitFork className="w-4 h-4" />
          <span className="font-mono">{repo.forks}</span>
        </div>
        <Badge variant="outline" className="text-xs">
          {repo.language}
        </Badge>
      </div>
    </motion.a>
  );
}
