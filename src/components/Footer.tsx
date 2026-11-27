import Link from "next/link";
import { GitBranch, Briefcase, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Link className="footer-brand" href="/">K.S.</Link>
          <p>Creative developer crafting responsive digital experiences.</p>
        </div>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Briefcase size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Khoun Sethapiseth</span>
        <span>Phnom Penh, Cambodia</span>
      </div>
    </footer>
  );
}
