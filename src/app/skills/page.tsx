import { Download } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      title: "Visual Design",
      description: "Creating visually stunning and cohesive designs that capture brand identity and engage users through effective use of color, typography, and layout."
    },
    {
      title: "UX Research",
      description: "Conducting thorough user research to understand user needs, behaviors, and pain points, ensuring data-driven design decisions for optimal user experiences."
    },
    {
      title: "Design Prototype",
      description: "Building interactive high-fidelity prototypes to test and validate design concepts, ensuring seamless user flows and intuitive interactions before development."
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] bg-white dark:bg-[#121212]">
      <section className="container mx-auto px-6 md:px-8 py-12 md:py-20 flex flex-col items-start space-y-12 md:space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-8 md:gap-8">
          <div className="space-y-6 w-full max-w-2xl text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold font-heading tracking-tight text-black dark:text-white">
              My Skills
            </h1>
            
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-black dark:text-white">Why hire me?</h2>
              <div className="space-y-2 opacity-30">
                <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                <div className="w-3/4 h-[1px] bg-black dark:bg-white mx-auto md:ml-0"></div>
              </div>
            </div>
          </div>

          <a 
            href="https://ianfaith-portfolio.vercel.app/assets/resume-D5_WF39y.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-80 transition-opacity text-sm font-bold whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 w-full">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="space-y-2 w-full">
                <h3 className="text-xl font-bold text-black dark:text-white">{skill.title}</h3>
                <div className="space-y-1.5 opacity-30">
                  <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                  <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                  <div className="w-2/3 h-[1px] bg-black dark:bg-white mx-auto md:ml-0"></div>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm max-w-sm md:max-w-none">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
