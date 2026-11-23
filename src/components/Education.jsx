import { Calendar, GraduationCap, School } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

export default function Education() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="education" className="section section--tint">
      <div
        ref={sectionRef}
        className={`container reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="section-header section-header--center">
          <span className="section-eyebrow">Education</span>
          <h2 className="section-title">Academic Journey</h2>
          <p className="section-subtitle">
            Building a strong theoretical and practical foundation in software systems and computer
            applications.
          </p>
        </div>

        <div className="timeline">
          {EDUCATION.map((item) => {
            const isCollege = item.institution.includes('College');
            return (
              <article
                key={`${item.degree}-${item.period}`}
                className={`timeline__item ${item.isCurrent ? 'timeline__item--current' : ''}`}
              >
                <div className="timeline__marker" aria-hidden="true">
                  {isCollege ? <GraduationCap size={18} /> : <School size={18} />}
                </div>

                <div className="timeline__card">
                  <div className="timeline__meta">
                    <span className="timeline__period">
                      <Calendar size={14} />
                      {item.period}
                    </span>
                    <span
                      className={`timeline__badge ${
                        item.isCurrent ? 'timeline__badge--current' : ''
                      }`}
                    >
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="timeline__degree">{item.degree}</h3>
                  <p className="timeline__institution">{item.institution}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
