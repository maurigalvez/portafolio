"use client";

import { siteConfig, techStack } from "@/lib/data";
import { User } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <AnimatedSection className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
            <User size={64} className="text-white" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          {siteConfig.name}
        </h1>

        <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">
          {siteConfig.title}
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {siteConfig.bio}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform"
            >
              {tech}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
