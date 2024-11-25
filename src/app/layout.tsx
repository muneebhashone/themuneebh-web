import type { Metadata } from "next";
import "./globals.css";
import ClientNavigation from "./components/ClientNavigation";

export const metadata: Metadata = {
  title: "Muneeb Hussain - Backend Systems Engineer",
  description: "Backend Systems Engineer with expertise in building robust and scalable systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientNavigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
