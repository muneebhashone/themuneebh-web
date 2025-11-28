import { getCaseStudyById, caseStudies } from "@/app/data/caseStudies";
import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/app/components/ui/Badge";
import { Metric } from "@/app/components/ui/Metric";
import { FadeInUp } from "@/app/components/animations/FadeInUp";
import { ArrowLeft, ExternalLink, Github as GithubIcon } from "lucide-react";

export const revalidate = false; // Static generation, no revalidation needed

interface CaseStudyPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { id } = await params;
  const caseStudy = getCaseStudyById(id);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${caseStudy.title} - Muneeb Hussain`,
    description: caseStudy.description,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { id } = await params;
  const caseStudy = getCaseStudyById(id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="p-12 rounded-3xl bg-black-card border border-white/10 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Case Study not found
            </h1>
            <p className="text-gray-400 mb-6">
              The case study you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/#work"
              target="_top"
              className="inline-flex items-center gap-2 text-lime hover:text-lime-dim transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm">Back to Work</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-24 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Back Navigation */}
        <Link
          href="/#work"
          target="_top"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-lime transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-mono">Back to Work</span>
        </Link>

        {/* Hero Section */}
        <FadeInUp>
          <header className="relative mb-12">
            {/* Case Number */}
            <div className="absolute top-0 right-0 text-8xl font-mono font-black text-gray-900 pointer-events-none">
              {caseStudy.number}
            </div>

            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-lime rounded-full"></span>
              <span className="text-lime text-xs font-mono uppercase tracking-wide">
                {caseStudy.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight pr-12">
              {caseStudy.title}
            </h1>

            {/* Meta Badges */}
            {(caseStudy.industry ||
              caseStudy.clientSize ||
              caseStudy.duration) && (
              <div className="flex flex-wrap gap-3 mb-12">
                {caseStudy.industry && (
                  <Badge variant="outline">{caseStudy.industry}</Badge>
                )}
                {caseStudy.clientSize && (
                  <Badge variant="outline">{caseStudy.clientSize}</Badge>
                )}
                {caseStudy.duration && (
                  <Badge variant="outline">{caseStudy.duration}</Badge>
                )}
              </div>
            )}
          </header>
        </FadeInUp>

        {/* Metrics Grid */}
        <FadeInUp delay={0.2}>
          <div className="grid grid-cols-3 gap-6 mb-16 p-8 rounded-2xl bg-black-card border border-white/10">
            {caseStudy.metrics.map((metric) => (
              <Metric
                key={metric.label}
                value={metric.value}
                label={metric.label}
                change={metric.change}
              />
            ))}
          </div>
        </FadeInUp>

        {/* Overview Section */}
        <FadeInUp delay={0.3}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              {caseStudy.description}
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech) => (
                <Badge key={tech} variant="lime">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Challenges Section (Conditional) */}
        {caseStudy.challenges && caseStudy.challenges.length > 0 && (
          <FadeInUp delay={0.4}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Challenges</h2>
              <ul className="space-y-3">
                {caseStudy.challenges.map((challenge, index) => (
                  <li key={index} className="flex gap-3 text-gray-400">
                    <span className="text-lime mt-1">→</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>
        )}

        {/* Approach Section (Conditional) */}
        {caseStudy.approach && (
          <FadeInUp delay={0.5}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Approach</h2>
              <div className="text-gray-400 leading-relaxed whitespace-pre-line">
                {caseStudy.approach}
              </div>
            </div>
          </FadeInUp>
        )}

        {/* External Links (Conditional) */}
        {(caseStudy.link || caseStudy.github) && (
          <FadeInUp delay={0.6}>
            <div className="mb-16 flex flex-wrap gap-4">
              {caseStudy.link && (
                <a
                  href={caseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-lime text-black font-medium hover:bg-lime-dim transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Project
                </a>
              )}
              {caseStudy.github && (
                <a
                  href={caseStudy.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-lime text-lime font-medium hover:bg-lime/10 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  View Source
                </a>
              )}
            </div>
          </FadeInUp>
        )}

        {/* Footer Navigation */}
        <FadeInUp delay={0.7}>
          <div className="pt-8 border-t border-white/5">
            <Link
              href="/#work"
              target="_top"
              className="inline-flex items-center gap-2 text-lime hover:text-lime-dim transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm">Back to All Work</span>
            </Link>
          </div>
        </FadeInUp>
      </article>
    </div>
  );
}
