"use client";

import React from "react";

export default function Blog() {
  const [expandedId, setExpandedId] = React.useState<number | null>(null);

  const posts = [
    {
      id: 1,
      title: "The Art of Minimalist Design",
      excerpt: "Exploring how less can be more in modern web interfaces, focusing on user experience and clarity.",
      fullContent: "Minimalism is not about a lack of something. It's about the perfect amount of something. In web design, this means stripping away the unnecessary elements and focusing on what truly matters to the user. By using negative space, clear typography, and a limited color palette, we can create interfaces that are not only beautiful but also highly functional and easy to navigate."
    },
    {
      id: 2,
      title: "Why Typography Matters",
      excerpt: "How choosing the right font can change the entire feel of your digital products and brand identity.",
      fullContent: "Typography is the silent ambassador of your brand. It conveys emotion, establishes hierarchy, and significantly impacts readability. Whether it's a sturdy serif for a traditional look or a clean sans-serif for a modern vibe, the fonts you choose tell a story before the user even reads a single word. Good typography isn't just about looking good; it's about guiding the user through your content effortlessly."
    },
    {
      id: 3,
      title: "Building Scalable Web Apps",
      excerpt: "Best practices for creating performant and maintainable applications using modern frameworks and tools.",
      fullContent: "In today's fast-paced digital world, scalability is key. Building a web app that can handle growth requires careful planning and the right choice of technology. Using frameworks like Next.js, along with modular component architecture and efficient state management, allows developers to build applications that are easy to maintain and can scale seamlessly as the user base grows. Performance optimization and clean code are the foundations of any successful scalable application."
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] bg-white dark:bg-[#121212]">
      <section className="container mx-auto px-6 md:px-8 py-12 md:py-20 flex flex-col items-start space-y-12">
        <h1 className="text-5xl md:text-6xl font-bold font-heading tracking-tight text-black dark:text-white mb-8">
          Blog
        </h1>

        <div className="flex flex-col gap-8 w-full max-w-4xl">
          {posts.map((post) => {
            const isExpanded = expandedId === post.id;
            return (
              <div 
                key={post.id} 
                className="group relative p-6 md:p-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl border border-black/5 flex flex-col gap-8 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold text-black dark:text-white font-heading">
                      {post.title}
                    </h2>
                    <div className="space-y-2 opacity-30">
                      <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                      <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                      <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                      <div className="w-3/4 h-[1px] bg-black dark:bg-white"></div>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {isExpanded ? post.fullContent : post.excerpt}
                    </p>
                  </div>

                  <button 
                    onClick={() => setExpandedId(isExpanded ? null : post.id)}
                    className="w-full md:w-auto px-6 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-full text-[10px] font-bold tracking-widest uppercase whitespace-nowrap hover:opacity-80 transition-opacity"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
