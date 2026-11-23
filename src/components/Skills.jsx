import { SKILL_CATEGORIES } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { TechIcon } from './TechIcons';
import './Skills.css';

export default function Skills() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="section section--tint">
      <div
        ref={sectionRef}
        className={`container reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="section-header section-header--center">
          <span className="section-eyebrow">Technical Skills</span>
          <h2 className="section-title">Technologies &amp; Developer Stack</h2>
          <p className="section-subtitle">
            Core languages, front-end frameworks, database systems, and emerging technologies I
            build with across academic and real-world projects.
          </p>
        </div>

        <div className="skills__categories">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.id} className="skills__group">
              <div className="skills__group-header">
                <h3>{category.title}</h3>
                <p>{category.subtitle}</p>
              </div>

              <div className="skills__grid">
                {category.skills.map((skill) => (
                  <article key={skill.name} className="skill-card">
                    <div className="skill-card__icon">
                      <TechIcon iconKey={skill.iconKey} />
                    </div>
                    <div className="skill-card__info">
                      <h4>{skill.name}</h4>
                      <span>{skill.tag}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
