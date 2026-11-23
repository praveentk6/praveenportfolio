import { useState } from 'react';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Terminal,
  GraduationCap,
  Code2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTypingEffect } from '../hooks/useTypingEffect';
import './Hero.css';

export default function Hero() {
  const typedRole = useTypingEffect(PERSONAL_INFO.typingRoles, 78, 42, 1650);
  const [photoAvailable, setPhotoAvailable] = useState(true);

  return (
    <section id="home" className="hero">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />

      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>Open to Software, React &amp; Full-Stack Developer Roles</span>
          </div>

          <h1 className="hero__title">
            Hi, I&apos;m <span className="hero__name-accent">{PERSONAL_INFO.name}</span>
          </h1>

          <p className="hero__subtitle">{PERSONAL_INFO.tagline}</p>

          <div className="hero__typing-box" aria-live="polite">
            <Terminal size={16} className="hero__typing-icon" />
            <span className="hero__typing-prefix">Role Focus:</span>
            <span className="hero__typing-text">{typedRole}</span>
            <span className="hero__cursor" aria-hidden="true" />
          </div>

          <blockquote className="hero__quote">
            &ldquo;{PERSONAL_INFO.quote}&rdquo;
          </blockquote>

          <div className="hero__cta-group">
            <a href="#projects" className="btn btn--primary">
              <span>View My Projects</span>
              <ArrowRight size={17} />
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download={PERSONAL_INFO.resumeFileName}
              className="btn btn--light"
            >
              <Download size={17} />
              <span>Download Resume</span>
            </a>
            <a href="#contact" className="btn btn--outline-dark">
              <Mail size={17} />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="hero__socials">
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Praveen T K GitHub Profile"
            >
              <Github size={19} />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Praveen T K LinkedIn Profile"
            >
              <Linkedin size={19} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__profile-card">
            <div className="hero__photo-ring">
              {photoAvailable ? (
                <img
                  src={PERSONAL_INFO.profilePhotoUrl}
                  alt="Praveen T K profile photo"
                  className="hero__photo"
                  onError={() => setPhotoAvailable(false)}
                />
              ) : (
                <div
                  className="hero__monogram-fallback"
                  role="img"
                  aria-label="Praveen T K profile portrait placeholder"
                >
                  <svg
                    viewBox="0 0 240 240"
                    className="hero__monogram-svg"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="ptkBg" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#10254b" />
                        <stop offset="55%" stopColor="#1d4ed8" />
                        <stop offset="100%" stopColor="#0a162d" />
                      </linearGradient>
                      <radialGradient id="ptkGlow" cx="50%" cy="35%" r="55%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="240" height="240" fill="url(#ptkBg)" />
                    <rect width="240" height="240" fill="url(#ptkGlow)" />
                    <circle
                      cx="120"
                      cy="120"
                      r="94"
                      fill="none"
                      stroke="rgba(255,255,255,0.16)"
                      strokeWidth="1.5"
                      strokeDasharray="6 6"
                    />
                    <text
                      x="120"
                      y="132"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontFamily="Plus Jakarta Sans, Inter, sans-serif"
                      fontWeight="800"
                      fontSize="58"
                      letterSpacing="2"
                    >
                      PTK
                    </text>
                    <text
                      x="120"
                      y="164"
                      textAnchor="middle"
                      fill="#bae6fd"
                      fontFamily="JetBrains Mono, monospace"
                      fontWeight="500"
                      fontSize="11.5"
                      letterSpacing="2.4"
                    >
                      PRAVEEN T K
                    </text>
                  </svg>
                </div>
              )}
            </div>

            <div className="hero__profile-meta">
              <div className="hero__profile-pill">
                <GraduationCap size={16} />
                <span>MCA · Kongu Engineering College</span>
              </div>
              <div className="hero__profile-pill">
                <Code2 size={16} />
                <span>React.js · Python · MongoDB · Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
