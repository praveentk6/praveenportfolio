import { Briefcase, Calendar, Clock } from 'lucide-react';
import { INTERNSHIPS } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Internships.css';

export default function Internships() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="internships" className="section section--white">
      <div
        ref={sectionRef}
        className={`container reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="section-header section-header--center">
          <span className="section-eyebrow">Internships</span>
          <h2 className="section-title">Practical Experience &amp; Exposure</h2>
          <p className="section-subtitle">
            Hands-on internship programs strengthening web development and analytical foundations.
          </p>
        </div>

        <div className="internships__grid">
          {INTERNSHIPS.map((item) => (
            <article key={`${item.organization}-${item.period}`} className="internship-card">
              <div className="internship-card__top">
                <div className="internship-card__icon">
                  <Briefcase size={22} />
                </div>
                <span className="internship-card__duration">
                  <Clock size={14} />
                  {item.duration}
                </span>
              </div>

              <h3 className="internship-card__org">{item.organization}</h3>
              <p className="internship-card__role">{item.role}</p>

              <div className="internship-card__footer">
                <span className="internship-card__date">
                  <Calendar size={14} />
                  {item.period}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
