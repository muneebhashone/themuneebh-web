import { getDevToArticles } from "./utils/blog";
import { getTopRepositories } from "./utils/github";
import { Hero } from "./components/sections/Hero";
import { CaseStudies } from "./components/sections/CaseStudies";
import { OpenSource } from "./components/sections/OpenSource";
import { Writing } from "./components/sections/Writing";
import { ContactCTA } from "./components/sections/ContactCTA";

export default async function Home() {
  const [articles, reposFetched] = await Promise.all([
    getDevToArticles(),
    getTopRepositories('muneebhashone')
  ]);

  // Transform repos to match OpenSource component interface
  const repositories = (reposFetched || [])
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 4)
    .map((repo, index) => ({
      name: repo.name,
      description: repo.description || 'No description available',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language || 'Unknown',
      url: repo.html_url,
      featured: index === 0 // First repo (highest stars) is featured
    }));

  return (
    <div className="bg-background">
      <Hero />
      <CaseStudies />
      <OpenSource repositories={repositories} />
      <Writing articles={articles} />
      <ContactCTA />
    </div>
  );
}
