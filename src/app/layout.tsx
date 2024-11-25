import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import ClientNavigation from "./components/ClientNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muneeb Hashone - Backend Systems Engineer",
  description: "Backend Systems Engineer specializing in distributed systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientNavigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
