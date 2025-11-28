# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 personal portfolio and blog website for a Backend Systems Engineer. The site fetches blog posts from Dev.to and displays GitHub repositories dynamically. Built with TypeScript, React 19 RC, and Tailwind CSS.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

The development server runs on `http://localhost:3000`.

## Architecture

### App Router Structure

The project uses Next.js 15 App Router with the following structure:

- `src/app/page.tsx` - Homepage with hero, GitHub repos, services, blog preview, and contact
- `src/app/blog/page.tsx` - Blog listing page fetching from Dev.to
- `src/app/blog/[id]/page.tsx` - Individual blog post page with markdown rendering
- `src/app/layout.tsx` - Root layout with navigation and analytics
- `src/app/components/` - React components (Navbar, ClientNavigation)
- `src/app/utils/` - Utility functions for API integrations
- `src/app/types/` - TypeScript type definitions

### External Data Integration

**Dev.to Blog Posts:**
- Fetched via Dev.to API in `src/app/utils/blog.ts`
- Username: `themuneebh`
- Implements timeout wrapper for fetch requests (5s default)
- Transforms Dev.to articles to internal `BlogPost` format
- Error handling returns empty arrays rather than throwing

**GitHub Repositories:**
- Fetched via GitHub API in `src/app/utils/github.ts`
- Username: `muneebhashone`
- Fetches up to 200 repos sorted by stars
- Revalidates every 24 hours using Next.js `revalidate` option

### Styling System

Uses Tailwind CSS with custom configuration:

- **CSS Variables** in `globals.css` for theming (background, foreground, accent, etc.)
- **Custom Components**: `.container`, `.section`, `.heading`, `.card`, `.gradient-text`
- **Typography Plugin** for markdown content with custom prose styles
- **Monospace Font**: Geist Mono accessed via `.mono` class
- **Design Tokens**: Indigo color scheme (`--accent: #4f46e5`)

### Markdown Rendering

Blog posts use `react-markdown` with `remark-gfm` for GitHub Flavored Markdown support. Custom components handle:
- Links (open in new tab with accent color)
- Code blocks (inline vs block styling)
- Images (Next.js Image component with proper sizing)

### Image Handling

Next.js Image component configured to allow images from:
- `media2.dev.to`
- `dev-to-uploads.s3.amazonaws.com`
- `res.cloudinary.com`
- `dev.to`

### Revalidation Strategy

- Blog listing page: revalidates every 3600s (1 hour)
- Blog post pages: revalidates every 3600s (1 hour)
- GitHub repos: revalidates every 86400s (24 hours)

## Important Configuration Notes

- TypeScript build errors are currently ignored via `next.config.ts` (`ignoreBuildErrors: true`)
- Uses Next.js Turbopack for faster development builds
- Vercel Analytics integrated in root layout
- ESLint extends `next/core-web-vitals` and `next/typescript`

## Data Flow

1. Server components fetch data at build/request time
2. Dev.to API provides blog content (no local markdown files)
3. GitHub API provides repository data
4. All data transformed to internal types before rendering
5. Client components handle navigation state only

## Key Dependencies

- `next@15.0.3` - Framework
- `react@19.0.0-rc` - UI library (release candidate)
- `react-markdown@9.0.1` - Markdown rendering
- `gray-matter@4.0.3` - Frontmatter parsing (installed but not actively used)
- `next-mdx-remote@5.0.0` - MDX support (installed but not actively used)
- `lucide-react@0.461.0` - Icon library
- `@vercel/analytics@1.4.1` - Analytics
