"use client";

import React from "react";
import { X, Mail, Phone, MapPin, GraduationCap, FileText } from "lucide-react";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  // Prevent scrolling when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="relative w-full max-w-[90%] sm:max-w-md h-full bg-white dark:bg-[#121212] shadow-2xl p-8 md:p-10 flex flex-col animate-in slide-in-from-right duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mt-12 space-y-10 md:space-y-12 overflow-y-auto pr-2 scrollbar-hide">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight">Contact Info</h2>
            <div className="w-20 h-1 bg-black dark:bg-white opacity-20"></div>
          </div>

          <div className="space-y-8">
            {/* Name */}
            <div className="space-y-2">
              <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">Name</p>
              <p className="text-xl font-bold font-heading">Fernandez, Ian Faith</p>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">Phone Number</p>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-zinc-400" />
                <p className="text-lg font-medium">0999 975 5125</p>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">Address</p>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-zinc-400" />
                <p className="text-lg font-medium">Poblacion, Cordova, Cebu</p>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">Education</p>
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 mt-1 text-zinc-400" />
                <p className="text-lg font-medium">Currently studying in Cordova Public College</p>
              </div>
            </div>

            {/* Gmail */}
            <div className="space-y-2">
              <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">Email</p>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-zinc-400" />
                <a 
                  href="mailto:fernandezianfaith@gmail.com" 
                  className="text-lg font-medium hover:underline decoration-zinc-400 break-all"
                >
                  fernandezianfaith@gmail.com
                </a>
              </div>
            </div>

            {/* Resume */}
            <div className="space-y-2">
              <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">Resume</p>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-zinc-400" />
                <a 
                  href="https://ianfaith-portfolio.vercel.app/assets/resume-D5_WF39y.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:underline decoration-zinc-400"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
