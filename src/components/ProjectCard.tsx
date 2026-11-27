import Link from "next/link";
import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
        <div className={`project-preview ${project.accent}`}>
          <div className="preview-window"><i /></div>
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
