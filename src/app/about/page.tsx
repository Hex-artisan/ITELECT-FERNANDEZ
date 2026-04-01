import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] bg-white dark:bg-[#121212]">
      <section className="container mx-auto px-6 md:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-8 md:space-y-10 order-2 md:order-1">
          <div className="space-y-6 w-full">
            <h1 className="text-5xl md:text-6xl font-bold font-heading tracking-tight text-black dark:text-white">
              About
            </h1>
            
            <div className="space-y-6 w-full">
              <div className="space-y-2 opacity-30">
                <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                <div className="w-3/4 h-[1px] bg-black dark:bg-white mx-auto md:ml-0"></div>
              </div>

              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium max-w-xl mx-auto md:ml-0">
                I am a passionate Front End Developer and UI/UX Designer with a focus on creating 
                minimalist, functional, and user-centric digital experiences. With a background 
                in Information Technology, I bridge the gap between design and technology.
              </p>

              <div className="space-y-2 opacity-30">
                <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                <div className="w-2/3 h-[1px] bg-black dark:bg-white mx-auto md:ml-0"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-full max-w-[320px] md:max-w-md aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden border border-black/5">
            <Image 
              src="/profile.jpeg" 
              alt="About Caya" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
