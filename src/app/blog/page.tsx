import { getDevToArticles } from "../utils/blog";
import Link from "next/link";
import { SectionHeader } from "../components/ui/SectionHeader";
import { BlogListClient } from "./BlogListClient";
import { ArrowLeft, FileText } from "lucide-react";

export const revalidate = 0; // Disable caching for now
export const dynamic = "force-dynamic"; // Force dynamic rendering

export default async function Blog() {
  const posts = await getDevToArticles();

  return (
    <div className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          target="_top"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-lime transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-mono">Back to Home</span>
        </Link>

        {/* Header */}
        <SectionHeader
          eyebrow="THOUGHT LEADERSHIP"
          title="All Articles"
          description="Deep dives into backend engineering, distributed systems, and building at scale."
          align="left"
        />

        {/* Articles Grid */}
        {posts.length === 0 ? (
          <div className="p-12 rounded-3xl bg-black-card border border-white/10 text-center">
            <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 mb-4">No articles published yet</p>
            <p className="text-sm text-gray-600">
              Check back soon for new content!
            </p>
          </div>
        ) : (
          <BlogListClient posts={posts} />
        )}
      </div>
    </div>
  );
}
