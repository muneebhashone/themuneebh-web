"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "../components/ui/Badge";
import {
  StaggerChildren,
  StaggerItem,
} from "../components/animations/StaggerChildren";
import { Calendar, Clock } from "lucide-react";
import { BlogPost } from "../types/blog";

interface BlogListClientProps {
  posts: BlogPost[];
}

export function BlogListClient({ posts }: BlogListClientProps) {
  return (
    <StaggerChildren className="space-y-6">
      {posts.map((post) => (
        <StaggerItem key={post.id}>
          <Link target="_top" href={`/blog/${post.id}`} className="block group">
            <article className="p-8 rounded-3xl bg-black-card border border-white/10 hover:border-lime transition-all duration-300 hover:shadow-[0_20px_60px_var(--accent-lime-glow)] hover:-translate-y-1">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Image */}
                {post.coverImage && (
                  <div className="md:col-span-1">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-lime/0 group-hover:bg-lime/10 transition-colors duration-500"></div>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div
                  className={
                    post.coverImage ? "md:col-span-2" : "md:col-span-3"
                  }
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="lime" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-lime transition-colors">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed line-clamp-2">
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{post.readingTime} min read</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative w-5 h-5 rounded-full overflow-hidden">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          sizes="20px"
                          className="object-cover"
                        />
                      </div>
                      <span>{post.author.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
