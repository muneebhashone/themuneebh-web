import Link from "next/link";
import { getDevToArticles } from "./utils/blog";

export default async function Home() {
  const posts = await getDevToArticles();

  return (
    <div className=" bg-background selection:bg-accent selection:text-white">
      {/* Hero Section */}
      <section className="container section flex flex-col justify-center pt-36">
        <div className="mono text-sm text-accent mb-4">
          Backend Systems Engineer
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold mb-8 leading-tight">
          Crafting robust
          <br />
          <span className="gradient-text">systems</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted max-w-2xl leading-relaxed">
          5+ years of flexing my skills in crafting supercharged distributed systems and backend solutions that can handle the heat!
        </p>
      </section>

      {/* Experience Section */}
      <section className="container section">
        <h2 className="heading">Core Expertise</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card">
            <div className="mono text-accent text-sm mb-4">01</div>
            <h3 className="text-2xl font-semibold mb-4">System Architecture</h3>
            <p className="text-muted leading-relaxed">
              Designing and implementing distributed systems with a focus on
              scalability, fault tolerance, and performance optimization.
            </p>
          </div>
          <div className="card">
            <div className="mono text-accent text-sm mb-4">02</div>
            <h3 className="text-2xl font-semibold mb-4">
              Database Engineering
            </h3>
            <p className="text-muted leading-relaxed">
              Advanced expertise in database optimization, complex query tuning,
              and data modeling for high-load applications.
            </p>
          </div>
          <div className="card">
            <div className="mono text-accent text-sm mb-4">03</div>
            <h3 className="text-2xl font-semibold mb-4">API Development</h3>
            <p className="text-muted leading-relaxed">
              Creating robust, secure, and well-documented APIs with emphasis on
              developer experience and maintainability.
            </p>
          </div>
          <div className="card">
            <div className="mono text-accent text-sm mb-4">04</div>
            <h3 className="text-2xl font-semibold mb-4">System Optimization</h3>
            <p className="text-muted leading-relaxed">
              Performance tuning and optimization of complex backend systems for
              maximum efficiency and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Blogs Preview Section */}
      <section className="container section">
        <div className="flex justify-between items-center mb-12">
          <h2 className="heading mb-0">Technical Insights</h2>
          <a
            href="/blog"
            className="mono text-sm text-accent hover:opacity-80 transition-opacity"
          >
            View all →
          </a>
        </div>
        <div className="space-y-6">
          {posts.slice(0, 3).map((post) => (
            <article key={post.id} className="card group cursor-pointer">
            <Link href={`/blog/${post.id}`} >
              
                <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <span className="mono text-sm text-accent">→</span>
              </div>
              <p className="text-muted mb-4 leading-relaxed">
                A comprehensive guide to designing and implementing
                fault-tolerant microservices architecture for enterprise
                applications.
              </p>
              <div className="mono text-sm text-muted">{post.date}</div>
             
            </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer className="container py-24">
        <div className="flex flex-wrap gap-8 justify-center items-center">
          <a
            href="https://github.com/muneebhashone"
            className="mono text-sm text-muted hover:text-accent transition-colors"
          >
            github/muneebhashone
          </a>
          <a
            href="https://linkedin.com/in/muneebhussainmodi"
            className="mono text-sm text-muted hover:text-accent transition-colors"
          >
            linkedin/in/muneebhussainmodi
          </a>
          <a
            href="mailto:mhussain@themuneebh.com"
            className="mono text-sm text-muted hover:text-accent transition-colors"
          >
            mhussain@themuneebh.com
          </a>
        </div>
      </footer>
    </div>
  );
}
