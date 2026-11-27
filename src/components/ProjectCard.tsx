"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import type { PointerEvent } from "react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    event.currentTarget.style.setProperty("--tilt-x", `${(0.5 - y) * 5}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${(x - 0.5) * 5}deg`);
  }

  function resetTilt(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <article className="project-card" onPointerMove={onPointerMove} onPointerLeave={resetTilt}>
      <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
        <div className={`project-preview ${project.accent}`}>
          {project.screenshot ? (
            <div className="project-screenshot">
              <Image
                src={project.screenshot}
                alt={`${project.title} project screenshot`}
                fill
                sizes="(max-width: 620px) calc(100vw - 32px), 380px"
              />
            </div>
          ) : (
            <div className="preview-window"><i /></div>
          )}
        </div>
      </Link>
      <div className="project-body">
        <span className="eyebrow">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="badges">
          {project.technologies.map((technology) => <span className="badge" key={technology}>{technology}</span>)}
        </div>
        <div className="project-links">
          <Link className="text-link" href={`/projects/${project.slug}`}>
            View Project <ArrowUpRight size={15} />
          </Link>
          <div className="badges">
            {project.liveUrl && (
              <a className="icon-button" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="Live demo">
                <ExternalLink size={15} />
              </a>
            )}
            {project.githubUrl && (
              <a className="icon-button" href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub repository">
                <GitBranch size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
