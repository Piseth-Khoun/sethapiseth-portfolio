import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { PageReveal } from "@/components/PageReveal";
import { profile } from "@/data/profile";
import { existsSync } from "node:fs";
import path from "node:path";

export const metadata: Metadata = { title: "CV", description: "View and download the CV of Khoun Sethapiseth." };

export default function CVPage() {
  const cvAvailable = existsSync(path.join(process.cwd(), "public", "cv", "Khoun-Sethapiseth-CV.pdf"));
  return (
    <PageReveal>
      <header className="page-hero">
        <div className="container">
          <Link className="text-link" href="/"><ArrowLeft size={15} /> Back to home</Link>
          <h1 style={{ marginTop: 24 }}>Curriculum Vitae.</h1>
        </div>
      </header>
      <section className="section">
        <div className="container cv-card">
          <div className="cv-preview">
            <div className="cv-sheet">
              <h2>{profile.name}</h2>
              <p>{profile.title} — Phnom Penh, Cambodia</p>
              <hr />
              <p><strong>Frontend Development</strong><br />React, Next.js, TypeScript, JavaScript, HTML, CSS, and Tailwind CSS</p>
              <p><strong>Additional Experience</strong><br />Java, Git, GitHub, Adobe Premiere Pro, and CapCut</p>
              <p><strong>Education</strong><br />Bachelor of Information Technology, Institute of Science and Technology Advanced Development</p>
            </div>
          </div>
          <aside className="detail-card">
            <span className="eyebrow">Download</span>
            <h2>PDF CV</h2>
            {cvAvailable ? (
              <>
                <p>Download a PDF copy of the complete CV.</p>
                <a className="button primary" href="/cv/Khoun-Sethapiseth-CV.pdf" download="Khoun-Sethapiseth-CV.pdf">
                  <Download size={16} /> Download CV
                </a>
              </>
            ) : (
              <p>The PDF CV has not been added yet. Add <code>public/cv/Khoun-Sethapiseth-CV.pdf</code> to enable direct download.</p>
            )}
          </aside>
        </div>
      </section>
    </PageReveal>
  );
}
