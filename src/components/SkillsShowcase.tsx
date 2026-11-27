"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const areas = [
  {
    label: "BUILD",
    title: "Frontend Development",
    description: "Creating responsive, user-friendly interfaces with modern web technologies.",
    skills: [
      { name: "React", image: "/skills/react.jpg" },
      { name: "Next.js", image: "/skills/nextjs.jpg" },
      { name: "HTML", image: "/skills/html.jpg" },
      { name: "CSS", image: "/skills/css.jpg" },
      { name: "Tailwind CSS", image: "/skills/tailwind.jpg" },
    ],
  },
  {
    label: "CODE",
    title: "Languages & Runtime",
    description: "Building application logic with Java, JavaScript, TypeScript, and Node.js.",
    skills: [
      { name: "Java", image: "/skills/java.webp" },
      { name: "JavaScript", image: "/skills/javascript.jpg" },
      { name: "TypeScript", image: "/skills/typescript.jpg" },
      { name: "Node.js", image: "/skills/nodejs.jpg" },
    ],
  },
  {
    label: "TOOLS",
    title: "Systems & Tools",
    description: "Working with version control, networking fundamentals, and Linux.",
    skills: [
      { name: "Git", image: "/skills/git.jpg" },
      { name: "GitHub", image: "/skills/github.jpg" },
      { name: "Cisco", image: "/skills/cisco.jpg" },
      { name: "Ubuntu", image: "/skills/ubuntu.jpg" },
    ],
  },
] as const;

export function SkillsShowcase() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="skills-showcase">
      <header className="skills-showcase-heading">
        <h2>Skills</h2>
        <div className="skills-showcase-meta">
          <span>What I work with</span>
          <strong>3 areas</strong>
        </div>
      </header>
      <div className="skill-areas" aria-label="Skills grouped by area">
        {areas.map((area, index) => (
          <motion.article
            className="skill-area"
            key={area.title}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : index * 0.1 }}
          >
            <span className="skill-area-label">{area.label}</span>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <div className="skill-tags">
              {area.skills.map((skill) => (
                <span className="skill-tag" key={skill.name}>
                  <Image src={skill.image} alt="" width={24} height={24} />
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
