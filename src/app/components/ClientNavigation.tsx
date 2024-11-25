'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href}
      prefetch={true}
      className={`inline-block mono text-sm transition-colors px-4 py-2 rounded-md ${
        isActive ? 'text-accent bg-accent/10' : 'text-muted hover:text-accent hover:bg-accent/5'
      }`}
    >
      {children}
    </Link>
  );
}

export default function ClientNavigation() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-white/[0.08] z-50">
      <div className="container py-4 flex justify-between items-center">
        <Link 
          href="/"
          prefetch={true}
          className="mono text-lg font-semibold hover:text-accent transition-colors"
        >
          themuneebh.
        </Link>
        <nav className="flex gap-2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <a 
            href="https://github.com/muneebhashone"  
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mono text-sm text-muted hover:text-accent transition-colors px-4 py-2"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
