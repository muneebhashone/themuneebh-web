// import Link from "next/link"; // Link is used within client components
import { getDevToArticles } from "./utils/blog";
import { getTopRepositories } from "./utils/github";
// import { Star } from "lucide-react"; // Star is used within GithubSection
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import GithubSection from "./components/GithubSection";
import ExperienceSection from "./components/ExperienceSection";
import BlogPreviewSection from "./components/BlogPreviewSection";
import ContactFooter from "./components/ContactFooter";

export default async function Home() {
  const [postsData, reposFetched] = await Promise.all([
    getDevToArticles(),
    getTopRepositories('muneebhashone')
  ]);

  const repos = reposFetched.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4);

  // Ensure postsData is an array, providing a default if getDevToArticles can return null/undefined
  const posts = Array.isArray(postsData) ? postsData : [];


  const servicesData = [
    { name: "Gemini 2.5 Pro", logo: "/images/services/gemini.svg" },
    { name: "Vercel", logo: "/images/services/vercel.svg" },
    { name: "Claude Code", logo: "/images/services/claude.svg" },
    { name: "Cursor", logo: "/images/services/cursor.svg" },
    { name: "OpenAI", logo: "/images/services/openai.svg" },
    { name: "Next.js", logo: "/images/services/nextjs.svg" },
    { name: "Node.js", logo: "/images/services/nodejs.svg" },
    { name: "Typescript", logo: "/images/services/typescript.svg" },
  ];

  return (
    <div className=" bg-background selection:bg-accent selection:text-white">
      <HeroSection />
      <ServicesSection servicesData={servicesData} />
      <GithubSection repos={repos} />
      <ExperienceSection />
      <BlogPreviewSection posts={posts} />
      <ContactFooter />
    </div>
  );
}
