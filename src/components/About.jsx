import { Cloud, Layers, Layout, GraduationCap, FolderGit2, Award } from 'lucide-react';
import { AREAS_OF_INTEREST, PERSONAL_INFO } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const INTEREST_ICONS = {
  cloud: Cloud,
  layers: Layers,
  layout: Layout,
};

const PROFILE_HIGHLIGHTS = [
  {
    icon: GraduationCap,
    label: 'Current Degree',
    value: 'MCA (2026–2028)',
    detail: 'Kongu Engineering College',
  },
  {
    icon: Award,
    label: 'Undergraduate',
    value: 'B.Sc. Software Systems',
    detail: 'CGPA: 7.51 · 2023–2026',
  },
  {
    icon: FolderGit2,
    label: 'Academic & Real-World Work',
    value: '6 Featured Projects',
    detail: 'Web, IoT, Mobile & Python',
  },
];

export default function About() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="about" className="section section--white">
      <div
        ref={sectionRef}
        className={`container reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="section-header">
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">Building Reliable, Modern Software Solutions</h2>
        </div>

        <div className="about__grid">
          <div className="about__bio-card">
            <p className="about__bio-text">{PERSONAL_INFO.about}</p>
            <div className="about__highlights">
              {PROFILE_HIGHLIGHTS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.label} className="about__highlight-item">
                    <div className="about__highlight-icon">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <span className="about__highlight-label">{item.label}</span>
                      <strong className="about__highlight-value">{item.value}</strong>
                      <span className="about__highlight-detail">{item.detail}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="about__interests">
            <div className="about__interests-header">
              <h3>Area of Interest</h3>
              <p>Focused domains I actively study and build projects in</p>
            </div>

            <div className="about__interest-cards">
              {AREAS_OF_INTEREST.map((interest) => {
                const IconComponent = INTEREST_ICONS[interest.icon] || Layers;
                return (
                  <article key={interest.title} className="interest-card">
                    <div className="interest-card__icon">
                      <IconComponent size={22} />
                    </div>
                    <div className="interest-card__body">
                      <h4>{interest.title}</h4>
                      <p>{interest.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
