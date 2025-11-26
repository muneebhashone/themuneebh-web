import Link from "next/link";
import { getDevToArticles } from "./utils/blog";
import { getTopRepositories } from "./utils/github";
import { Star, Sparkles, Zap, Rocket, Brain, Code2 } from "lucide-react";

export default async function Home() {
  const [posts, reposFetched] = await Promise.all([
    getDevToArticles(),
    getTopRepositories('muneebhashone')
  ]);

  const repos = reposFetched.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4);

  return (
    <div className="bg-background selection:bg-accent selection:text-white">
      {/* Hero Section */}
      <section className="container section flex flex-col justify-center min-h-screen pt-32 pb-24 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 fade-in-up">
          <div className="inline-flex items-center gap-2 mono text-sm text-accent mb-8 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm fade-in stagger-1">
            <Sparkles className="w-4 h-4" />
            <span>AI Systems Architect & SaaS Builder</span>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-10 leading-[1.05] tracking-tight fade-in-up stagger-2">
            Building the future of
            <br />
            <span className="accent-text">intelligent systems</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted max-w-3xl leading-relaxed mb-16 fade-in-up stagger-3">
            I architect AI-powered SaaS platforms and agentic coding systems that transform how teams build, deploy, and scale. Passionate about pushing the boundaries of what&apos;s possible with intelligent automation.
          </p>
          
          {/* Key Focus Areas */}
          <div className="flex flex-wrap gap-3 fade-in-up stagger-4">
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card/60 border border-border/60 backdrop-blur-sm hover:border-accent/40 hover:bg-card/80 transition-all duration-300 hover:scale-105">
              <Brain className="w-4 h-4 text-accent" />
              <span className="text-sm mono font-medium">AI & ML Systems</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card/60 border border-border/60 backdrop-blur-sm hover:border-accent/40 hover:bg-card/80 transition-all duration-300 hover:scale-105">
              <Rocket className="w-4 h-4 text-accent" />
              <span className="text-sm mono font-medium">SaaS Architecture</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card/60 border border-border/60 backdrop-blur-sm hover:border-accent/40 hover:bg-card/80 transition-all duration-300 hover:scale-105">
              <Code2 className="w-4 h-4 text-accent" />
              <span className="text-sm mono font-medium">Agentic Coding</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card/60 border border-border/60 backdrop-blur-sm hover:border-accent/40 hover:bg-card/80 transition-all duration-300 hover:scale-105">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm mono font-medium">Scalable Backends</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI & SaaS Expertise Section */}
      <section className="container section">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center gap-2 mono text-sm text-accent mb-6 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20">
            <Sparkles className="w-4 h-4" />
            <span>Core Expertise</span>
          </div>
          <h2 className="heading text-center mb-8">
            Where <span className="accent-text">AI meets</span> enterprise scale
          </h2>
          <p className="heading-subtitle mx-auto text-center">
            Specializing in cutting-edge AI systems, SaaS platforms, and agentic coding solutions that drive real business value.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <div className="mono text-accent text-sm font-semibold">01</div>
            </div>
            <h3 className="text-2xl font-semibold mb-5 group-hover:text-accent transition-colors duration-300">
              AI & ML Systems
            </h3>
            <p className="text-muted leading-relaxed text-[15px]">
              Designing intelligent systems with LLMs, vector databases, and agentic workflows. Building AI-native applications that learn and adapt.
            </p>
          </div>
          
          <div className="card group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300">
                <Rocket className="w-6 h-6 text-accent" />
              </div>
              <div className="mono text-accent text-sm font-semibold">02</div>
            </div>
            <h3 className="text-2xl font-semibold mb-5 group-hover:text-accent transition-colors duration-300">
              SaaS Architecture
            </h3>
            <p className="text-muted leading-relaxed text-[15px]">
              Crafting scalable, multi-tenant SaaS platforms with modern cloud infrastructure. From MVP to enterprise-grade solutions.
            </p>
          </div>
          
          <div className="card group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <div className="mono text-accent text-sm font-semibold">03</div>
            </div>
            <h3 className="text-2xl font-semibold mb-5 group-hover:text-accent transition-colors duration-300">
              Agentic Coding
            </h3>
            <p className="text-muted leading-relaxed text-[15px]">
              Pioneering agentic development workflows. Building AI coding assistants and autonomous development systems that accelerate engineering velocity.
            </p>
          </div>
          
          <div className="card group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div className="mono text-accent text-sm font-semibold">04</div>
            </div>
            <h3 className="text-2xl font-semibold mb-5 group-hover:text-accent transition-colors duration-300">
              System Architecture
            </h3>
            <p className="text-muted leading-relaxed text-[15px]">
              Designing distributed systems with a focus on scalability, fault tolerance, and performance optimization at scale.
            </p>
          </div>
          
          <div className="card group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <div className="mono text-accent text-sm font-semibold">05</div>
            </div>
            <h3 className="text-2xl font-semibold mb-5 group-hover:text-accent transition-colors duration-300">
              Platform Engineering
            </h3>
            <p className="text-muted leading-relaxed text-[15px]">
              Building developer platforms and infrastructure that enable teams to ship faster. CI/CD, observability, and developer experience.
            </p>
          </div>
          
          <div className="card group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300">
                <Rocket className="w-6 h-6 text-accent" />
              </div>
              <div className="mono text-accent text-sm font-semibold">06</div>
            </div>
            <h3 className="text-2xl font-semibold mb-5 group-hover:text-accent transition-colors duration-300">
              Serverless & Cloud
            </h3>
            <p className="text-muted leading-relaxed text-[15px]">
              Architecting serverless-first applications that scale automatically. Optimizing for cost, performance, and developer productivity.
            </p>
          </div>
        </div>
      </section>

      {/* GitHub Repositories Section */}
      <section className="container section">
        <div className="mb-20 fade-in-up">
          <h2 className="heading mb-6">Open source contributions</h2>
          <p className="heading-subtitle">
            Building in public. Here are some of my recent projects and contributions to the open source community.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {repos.map((repo) => (
            <Link 
              key={repo.id}
              href={repo.html_url} 
              target="_blank"
              className="card group"
            >
              <div className="flex justify-between items-start mb-5">
                <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors duration-300">
                  {repo.name}
                </h3>
                <span className="mono text-sm text-accent group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
              <p className="text-muted text-[15px] leading-relaxed mb-6">
                {repo.description || 'No description available'}
              </p>
              <div className="flex gap-3 items-center justify-end">
                {repo.language && (
                  <span className="mono text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/15 transition-colors">
                    {repo.language}
                  </span>
                )}
                <span className="flex gap-2 items-center mono text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/15 transition-colors">
                  <Star className="w-4 h-4" /> {repo.stargazers_count}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container section">
        <div className="card bg-card border-accent/30 relative overflow-hidden fade-in-up">
          <div className="absolute inset-0 bg-accent/5 opacity-30"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto py-4">
            <div className="inline-flex items-center gap-2 mono text-sm text-accent mb-8 px-5 py-2.5 rounded-full bg-accent/20 border border-accent/30">
              <Rocket className="w-4 h-4" />
              <span>Let&apos;s Build Together</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
              Ready to transform your
              <br />
              <span className="accent-text">engineering capabilities?</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted mb-12 leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re building AI-powered SaaS platforms, implementing agentic coding workflows, or scaling your infrastructure—I help teams ship faster, smarter, and at scale. Let&apos;s discuss how we can accelerate your next breakthrough.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:themuneebh@gmail.com"
                className="px-8 py-4 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
              >
                Get in Touch
              </a>
              <Link
                href="/blog"
                className="px-8 py-4 rounded-xl bg-card border border-border text-foreground font-semibold hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:bg-card/80"
              >
                Read My Thoughts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Blogs Preview Section */}
      <section className="container section">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-20 gap-6 fade-in-up">
          <div>
            <div className="inline-flex items-center gap-2 mono text-sm text-accent mb-6 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20">
              <Brain className="w-4 h-4" />
              <span>Latest Insights</span>
            </div>
            <h2 className="heading mb-0 leading-tight">
              Thoughts on <span className="accent-text">AI, SaaS & Engineering</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="mono text-sm text-accent hover:text-accent transition-colors px-5 py-2.5 rounded-xl hover:bg-accent/10 border border-transparent hover:border-accent/20 hover:scale-105 transition-all duration-300"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-8">
          {posts.slice(0, 3).map((post, index) => (
            <article key={post.id} className="card group cursor-pointer fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Link href={`/blog/${post.id}`}>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <span className="mono text-sm text-accent group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
                <p className="text-muted mb-5 leading-relaxed text-[15px]">
                  {post.description}
                </p>
                <div className="mono text-sm text-muted">{post.date}</div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer className="container py-32 border-t border-border/50 fade-in-up">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-3">Let&apos;s connect</h3>
            <p className="text-muted text-lg">Building the future, one system at a time</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              href="https://github.com/muneebhashone"
              target="_blank"
              className="mono text-sm text-muted hover:text-accent transition-all duration-300 px-5 py-2.5 rounded-xl hover:bg-accent/10 border border-transparent hover:border-accent/20 hover:scale-105"
            >
              github/muneebhashone
            </Link>
            <Link
              href="https://linkedin.com/in/muneebhussainmodi"
              target="_blank"
              className="mono text-sm text-muted hover:text-accent transition-all duration-300 px-5 py-2.5 rounded-xl hover:bg-accent/10 border border-transparent hover:border-accent/20 hover:scale-105"
            >
              linkedin/in/muneebhussainmodi
            </Link>
            <Link
              href="mailto:themuneebh@gmail.com"
              className="mono text-sm text-muted hover:text-accent transition-all duration-300 px-5 py-2.5 rounded-xl hover:bg-accent/10 border border-transparent hover:border-accent/20 hover:scale-105"
            >
              themuneebh@gmail.com
            </Link>
          </div>
          <div className="text-center text-sm text-muted/70 mono pt-10 border-t border-border/30 w-full max-w-2xl">
            © {new Date().getFullYear()} Muneeb Hashone. Building intelligent systems.
          </div>
        </div>
      </footer>
    </div>
  );
}
