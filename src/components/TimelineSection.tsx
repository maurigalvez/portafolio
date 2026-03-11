"use client";

import { experiences } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function TimelineSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <AnimatedSection className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Experience
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-16">
          My professional journey
        </p>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative mb-12 last:mb-0 md:flex ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10 shadow-md shadow-blue-400/50" />

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <motion.div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    isLeft ? "md:pr-12" : "md:pl-12"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 8px 30px rgba(59, 130, 246, 0.15)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
                      {exp.company}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-blue-500 mt-1 shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}
