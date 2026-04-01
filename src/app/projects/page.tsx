import Image from "next/image";
import { ChevronRight, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    { 
      id: 1, 
      title: "App Dev Project IAN", 
      image: "/ai.jpg",
      link: "https://github.com/Hex-artisan/App-dev-project-IAN.git"
    },
    { 
      id: 2, 
      title: "APPSSS", 
      image: "/work.jpg",
      link: "https://github.com/Hex-artisan/APPSSS.git"
    },
    { 
      id: 3, 
      title: "Vercel Portfolio", 
      image: "/cat.jpg",
      link: "https://ianfaith-portfolio.vercel.app/about"
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] bg-white dark:bg-[#121212]">
      <section className="container mx-auto px-6 md:px-8 py-12 md:py-20 flex flex-col md:flex-row items-start justify-between gap-12 md:gap-16">
        {/* Left Side: Content */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left space-y-8 md:space-y-10">
          <div className="space-y-6 w-full">
            <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-black dark:text-white">
              My Latest Projects
            </h1>
            
            <div className="space-y-2 opacity-30">
              <div className="w-full h-[1px] bg-black dark:bg-white"></div>
              <div className="w-full h-[1px] bg-black dark:bg-white"></div>
              <div className="w-full h-[1px] bg-black dark:bg-white"></div>
              <div className="w-3/4 h-[1px] bg-black dark:bg-white mx-auto md:ml-0"></div>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto md:ml-0">
              A curated selection of my most recent work, showcasing expertise in 
              front-end development, UI design, and interactive user experiences.
            </p>
          </div>
        </div>

        {/* Right Side: Grid */}
        <div className="w-full md:w-2/3 flex flex-col items-center gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {projects.map((project) => (
              <a 
                key={project.id} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden border border-black/5 group cursor-pointer"
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 md:opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-lg font-bold text-center mb-2">{project.title}</h3>
                  <ExternalLink className="w-6 h-6" />
                </div>
              </a>
            ))}
          </div>

          {/* Slider Indicator */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
            <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
            <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
            <div className="flex items-center justify-center w-10 h-5 bg-zinc-900 dark:bg-white rounded-full ml-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black translate-x-1"></div>
              <ChevronRight className="w-3 h-3 text-white dark:text-black translate-x-1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
