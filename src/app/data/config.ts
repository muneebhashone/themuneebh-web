export const siteConfig = {
  name: "Muneeb Hussain",
  title: "Backend Systems Engineer",
  description:
    "Backend Systems Engineer building resilient infrastructure for high-growth companies.",
  url: "https://themuneebh.com",

  author: {
    name: "Muneeb Hussain",
    email: "themuneebh@gmail.com",
    github: "muneebhashone",
    linkedin: "muneebhussainmodi",
    devto: "themuneebh",
    location: "Karachi, Pakistan",
    timezone: "PKT (UTC+5)",
  },

  social: {
    github: "https://github.com/muneebhashone",
    linkedin: "https://linkedin.com/in/muneebhussainmodi",
    devto: "https://dev.to/themuneebh",
    email: "mailto:themuneebh@gmail.com",
  },

  navigation: [
    { label: "Work", href: "#work" },
    { label: "Open Source", href: "#open-source" },
    { label: "Writing", href: "#writing" },
    // { label: 'About', href: '#about' }
  ],

  metrics: {
    githubStars: 400,
    productionSystems: "15+",
    countriesServed: 6,
    averageUptime: "99.9%",
  },

  hero: {
    eyebrow: "BACKEND SYSTEMS ENGINEER",
    headline: "Building systems that scale",
    headlineAccent: "scale",
    subheadline:
      "Architecting resilient backend infrastructure for high-growth companies. From 0 to production, every system designed to thrive under pressure.",
    cta: {
      primary: {
        label: "View Work",
        href: "#work",
      },
      secondary: {
        label: "Start a Project",
        href: "#contact",
      },
    },
  },

  contact: {
    headline: "Let's build something extraordinary",
    headlineAccent: "extraordinary",
    description:
      "Whether you're scaling to millions of users or solving complex infrastructure challenges, let's discuss how we can work together.",
    availability: {
      status: "available",
      text: "Currently available for select projects",
    },
    cta: {
      primary: {
        label: "Start a Conversation",
        href: "mailto:themuneebh@gmail.com",
      },
      secondary: {
        label: "View Calendar",
        href: "#", // Replace with actual calendar link if available
      },
    },
  },

  footer: {
    tagline: "Building systems that thrive under pressure",
    columns: {
      brand: {
        logo: "MH.",
        description:
          "Backend Systems Engineer specializing in scalable infrastructure",
      },
      navigation: {
        title: "Navigate",
        links: [
          { label: "Work", href: "#work" },
          { label: "Open Source", href: "#open-source" },
          { label: "Writing", href: "#writing" },
          // { label: "About", href: "#about" },
        ],
      },
      connect: {
        title: "Connect",
        links: [
          { label: "GitHub", href: "https://github.com/muneebhashone" },
          {
            label: "LinkedIn",
            href: "https://linkedin.com/in/muneebhussainmodi",
          },
          { label: "Dev.to", href: "https://dev.to/themuneebh" },
          { label: "Email", href: "mailto:themuneebh@gmail.com" },
        ],
      },
      location: {
        title: "Location",
        text: "Karachi, Pakistan",
        timezone: "PKT (UTC+5)",
      },
    },
    bottom: {
      copyright: `© ${new Date().getFullYear()} Muneeb Hussain. All rights reserved.`,
    },
  },
};

export type SiteConfig = typeof siteConfig;
