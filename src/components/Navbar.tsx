"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="w-full border-b border-black/10 dark:border-white/10 py-6 px-6 md:px-8 flex justify-between items-center bg-white dark:bg-[#121212] transition-colors duration-300 sticky top-0 z-50">
      <Link 
        href="/" 
        className="text-2xl md:text-3xl font-bold font-heading tracking-tighter hover:opacity-70 transition-opacity z-50"
      >
        FERNANDEZ
      </Link>
      
      <div className="flex items-center space-x-2 md:space-x-8">
        <div className="hidden md:flex space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all px-4 py-1.5 rounded-full",
                  isActive 
                    ? "bg-black text-white dark:bg-white dark:text-black" 
                    : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-[#BFC873] dark:hover:bg-[#6b732e] hover:text-white transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 md:hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-[#121212] z-40 flex flex-col items-center justify-center space-y-8 md:hidden animate-in fade-in duration-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-2xl font-bold font-heading tracking-tight transition-all",
                  isActive 
                    ? "text-black dark:text-white scale-110" 
                    : "text-zinc-400 hover:text-black dark:hover:text-white"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
