import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Download, ExternalLink, GitBranch } from "lucide-react";
import { notFound } from "next/navigation";
import { PageReveal } from "@/components/PageReveal";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? project.title : "Project", description: project?.description };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const related = projects.filter((item) => item.slug !== project.slug);

  return (
    <PageReveal>
      <section className="detail-hero">
        <Reveal className="container">
          <Link className="text-link" href="/projects"><ArrowLeft size={15} /> Back to projects</Link>
          <h1>{project.title}</h1>
          <div className="badges">{project.technologies.map((technology) => <span className="badge" key={technology}>{technology}</span>)}</div>
        </Reveal>
      </section>
      <section className="container">
        <div className={`detail-preview ${project.accent}`}>
          {project.screenshot ? (
            <div className="detail-screenshot">
              <Image
                src={project.screenshot}
                alt={`${project.title} project screenshot`}
                fill
                sizes="(max-width: 620px) calc(100vw - 32px), 1180px"
                priority
              />
            </div>
          ) : (
            <div className="preview-window"><i /></div>
          )}
        </div>
      </section>
      {project.showcaseVideo && (
        <section className="container showcase-section">
          <div className="showcase-heading">
            <span className="eyebrow">Gameplay showcase</span>
            <h2>See it in action.</h2>
          </div>
          <video
            className="showcase-video"
            controls
            playsInline
            preload="metadata"
            poster={project.screenshot}
          >
            <source src={project.showcaseVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      )}
      <section className="section">
        <Reveal className="container detail-grid">
          <div>
            <article className="detail-card" style={{ marginBottom: 16 }}>
              <span className="eyebrow">Overview</span>
              <h2>Project overview</h2>
              <p>{project.overview}</p>
            </article>
            <article className="detail-card" style={{ marginBottom: 16 }}>
              <h2>My contributions</h2>
              <ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
          <aside>
            <article className="detail-card" style={{ marginBottom: 16 }}>
              <h2>Objectives</h2>
              <ul>{project.objectives.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className="detail-card">
              <h2>Links</h2>
              {project.liveUrl && <p><a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a></p>}
              {project.githubUrl ? <p><a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <GitBranch size={14} /></a></p> : <p style={{ fontSize: 13 }}>Repository link not provided.</p>}
              {project.downloadUrl && <p><a className="text-link" href={project.downloadUrl} download>Download game <Download size={14} /></a></p>}
            </article>
          </aside>
        </Reveal>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal className="container">
          <div className="section-head"><div><span className="eyebrow">Continue exploring</span><h2 className="section-title">Related projects.</h2></div></div>
          <div className="projects-grid">{related.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.06}>
              <article className="project-card">
                <Link href={`/projects/${item.slug}`}>
                  <div className={`project-preview ${item.accent}`}>
                    {item.screenshot ? (
                      <div className="project-screenshot">
                        <Image src={item.screenshot} alt={`${item.title} project screenshot`} fill sizes="(max-width: 620px) calc(100vw - 32px), 380px" />
                      </div>
                    ) : (
                      <div className="preview-window"><i /></div>
                    )}
                  </div>
                </Link>
                <div className="project-body"><h3>{item.title}</h3><Link className="text-link" href={`/projects/${item.slug}`}>View project</Link></div>
              </article>
            </Reveal>
          ))}</div>
        </Reveal>
      </section>
    </PageReveal>
  );
}
