import { getDevToArticle } from '../../utils/blog';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/app/components/ui/Badge';
import { FadeInUp } from '@/app/components/animations/FadeInUp';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export const revalidate = 3600; // Revalidate every hour

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = await getDevToArticle(id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="p-12 rounded-3xl bg-black-card border border-white/10 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Post not found</h1>
            <p className="text-gray-400 mb-6">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/blog"
              target="_top"
              className="inline-flex items-center gap-2 text-lime hover:text-lime-dim transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm">Back to Blog</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          target="_top"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-lime transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-mono">Back to Blog</span>
        </Link>

        {/* Cover Image */}
        {post.coverImage && (
          <FadeInUp>
            <div className="relative w-full aspect-video mb-12 rounded-2xl overflow-hidden bg-gray-900">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover"
                priority
              />
            </div>
          </FadeInUp>
        )}

        {/* Header */}
        <FadeInUp delay={0.2}>
          <header className="mb-12">
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="lime" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 font-mono pb-8 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
                <span className="text-white">{post.author.name}</span>
              </div>
              <span className="text-gray-800">•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <span className="text-gray-800">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </header>
        </FadeInUp>

        {/* Content */}
        <FadeInUp delay={0.4}>
          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ children, href }) => (
                  <a
                    href={href}
                    className="text-lime hover:text-lime-dim transition-colors font-medium no-underline border-b border-lime hover:border-lime"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                code: ({ children, className }) =>
                  className ? (
                    <code className="block bg-lime/5 border border-lime p-4 rounded-xl font-mono text-sm">
                      {children}
                    </code>
                  ) : (
                    <code className="bg-lime/10 text-lime px-2 py-1 rounded font-mono text-sm">
                      {children}
                    </code>
                  ),
                img: ({ src, alt }) => (
                  <div className="relative w-full aspect-video my-8 rounded-xl overflow-hidden bg-gray-900">
                    {src && (
                      <Image
                        src={src}
                        alt={alt || ''}
                        fill
                        sizes="(max-width: 768px) 100vw, 896px"
                        className="object-cover"
                      />
                    )}
                  </div>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                    {children}
                  </h3>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-lime pl-6 italic text-gray-400 my-6">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </FadeInUp>

        {/* Footer */}
        <FadeInUp delay={0.6}>
          <div className="mt-16 pt-8 border-t border-white/5">
            <Link
              href="/blog"
              target="_top"
              className="inline-flex items-center gap-2 text-lime hover:text-lime-dim transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm">Back to All Articles</span>
            </Link>
          </div>
        </FadeInUp>
      </article>
    </div>
  );
}
