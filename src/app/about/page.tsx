import type { Metadata } from "next";
import { PageReveal } from "@/components/PageReveal";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/profile";

export const metadata: Metadata = { title: "About", description: "About Khoun Sethapiseth, education, skills, and professional experience." };

const skillCategories = [
  ["Frontend Development", ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"]],
  ["Programming", ["Java", "JavaScript", "TypeScript"]],
  ["Backend and Database", ["Node.js", "Database Fundamentals"]],
  ["Development Tools", ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "DBeaver", "Microsoft Office"]],
  ["IT Fundamentals", ["Operating Systems", "Networking Basics", "Security and Backup"]],
  ["Creative Software", ["Adobe Photoshop", "Adobe Premiere Pro", "CapCut", "Canva"]],
  ["Soft Skills", ["Teamwork", "Communication", "Creativity"]],
];

export default function AboutPage() {
  return (
    <PageReveal>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">About me</span>
          <h1>Developer, problem solver, and lifelong learner.</h1>
          <p>Based in Phnom Penh, Cambodia.</p>
        </div>
      </header>
      <section className="section">
        <Reveal className="container about-grid">
          <article className="content-card">
            <span className="eyebrow">Profile</span>
            <h2>Hello, I&apos;m Sethapiseth.</h2>
            <p>
              Hello! I&apos;m Khoun Sethapiseth, an aspiring Software Developer based in Phnom Penh, Cambodia.
              I am currently pursuing a Bachelor&apos;s degree in Information Technology, majoring in Technology,
              at the Institute of Science and Technology Advanced Development.
            </p>
            <p>
              I have experience with Java, JavaScript, TypeScript, React, and Next.js through academic and personal
              development projects. I enjoy building interactive websites, solving programming problems, and continuously improving my technical skills.
            </p>
            <p>My goal is to become a professional Software Developer and contribute to meaningful real-world projects.</p>
          </article>
          <article className="content-card">
            <span className="eyebrow">Education</span>
            <h2>Bachelor of Information Technology</h2>
            <p><strong>Major:</strong> Technology</p>
            <p>Institute of Science and Technology Advanced Development</p>
            <p>2024 - Present</p>
            <hr style={{ border: 0, borderTop: "1px solid var(--line)", margin: "24px 0" }} />
            <h3 style={{ margin: "0 0 8px" }}>Previous Education</h3>
            <p>Chea Sim Takeo High School</p>
            <h3 style={{ margin: "24px 0 8px" }}>Languages</h3>
            <p>Khmer — Native<br />English — Intermediate</p>
          </article>
        </Reveal>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal className="container">
          <div className="section-head"><div><span className="eyebrow">Capabilities</span><h2 className="section-title">Technical skills.</h2></div></div>
          <div className="skill-categories">
            {skillCategories.map(([title, skills], index) => (
              <Reveal key={title as string} delay={index * 0.04}>
                <article className="skill-category">
                  <h3>{title as string}</h3>
                  <div className="badges">{(skills as string[]).map((skill) => <span className="badge" key={skill}>{skill}</span>)}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="section" style={{ paddingTop: 20 }}>
        <Reveal className="container">
          <div className="section-head"><div><span className="eyebrow">Career</span><h2 className="section-title">Professional experience.</h2></div></div>
          <div className="timeline">
            {experience.map((item, index) => (
              <Reveal key={item.position} delay={index * 0.06}>
                <article className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <span className="period">{item.period}</span>
                    <h3>{item.position}</h3>
                    <p style={{ color: "var(--muted)", margin: "4px 0" }}>{item.company}</p>
                    <ul>{item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>
    </PageReveal>
  );
}
