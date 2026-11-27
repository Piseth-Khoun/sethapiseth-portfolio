"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Briefcase, Download, GitBranch } from "lucide-react";
import { profile } from "@/data/profile";

const entrance = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1, delayChildren: 0.08 },
            },
          }}
        >
          <motion.span className="eyebrow" variants={entrance} transition={{ duration: 0.65 }}>
            Hello, I&apos;m Khoun Sethapiseth
          </motion.span>
          <h1>
            <span className="sr-only">Turning ideas into digital experiences.</span>
            <span className="hero-line-mask" aria-hidden="true">
              <motion.span variants={entrance} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                Turning ideas into
              </motion.span>
            </span>
            <span className="hero-line-mask hero-line-accent" aria-hidden="true">
              <motion.span variants={entrance} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                digital experiences.
              </motion.span>
            </span>
          </h1>
          <motion.p className="hero-role" variants={entrance} transition={{ duration: 0.6 }}>
            Junior Frontend Developer
          </motion.p>
          <motion.p className="hero-description" variants={entrance} transition={{ duration: 0.6 }}>
            I build modern, responsive, and user-friendly websites and applications using modern frontend technologies.
            I enjoy solving problems, exploring new technologies, and transforming creative ideas into functional digital experiences.
          </motion.p>
          <motion.div className="hero-actions" variants={entrance} transition={{ duration: 0.6 }}>
            <Link className="button primary" href="/projects">
              Explore My Work <ArrowRight size={16} />
            </Link>
            <Link className="button" href="/contact">Let&apos;s Work Together</Link>
            <Link className="button" href="/cv"><Download size={16} /> Download CV</Link>
          </motion.div>
          <motion.div className="hero-socials" variants={entrance} transition={{ duration: 0.6 }}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch size={17} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Briefcase size={17} /></a>
          </motion.div>
          <motion.div className="availability" variants={entrance} transition={{ duration: 0.6 }}>
            <i /> Open to opportunities and collaborations
          </motion.div>
        </motion.div>

        <motion.div
          className="portrait-wrap"
          aria-label="Portrait of Khoun Sethapiseth"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: shouldReduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="floating-tag tag-one">React / Next.js</div>
          <motion.div
            className="portrait-orbit"
            animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="portrait">
              <Image
                src="/profile.png"
                alt="Khoun Sethapiseth"
                fill
                sizes="(max-width: 620px) 220px, 270px"
                priority
              />
            </div>
          </motion.div>
          <div className="floating-tag tag-two">Frontend Developer</div>
          <span className="hero-coordinate" aria-hidden="true">11°33&apos;N / 104°55&apos;E</span>
        </motion.div>
      </div>
    </section>
  );
}
