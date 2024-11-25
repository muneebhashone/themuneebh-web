import Link from "next/link";
import { getDevToArticles } from "./utils/blog";
import { getTopRepositories } from "./utils/github";
import { Star } from "lucide-react";

export default async function Home() {
  const [posts, reposFetched] = await Promise.all([
    getDevToArticles(),
    getTopRepositories('muneebhashone')
  ]);

  const repos = reposFetched.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4);

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
        I build resilient, scalable systems and backend solutions that tackle complexity head-on - built to thrive under pressure!
        </p>
      </section>

      {/* GitHub Repositories Section */}
      <section className="container section">
        <h2 className="heading">I&apos;ve built some stuff for free</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <Link 
              key={repo.id}
              href={repo.html_url} 
              target="_blank"
              className="card group hover:border-accent transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                  {repo.name}
                </h3>
                <span className="mono text-sm text-accent">→</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {repo.description || 'No description available'}
              </p>
              <div className="flex gap-3 items-end justify-end">
                {repo.language && (
                  <span className="mono text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                    {repo.language}
                  </span>
                )}
                <span className="flex gap-2 items-center justify-centermono text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                  <Star className="w-4 h-4" /> {repo.stargazers_count}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="container section">
        <h2 className="heading text-accent bg-accent/10 p-4 leading-tight rounded-lg shadow-lg">
        Looking to save costs without compromising on value? Let’s make it happen together!
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
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
              Database Design
            </h3>
            <p className="text-muted leading-relaxed">
              Advanced expertise in database optimization, complex query tuning,
              and data modeling for high-load applications.
            </p>
          </div>
          <div className="card">
            <div className="mono text-accent text-sm mb-4">03</div>
            <h3 className="text-2xl font-semibold mb-4">API Architect</h3>
            <p className="text-muted leading-relaxed">
              Creating robust, secure, and well-documented APIs with emphasis on
              developer experience and maintainability.
            </p>
          </div>
          <div className="card">
            <div className="mono text-accent text-sm mb-4">04</div>
            <h3 className="text-2xl font-semibold mb-4">Solutions Architect</h3>
            <p className="text-muted leading-relaxed">
              Designing and implementing scalable and efficient solutions for complex problems.
            </p>
          </div>
          <div className="card">
            <div className="mono text-accent text-sm mb-4">05</div>
            <h3 className="text-2xl font-semibold mb-4">Platform Engineering</h3>
            <p className="text-muted leading-relaxed">
              Building and maintaining the infrastructure and tools that support software development and deployment.
            </p>
          </div>
          <div className="card">
            <div className="mono text-accent text-sm mb-4">06</div>
            <h3 className="text-2xl font-semibold mb-4">Serverless Architecture</h3>
            <p className="text-muted leading-relaxed">
              Designing applications that leverage serverless computing to improve scalability and reduce operational costs.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Blogs Preview Section */}
      <section className="container section">
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
          <Link
            href="https://github.com/muneebhashone"
            className="mono text-sm text-muted hover:text-accent transition-colors"
          >
            github/muneebhashone
          </Link>
          <Link
            href="https://linkedin.com/in/muneebhussainmodi"
            className="mono text-sm text-muted hover:text-accent transition-colors"
          >
            linkedin/in/muneebhussainmodi
          </Link>
          <Link
            href="mailto:mhussain@themuneebh.com"
            className="mono text-sm text-muted hover:text-accent transition-colors"
          >
            mhussain@themuneebh.com
          </Link>
        </div>
      </footer>
    </div>
  );
}
