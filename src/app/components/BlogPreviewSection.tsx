'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Basic type for a post, adjust as needed
interface Post {
  id: string; // or number, depending on your data
  title: string;
  description: string;
  date: string;
  // slug: string; // If you were using slug for Link href
}

interface BlogPreviewSectionProps {
  posts: Post[];
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

export default function BlogPreviewSection({ posts }: BlogPreviewSectionProps) {
  return (
    <motion.section
      className="container section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-12">
        <h2 className="heading mb-0 p-2 px-0 leading-tight">Not ready to collaborate? <div>Read my thoughts</div></h2>
        <Link
          href="/blog"
          className="mono text-sm text-accent hover:opacity-80 transition-opacity"
        >
          View all →
        </Link>
      </div>
      <div className="space-y-6">
        {posts.slice(0, 3).map((post) => (
          <motion.article
            key={post.id}
            className="card group cursor-pointer"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            transition={hoverTransition}
          >
            <Link href={`/blog/${post.id}`}>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <span className="mono text-sm text-accent">→</span>
              </div>
              <p className="text-muted mb-4 leading-relaxed">
                {post.description}
              </p>
              <div className="mono text-sm text-muted">{post.date}</div>
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
