import { Award, Calendar, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Certifications.css';

export default function Certifications() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="certifications" className="section section--navy">
      <div
        ref={sectionRef}
        className={`container reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="section-header section-header--center">
          <span className="section-eyebrow">Certifications</span>
          <h2 className="section-title">Cloud &amp; AI Credentials</h2>
          <p className="section-subtitle">
            Industry-aligned certifications demonstrating knowledge in cloud AI services, machine
            learning, and generative AI fundamentals.
          </p>
        </div>

        <div className="certifications__grid">
          {CERTIFICATIONS.map((cert) => (
            <article key={cert.title} className="cert-card">
              <div className="cert-card__header">
                <div className="cert-card__icon">
                  <Award size={24} />
                </div>
                <span className="cert-card__issuer">
                  <ShieldCheck size={14} />
                  {cert.issuer}
                </span>
              </div>

              <h3 className="cert-card__title">{cert.title}</h3>
              <p className="cert-card__description">{cert.description}</p>

              <div className="cert-card__footer">
                <span className="cert-card__date">
                  <Calendar size={14} />
                  {cert.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
