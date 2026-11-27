import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageReveal } from "@/components/PageReveal";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services", description: "Freelance web design and frontend development services." };

export default function ServicesPage() {
  return (
    <PageReveal>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Freelance services</span>
          <h1>Let&apos;s build your next website.</h1>
          <p>I help businesses establish a professional online presence through modern, responsive, and user-friendly websites.</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div>
                  <span className="service-number">{service.number}</span>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
                <div className="badges">{service.technologies.map((technology) => <span className="badge" key={technology}>{technology}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container cta">
        <div className="cta-inner">
          <div><span className="eyebrow">Project inquiry</span><h2>Ready to start something?</h2><p>Tell me about your business, idea, or website project.</p></div>
          <Link className="button primary" href="/contact">Contact Me <ArrowRight size={16} /></Link>
        </div>
      </section>
    </PageReveal>
  );
}
