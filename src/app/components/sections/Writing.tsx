"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/Badge";
import { SectionHeader } from "../ui/SectionHeader";
import { StaggerChildren, StaggerItem } from "../animations/StaggerChildren";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/app/types/blog";

interface WritingProps {
  articles: BlogPost[];
}

export function Writing({ articles }: WritingProps) {
  if (!articles || articles.length === 0) {
    return null;
  }

  const featured = articles[0];
  const others = articles.slice(1, 4);

  return (
    <section id="writing" className="py-16 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="THOUGHT LEADERSHIP"
          title="Sharing insights on systems and architecture"
          description="Writing about backend engineering, distributed systems, and building for scale."
        />

        {/* Featured Article */}
        {featured && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FeaturedArticle article={featured} />
          </motion.div>
        )}

        {/* Other Articles */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((article) => (
            <StaggerItem key={article.id}>
              <ArticleCard article={article} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* View All Link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/blog"
            target="_top"
            className="inline-flex items-center gap-2 text-lime hover:text-lime-dim transition-colors group"
          >
            <span className="font-medium">View All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedArticle({ article }: { article: BlogPost }) {
  return (
    <Link href={`/blog/${article.id}`} target="_top" className="block group">
      <motion.article
        className="grid md:grid-cols-5 gap-8 p-8 md:p-10 rounded-3xl bg-black-card border border-white/10
                   transition-all duration-300 hover:border-lime hover:shadow-[0_20px_60px_var(--accent-lime-glow)]"
        whileHover={{ y: -4 }}
      >
        {/* Image */}
        {article.cover_image && (
          <div className="md:col-span-2 relative aspect-video md:aspect-square rounded-xl overflow-hidden bg-gray-900">
            <Image
              src={article.cover_image}
              alt={article.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-lime/0 group-hover:bg-lime/10 transition-colors duration-500"></div>
          </div>
        )}

        {/* Content */}
        <div className="md:col-span-3 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {article.tag_list.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="lime" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-lime transition-colors">
            {article.title}
          </h3>

          <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed">
            {article.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-600 font-mono">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(article.published_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{article.reading_time_minutes} min read</span>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

function ArticleCard({ article }: { article: BlogPost }) {
  return (
    <Link href={`/blog/${article.id}`} target="_top" className="block group">
      <motion.article
        className="p-6 rounded-2xl bg-black-card border border-white/10
                   transition-all duration-300 hover:border-lime hover:shadow-[0_20px_60px_var(--accent-lime-glow)] h-full flex flex-col"
        whileHover={{ y: -4 }}
      >
        {article.cover_image && (
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900 mb-4">
            <Image
              src={article.cover_image}
              alt={article.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-3">
          {article.tag_list.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="lime" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime transition-colors line-clamp-2 flex-grow">
          {article.title}
        </h3>

        <div className="flex items-center gap-3 text-xs text-gray-600 font-mono mt-auto">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>
              {new Date(article.published_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{article.reading_time_minutes} min</span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
