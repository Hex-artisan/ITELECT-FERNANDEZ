import React from "react";

const Footer = () => {
  const contacts = [
    { label: "GITHUB", href: "https://github.com/Hex-artisan" },
    { label: "FACEBOOK", href: "https://www.facebook.com/ianfaith.fernandez.7" },
    { label: "GMAIL", href: "mailto:fernandezianfaith@gmail.com" },
  ];

  return (
    <footer className="w-full mt-auto bg-white dark:bg-[#121212] px-6 md:px-8 py-10 md:py-12 flex flex-col items-center border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="w-full flex flex-col md:flex-row justify-between items-center mb-8 gap-6 md:gap-8">
        <div className="text-xl font-bold font-heading tracking-tighter opacity-50">FERNANDEZ</div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {contacts.map((contact, index) => (
            <a 
              key={index}
              href={contact.href}
              className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-400 hover:text-black dark:hover:text-white transition-all"
            >
              {contact.label}
            </a>
          ))}
        </div>
      </div>
      <div className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-zinc-300 dark:text-zinc-600 uppercase text-center">
        © 2026 FERNANDEZ. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
