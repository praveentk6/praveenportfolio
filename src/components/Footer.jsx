import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">PTK</span>
          <div>
            <h2 className="footer__name">{PERSONAL_INFO.name}</h2>
            <p className="footer__tagline">Full-Stack Developer Portfolio</p>
          </div>
        </div>

        <div className="footer__socials" aria-label="Social Links">
          <a
            href={PERSONAL_INFO.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-btn"
            aria-label="GitHub"
          >
            <Github size={19} />
          </a>
          <a
            href={PERSONAL_INFO.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-btn"
            aria-label="LinkedIn"
          >
            <Linkedin size={19} />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.contact.email}`}
            className="footer__social-btn"
            aria-label="Email"
          >
            <Mail size={19} />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <p className="footer__note">Built with React.js</p>
      </div>
    </footer>
  );
}
