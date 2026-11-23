import { useState } from 'react';
import { Calendar, Github, Layers, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const FILTER_CATEGORIES = ['All', 'Web & Full-Stack', 'IoT & Mobile', 'Python'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sectionRef, isVisible] = useScrollReveal();

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section section--white">
      <div
        ref={sectionRef}
        className={`container reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="projects__top">
          <div className="section-header projects__header">
            <span className="section-eyebrow">My Projects</span>
            <h2 className="section-title">Featured Academic &amp; Real-World Builds</h2>
            <p className="section-subtitle">
              Practical software solutions spanning full-stack web applications, IoT real-time
              monitoring, Android UI design, and Python development.
            </p>
          </div>

          <div className="projects__filters" role="tablist" aria-label="Filter projects by category">
            {FILTER_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeFilter === category}
                className={`projects__filter-btn ${activeFilter === category ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__media">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="project-card__image"
                  loading="lazy"
                />
                <div className="project-card__badges">
                  <span className="project-card__semester">
                    <Calendar size={13} />
                    {project.semester}
                  </span>
                  {project.status && (
                    <span className="project-card__status">
                      <Sparkles size={12} />
                      {project.status}
                    </span>
                  )}
                </div>
              </div>

              <div className="project-card__body">
                <span className="project-card__category">
                  <Layers size={13} />
                  {project.category}
                </span>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>

                <div className="project-card__tags" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-card__tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__github-banner">
          <div>
            <h3>Explore More Code &amp; Repositories</h3>
            <p>Visit my GitHub profile to follow my ongoing development work and experiments.</p>
          </div>
          <a
            href={PERSONAL_INFO.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <Github size={18} />
            <span>Visit GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}
