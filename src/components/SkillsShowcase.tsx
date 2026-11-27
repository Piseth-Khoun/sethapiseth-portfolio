"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Braces, Code2, GitBranch, Layers3 } from "lucide-react";

const categories = [
  {
    name: "All skills",
    icon: Layers3,
    skills: ["Java", "JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Node.js", "Git", "GitHub"],
  },
  {
    name: "Frontend",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    name: "Programming",
    icon: Braces,
    skills: ["Java", "JavaScript", "TypeScript", "Node.js"],
  },
  {
    name: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub"],
  },
] as const;

export function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]["name"]>("All skills");
  const shouldReduceMotion = useReducedMotion();
  const selected = categories.find((category) => category.name === activeCategory) ?? categories[0];

  return (
    <div className="skills-showcase">
      <div className="skill-filters" role="group" aria-label="Filter skills">
        {categories.map(({ name, icon: Icon }) => (
          <button
            className={activeCategory === name ? "skill-filter active" : "skill-filter"}
            type="button"
            key={name}
            onClick={() => setActiveCategory(name)}
            aria-pressed={activeCategory === name}
          >
            <Icon size={15} /> {name}
          </button>
        ))}
      </div>
      <div className="skill-cloud" aria-live="polite">
        <AnimatePresence mode="popLayout" initial={false}>
          {selected.skills.map((skill, index) => (
            <motion.span
              className="skill-chip"
              key={skill}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.28, delay: shouldReduceMotion ? 0 : index * 0.025 }}
              whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.035 }}
            >
              <span className="skill-chip-spark" aria-hidden="true" />
              {skill}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
