"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const filters = ["All Projects", "Web Development", "Java Development", "Other Projects"] as const;

export function ProjectGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All Projects");
  const visible = filter === "All Projects"
    ? projects
    : projects.filter((project) => project.category === (filter as ProjectCategory));

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            className={filter === item ? "filter-button active" : "filter-button"}
            type="button"
            key={item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {visible.map((project) => <ProjectCard project={project} key={project.slug} />)}
      </div>
    </>
  );
}
