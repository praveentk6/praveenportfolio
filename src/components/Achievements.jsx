import { Presentation, MapPin, Trophy } from 'lucide-react';
import { PAPER_PRESENTATIONS } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Achievements.css';

export default function Achievements() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="achievements" className="section section--tint">
      <div
        ref={sectionRef}
        className={`container reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="section-header section-header--center">
          <span className="section-eyebrow">Achievements &amp; Paper Presentations</span>
          <h2 className="section-title">Technical Paper Presentations</h2>
          <p className="section-subtitle">
            Academic symposium presentations sharing research and perspectives on modern software
            and emerging computing technologies.
          </p>
        </div>

        <div className="achievements__grid">
          {PAPER_PRESENTATIONS.map((item) => (
            <article key={item.title} className="achievement-card">
              <div className="achievement-card__icon">
                <Presentation size={24} />
              </div>

              <div className="achievement-card__content">
                <span className="achievement-card__tag">
                  <Trophy size={13} />
                  {item.type}
                </span>
                <h3 className="achievement-card__title">{item.title}</h3>
                <p className="achievement-card__venue">
                  <MapPin size={15} />
                  <span>{item.venue}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
