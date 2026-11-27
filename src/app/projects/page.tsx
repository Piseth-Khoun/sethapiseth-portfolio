import type { Metadata } from "next";
import { PageReveal } from "@/components/PageReveal";
import { Reveal } from "@/components/Reveal";
import { ProjectGallery } from "@/components/ProjectGallery";

export const metadata: Metadata = { title: "Projects", description: "Explore selected frontend, web, and Java development projects." };

export default function ProjectsPage() {
  return (
    <PageReveal>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Portfolio</span>
          <h1>Selected projects.</h1>
          <p>A collection of web and software projects focused on responsive interfaces, practical functionality, and continuous learning.</p>
        </div>
      </header>
      <section className="section">
        <Reveal className="container"><ProjectGallery /></Reveal>
      </section>
    </PageReveal>
  );
}
