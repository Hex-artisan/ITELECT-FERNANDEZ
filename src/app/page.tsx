"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Mail, Instagram, Github, ArrowUpRight } from "lucide-react";
import { ContactDrawer } from "@/components/ContactDrawer";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] bg-white dark:bg-[#121212]">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        {/* Left Side: Profile Picture */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-full max-w-[320px] md:max-w-md aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden border border-black/5">
            <Image 
              src="/profile.jpeg" 
              alt="Profile" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-8 md:space-y-10">
          <div className="space-y-6 w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight leading-tight text-black dark:text-white">
              Front End<br className="hidden sm:block" /> Developer
            </h1>
            
            <div className="space-y-4 w-full opacity-30">
              <div className="w-full h-[1px] bg-black dark:bg-white"></div>
              <div className="w-full h-[1px] bg-black dark:bg-white"></div>
              <div className="w-full h-[1px] bg-black dark:bg-white"></div>
              <div className="w-3/4 h-[1px] bg-black dark:bg-white mx-auto md:ml-0"></div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            <button 
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-80 transition-opacity text-sm font-bold"
            >
              Contact Me
            </button>
            <Link 
              href="/projects"
              className="flex items-center gap-2 text-sm font-bold hover:opacity-70 transition-opacity"
            >
              View Projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
            <a href="https://www.facebook.com/ianfaith.fernandez.7" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://github.com/Hex-artisan" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:fernandezianfaith@gmail.com" className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <ContactDrawer 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
