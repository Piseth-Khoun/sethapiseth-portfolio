import Link from "next/link";
import { ArrowRight, Download, GitBranch, Briefcase } from "lucide-react";
import { PageReveal } from "@/components/PageReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { profile, experience } from "@/data/profile";

export default function Home() {
  return (
    <PageReveal>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Hello, I&apos;m Khoun Sethapiseth</span>
            <h1>Turning ideas into <span>digital experiences.</span></h1>
            <p className="hero-role">Junior Frontend Developer</p>
            <p className="hero-description">
              I build modern, responsive, and user-friendly websites and applications using modern frontend technologies.
              I enjoy solving problems, exploring new technologies, and transforming creative ideas into functional digital experiences.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/projects">Explore My Work <ArrowRight size={16} /></Link>
              <Link className="button" href="/contact">Let&apos;s Work Together</Link>
              <Link className="button" href="/cv"><Download size={16} /> Download CV</Link>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch size={17} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Briefcase size={17} /></a>
            </div>
          </div>
          <div className="portrait-wrap" aria-label="Creative monogram portrait">
            <div className="floating-tag tag-one">React / Next.js</div>
            <div className="portrait-orbit"><div className="portrait" /></div>
            <div className="floating-tag tag-two">Frontend Developer</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Selected work</span><h2 className="section-title">Featured projects.</h2></div>
            <Link className="text-link" href="/projects">View all projects <ArrowRight size={15} /></Link>
          </div>
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><div><span className="eyebrow">Technical toolkit</span><h2 className="section-title">Skills & tools.</h2></div></div>
          <div className="skills-strip">
            {["Java", "JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Git", "GitHub"].map((skill) => (
              <div className="skill-item" key={skill}>{skill}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Professional journey</span><h2 className="section-title">Experience.</h2></div>
            <Link className="text-link" href="/about">More about me <ArrowRight size={15} /></Link>
          </div>
          <div className="experience-preview">
            {experience.map((item) => (
              <article className="experience-card" key={item.position}>
                <span>{item.period}</span>
                <h3>{item.position}</h3>
                <p>{item.company}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container cta">
        <div className="cta-inner">
          <div>
            <span className="eyebrow">Start a conversation</span>
            <h2>Have an idea? Let&apos;s build it together.</h2>
            <p>Need a modern website for your business? Let&apos;s create a professional online presence.</p>
          </div>
          <Link className="button primary" href="/contact">Start a Project <ArrowRight size={16} /></Link>
        </div>
      </section>
    </PageReveal>
  );
}
