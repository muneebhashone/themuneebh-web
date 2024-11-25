import { getDevToArticle } from '../../utils/blog';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 3600; // Revalidate every hour

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const post = await getDevToArticle(params.id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-24">
        <div className="container section">
          <h1 className="heading">Post not found</h1>
          <Link 
            href="/blog"
            className="mono text-accent hover:opacity-80 transition-opacity"
          >
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <article className="container section">
        <div className="mb-8">
          <Link 
            href="/blog"
            className="mono text-accent hover:opacity-80 transition-opacity"
          >
            ← Back to blog
          </Link>
        </div>

        {post.coverImage && (
          <div className="relative w-full h-64 sm:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl font-bold mb-6">{post.title}</h1>
        
        <div className="flex items-center gap-4 mb-8">
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
            <span className="mono text-sm text-muted">{post.author.name}</span>
          </div>
          <span className="mono text-sm text-muted">•</span>
          <span className="mono text-sm text-muted">{post.date}</span>
          <span className="mono text-sm text-muted">•</span>
          <span className="mono text-sm text-muted">{post.readingTime} min read</span>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex gap-3 mb-12">
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="mono text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ children, href }) => (
                <a 
                  href={href}
                  className="text-accent hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              code: ({ children, className }) => (
                className ? (
                  <code className="block bg-accent/5 p-4 rounded-lg">
                    {children}
                  </code>
                ) : (
                  <code className="bg-accent/10 text-accent px-1 py-0.5 rounded">
                    {children}
                  </code>
                )
              ),
              img: ({ src, alt }) => (
                <div className="relative w-full h-64 my-8 rounded-lg overflow-hidden">
                  {src && (
                    <Image
                      src={src}
                      alt={alt || ''}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      className="object-contain"
                    />
                  )}
                </div>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
