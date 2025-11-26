import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import ClientNavigation from "./components/ClientNavigation";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: "Muneeb Hashone - AI Systems Architect & SaaS Builder",
  description: "Building the future of intelligent systems. AI-powered SaaS platforms, agentic coding, and scalable backend architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ClientNavigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
