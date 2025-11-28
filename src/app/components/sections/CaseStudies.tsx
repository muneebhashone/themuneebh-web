'use client';

import { motion } from 'motion/react';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren';
import { caseStudies } from '@/app/data/caseStudies';
import { ArrowRight } from 'lucide-react';

export function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="SELECTED WORK"
          title="Building systems that thrive under pressure"
          description="Real-world impact across live streaming, AI infrastructure, telecommunications, and enterprise platforms."
        />

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {caseStudies.map((study) => (
            <StaggerItem key={study.id}>
              <CaseStudyCard study={study} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

function CaseStudyCard({ study }: { study: typeof caseStudies[0] }) {
  return (
    <motion.article
      className="relative p-8 md:p-12 rounded-3xl bg-black-card border border-white/10
                 transition-all duration-300 group cursor-pointer"
      whileHover={{
        y: -8,
        borderColor: 'var(--accent-lime)',
        boxShadow: '0 20px 60px var(--accent-lime-glow)'
      }}
    >
      {/* Case Number */}
      <div className="absolute top-8 right-8 text-7xl md:text-8xl font-mono font-black text-gray-900 pointer-events-none">
        {study.number}
      </div>

      {/* Category Badge */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 bg-lime rounded-full"></span>
        <span className="text-lime text-xs font-mono uppercase tracking-wide">
          {study.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight pr-12">
        {study.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mb-6 leading-relaxed">
        {study.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-8">
        {study.techStack.map((tech) => (
          <Badge key={tech} variant="default">
            {tech}
          </Badge>
        ))}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/5">
        {study.metrics.map((metric, index) => (
          <div key={index} className="text-left">
            <div className="text-xl md:text-2xl font-black text-lime mono mb-1">
              {metric.value}
            </div>
            <div className="text-xs font-mono uppercase tracking-wide text-gray-600">
              {metric.label}
            </div>
            {metric.change && (
              <div className="text-xs text-lime mt-1">
                {metric.change}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2 text-lime text-sm font-medium group-hover:gap-3 transition-all">
        <span>View Case Study</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.article>
  );
}
