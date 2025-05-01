'use client';

import React, { useState } from "react";
import { GithubIcon, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Beverage Sales Analysis",
    description: "Python-based EDA project analyzing trends and promotions using PySpark and Seaborn.",
    tech: ["Python", "PySpark", "Pandas"],
    github: "https://github.com/KArtik-34/Beverage-Sales-Analysis",
    live: "",
    image: "/bsa.jpg",
  },
  {
    title: "Weather Application",
    description: "Real-time weather updates for multiple cities using Java and external APIs.",
    tech: ["Java", "API"],
    github: "https://github.com/KArtik-34/Weather_Application",
    live: "",
    image: "/westher.webp",
  },
  {
    title: "Banking Management System",
    description: "Core banking functions like transaction management and account control using Python + SQL.",
    tech: ["Python", "SQL"],
    github: "https://github.com/KArtik-34/Banking_Management_System",
    live: "",
    image: "/bnkmng.webp",
  },
  {
    title: "AI Chatbot with Emotional Context",
    description: "React-based conversational bot with ChatGPT API and emotional modes (supportive, romantic, etc.)",
    tech: ["React", "Tailwind", "Prompt Engineering"],
    github: "https://github.com/KArtik-34/AI_Chatbot",
    live: "",
    image: "/aichtbt.webp",
  },
];

function ProjectCard({ card, index, hovered, setHovered }: any) {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.image}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/70 flex flex-col items-start justify-end py-8 px-4 gap-2 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 mb-1">
          {card.title}
        </div>
        <div className="text-sm text-gray-200 mb-2 line-clamp-2">{card.description}</div>
        <div className="flex flex-wrap gap-2 mb-2">
          {card.tech.map((tech: string) => (
            <span key={tech} className="bg-black/60 border border-white/20 rounded-full px-3 py-1 text-xs text-white font-semibold">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-2">
          <a
            href={card.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 rounded-full bg-black w-10 h-10 flex justify-center items-center hover:bg-white/10 transition"
            title="View on GitHub"
          >
            <GithubIcon className="w-5 h-5 text-white" />
          </a>
          {card.live && (
            <a
              href={card.live}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 rounded-full bg-black w-10 h-10 flex justify-center items-center hover:bg-white/10 transition"
              title="Check Live Site"
            >
              <ExternalLink className="w-5 h-5 text-purple" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-black">
      <h1 className="heading text-center text-3xl md:text-4xl font-bold mb-10 text-white">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto md:px-8 w-full">
        {/* Only show the first 4 projects in a 2x2 grid */}
        {projects.slice(0, 4).map((card, index) => (
          <ProjectCard
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </section>
  );
} 