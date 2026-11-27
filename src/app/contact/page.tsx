import type { Metadata } from "next";
import { GitBranch, Briefcase, Mail, MapPin, Phone } from "lucide-react";
import { PageReveal } from "@/components/PageReveal";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Contact", description: "Contact Khoun Sethapiseth about developer opportunities or freelance projects." };

export default function ContactPage() {
  return (
    <PageReveal>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1>Let&apos;s talk about your next project.</h1>
          <p>I&apos;m interested in developer opportunities, internships, collaborations, and freelance website projects. If you have an idea or opportunity, I&apos;d love to hear from you.</p>
        </div>
      </header>
      <section className="section">
        <Reveal className="container contact-grid">
          <aside className="contact-info">
            <div className="contact-item"><i><Mail size={16} /></i><div><span>Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div></div>
            <div className="contact-item"><i><Phone size={16} /></i><div><span>Phone</span><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></div></div>
            <div className="contact-item"><i><MapPin size={16} /></i><div><span>Location</span><strong>{profile.location}</strong></div></div>
            <div className="contact-item"><i><GitBranch size={16} /></i><div><span>GitHub</span><a href={profile.github} target="_blank" rel="noreferrer">Piseth-Khoun</a></div></div>
            <div className="contact-item"><i><Briefcase size={16} /></i><div><span>LinkedIn</span><a href={profile.linkedin} target="_blank" rel="noreferrer">Khoun Sethapiseth</a></div></div>
          </aside>
          <ContactForm />
        </Reveal>
      </section>
    </PageReveal>
  );
}
