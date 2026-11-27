import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageReveal } from "@/components/PageReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/Hero";
import { SkillsShowcase } from "@/components/SkillsShowcase";
import { projects } from "@/data/projects";
import { experience } from "@/data/profile";

export default function Home() {
  return (
    <PageReveal>
      <Hero />

      <section className="section">
        <Reveal className="container">
          <div className="section-head">
            <div><span className="eyebrow">Selected work</span><h2 className="section-title">Featured projects.</h2></div>
            <Link className="text-link" href="/projects">View all projects <ArrowRight size={15} /></Link>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="container">
          <div className="section-head"><div><span className="eyebrow">Technical toolkit</span><h2 className="section-title">Skills & tools.</h2></div></div>
          <SkillsShowcase />
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="container">
          <div className="section-head">
            <div><span className="eyebrow">Professional journey</span><h2 className="section-title">Experience.</h2></div>
            <Link className="text-link" href="/about">More about me <ArrowRight size={15} /></Link>
          </div>
          <div className="experience-preview">
            {experience.map((item, index) => (
              <Reveal key={item.position} delay={index * 0.08}>
                <article className="experience-card">
                  <span>{item.period}</span>
                  <h3>{item.position}</h3>
                  <p>{item.company}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal className="container">
        <section className="cta">
          <div className="cta-inner">
            <div>
              <span className="eyebrow">Start a conversation</span>
              <h2>Have an idea? Let&apos;s build it together.</h2>
              <p>Need a modern website for your business? Let&apos;s create a professional online presence.</p>
            </div>
            <Link className="button primary" href="/contact">Start a Project <ArrowRight size={16} /></Link>
          </div>
        </section>
      </Reveal>
    </PageReveal>
  );
}
