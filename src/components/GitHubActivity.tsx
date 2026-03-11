"use client";

import { GitHubCalendar } from "react-github-calendar";
import AnimatedSection from "./AnimatedSection";

export default function GitHubActivity() {
  return (
    <section id="github" className="py-20 px-4">
      <AnimatedSection className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          GitHub Activity
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-10">
          My open source contributions over the past year
        </p>
        <div className="flex justify-center overflow-x-auto">
          <GitHubCalendar
            username="maurigalvez"
            colorScheme="dark"
            blockSize={14}
            blockMargin={4}
            fontSize={14}
          />
        </div>
      </AnimatedSection>
    </section>
  );
}
