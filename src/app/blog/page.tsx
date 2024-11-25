import { getDevToArticles } from '../utils/blog';
import Link from 'next/link';
import Image from 'next/image';

export const revalidate = 3600; // Revalidate every hour

export default async function Blog() {
  const posts = await getDevToArticles();

  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="container section">
        <div className="flex justify-between items-center mb-12">
          <h1 className="heading mb-0">Technical Blog</h1>
          {/* <Link 
            href="/blog/new"
            className="inline-flex items-center gap-2 bg-accent text-background px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            <span className="mono text-sm">New Post</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12h14"/>
            </svg>
          </Link> */}
        </div>

        <div className="space-y-8">
          {posts.length === 0 ? (
            <div className="card">
              <div className="text-center py-12">
                <svg 
                  className="mx-auto h-12 w-12 text-muted mb-4"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" 
                  />
                </svg>
                <p className="text-muted mb-4">No blog posts found</p>
                <Link 
                  href="/blog/new"
                  className="inline-flex items-center gap-2 text-accent hover:opacity-80 transition-opacity"
                >
                  <span className="mono text-sm">Create your first post</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ) : (
            posts.map(post => (
              <Link 
                key={post.id}
                href={`/blog/${post.id}`}
                className="block group"
              >
                <article className="card">
                  {post.coverImage && (
                    <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority
                      />
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-semibold group-hover:text-accent transition-colors mb-2">
                        {post.title}
                      </h2>
                      <div className="mono text-sm text-muted">{post.date}</div>
                    </div>
                    <span className="mono text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more →
                    </span>
                  </div>
                  <p className="text-muted mb-6 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      {post.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag}
                          className="mono text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            sizes="24px"
                            className="object-cover"
                          />
                        </div>
                        <span className="mono text-sm text-muted">{post.author.name}</span>
                      </div>
                      <span className="mono text-sm text-muted">
                        {post.readingTime} min read
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
