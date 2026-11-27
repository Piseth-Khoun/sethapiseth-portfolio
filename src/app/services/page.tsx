import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageReveal } from "@/components/PageReveal";
import { Reveal } from "@/components/Reveal";
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
        <Reveal className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <article className="service-card">
                  <div>
                    <div className="service-card-top">
                      <span className="service-number">{service.number}</span>
                      <span className="service-icon" aria-hidden="true"><ArrowRight size={19} /></span>
                    </div>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                  <div>
                    <div className="badges">{service.technologies.map((technology) => <span className="badge" key={technology}>{technology}</span>)}</div>
                    <Link className="service-link" href="/contact">Discuss this service <ArrowRight size={15} /></Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
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
