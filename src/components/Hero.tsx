"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Briefcase, GitBranch, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

const entrance = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero hero--gallery">
      <div className="hero-art" aria-hidden="true">
        <span className="liquid-sculpture sculpture-left"><i /><b /></span>
        <span className="liquid-sculpture sculpture-right"><i /><b /></span>
      </div>
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
          <motion.div className="hero-portrait" variants={entrance} transition={{ duration: 0.7 }}>
            <div className="hero-portrait-frame">
              <Image
                src="/profile-portrait.jpg"
                alt="Portrait of Khoun Sethapiseth"
                fill
                sizes="(max-width: 620px) 104px, 138px"
                priority
              />
            </div>
          </motion.div>
          <motion.span className="eyebrow hero-eyebrow" variants={entrance} transition={{ duration: 0.65 }}>
            <Sparkles size={13} /> Junior <span className="hero-name">WEB DEVELOPER</span> <span className="hero-eyebrow-divider">/</span> Phnom Penh
          </motion.span>
          <h1>
            <span className="sr-only">Designing digital experiences that feel different.</span>
            <span className="hero-line-mask" aria-hidden="true">
              <motion.span variants={entrance} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                Portfolio by
              </motion.span>
            </span>
            <span className="hero-line-mask hero-line-accent" aria-hidden="true">
              <motion.span variants={entrance} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                Khoun Sethapiseth
              </motion.span>
            </span>
          </h1>
          <motion.p className="hero-role" variants={entrance} transition={{ duration: 0.6 }}>
            Frontend developer <span>·</span> creative problem solver
          </motion.p>
          <motion.p className="hero-description" variants={entrance} transition={{ duration: 0.6 }}>
            Thoughtful design and modern technology, brought together to create digital experiences that feel effortless.
          </motion.p>
          <motion.div className="hero-actions" variants={entrance} transition={{ duration: 0.6 }}>
            <Link className="button primary" href="/projects">
              Explore selected work <ArrowRight size={16} />
            </Link>
            <Link className="button hero-secondary" href="/contact">Let&apos;s talk</Link>
          </motion.div>
          <motion.div className="hero-socials" variants={entrance} transition={{ duration: 0.6 }}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch size={17} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Briefcase size={17} /></a>
            <span className="hero-social-caption">Open to meaningful collaborations</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
