import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { CustomCursor } from "./components/layout/CustomCursor";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { siteConfig } from "./data/config";

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.title}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
