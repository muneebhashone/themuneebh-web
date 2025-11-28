"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { siteConfig } from "@/app/data/config";
import { Button } from "../ui/Button";
import { X, Menu } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!isMounted) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const scrollY = window.scrollY;

    if (isMobileMenuOpen) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = previousBodyOverflow || "unset";
      document.documentElement.style.overflow = previousHtmlOverflow || "unset";
      window.scrollTo(0, scrollY);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = previousBodyOverflow || "unset";
      document.documentElement.style.overflow = previousHtmlOverflow || "unset";
    };
  }, [isMobileMenuOpen, isMounted]);

  const navHeight = isScrolled ? "h-16" : "h-20";
  const menuTopPosition = isScrolled ? "top-16" : "top-20";

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-300 ${navHeight} ${
          isScrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" target="_top" className="flex items-center group">
            <span className="text-2xl font-bold text-white">MH</span>
            <span className="text-2xl font-bold text-lime">.</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-mono text-gray-400 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="#contact">
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-lime transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu (ported to body to avoid nav stacking issues) */}
      {isMounted &&
        createPortal(
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90] md:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Menu Panel */}
                <motion.div
                  className={`fixed right-0 bottom-0 w-full max-w-sm bg-black-elevated border-l border-white/10 z-[110] md:hidden overflow-y-auto transition-all duration-300 shadow-2xl shadow-black/40`}
                  style={{ top: isScrolled ? "4rem" : "5rem" }}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                >
                  <div className="p-8 space-y-8">
                    {/* Navigation Links */}
                    <nav className="space-y-6">
                      {siteConfig.navigation.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <a
                            href={item.href}
                            onClick={handleNavClick}
                            className="block text-2xl font-bold text-white hover:text-lime transition-colors"
                          >
                            {item.label}
                          </a>
                        </motion.div>
                      ))}
                    </nav>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="pt-8 border-t border-white/10"
                    >
                      <Button
                        variant="primary"
                        size="lg"
                        href="#contact"
                        className="w-full"
                        onClick={handleNavClick}
                      >
                        Let&apos;s Talk
                      </Button>
                    </motion.div>

                    {/* Footer Info */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="pt-8 border-t border-white/10"
                    >
                      <p className="text-sm text-gray-600 font-mono">
                        Available for select projects
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-sm text-gray-400">
                          Open to opportunities
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
