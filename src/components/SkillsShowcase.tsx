"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const areas = [
  {
    label: "BUILD",
    title: "Web Development",
    description: "Developing scalable, interactive, and high-performance web applications using modern frontend and backend technologies.",
    skills: [
      { name: "React", image: "/skills/react.jpg" },
      { name: "Next.js", image: "/skills/nextjs.jpg" },
      { name: "HTML", image: "/skills/html.jpg" },
      { name: "CSS", image: "/skills/css.jpg" },
      { name: "TypeScript", image: "/skills/typescript.jpg" },
      { name: "JavaScript", image: "/skills/javascript.jpg" },
      { name: "C++", image: "/skills/C++ logo.jpg" },
      { name: "Java", image: "/skills/java.webp" },
      { name: "Node.js", image: "/skills/nodejs.jpg" },
      { name: "Tailwind CSS", image: "/skills/tailwind.jpg" },
    ],
  },
  {
    label: "TOOLS",
    title: "AI, cloud & Tools",
    description: "Working with AI, Cloud, and tools like version control.",
    skills: [
      { name: "Git", image: "/skills/git.jpg" },
      { name: "GitHub", image: "/skills/github.jpg" },
      { name: "Vercel", image: "/skills/Vercel Logo.jpg" },
      { name: "Netlify", image: "/skills/Netlify Logo.jpg" },
      { name: "ChatGPT", image: "/skills/chatgpt logo.jpg" },
      { name: "Claude", image: "/skills/claude logo.jpg" },
      { name: "Gemini", image: "/skills/gemini logo.jpg" },
      { name: "Copilot", image: "/skills/copilot logo.jpg" },
      { name: "Kimi", image: "/skills/kimi logo.jpg" },
      { name: "Runway", image: "/skills/runway ai logo.jpg" },

    ],
  },
  {
    label: "TOOLS",
    title: "Software & OS & Tools",
    description: "Working with AI, software, and tools like version control, networking fundamentals, and Linux.",
    skills: [
      { name: "Ubuntu", image: "/skills/ubuntu.jpg" },
      { name: "Cisco", image: "/skills/cisco.jpg" },
      { name: "Adobe Photoshop", image: "/skills/adobe photoshop logo.jpg" },
      { name: "Adobe Premiere Pro", image: "/skills/adobe premiere pro.jpg" },
      { name: "CapCut", image: "/skills/capcut logo.jpg" },
      { name: "Canva", image: "/skills/canva logo.jpg" },
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
