import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a
          href="#home"
          className="navbar__brand"
          onClick={() => handleLinkClick('home')}
          aria-label="Praveen T K Home"
        >
          <span className="navbar__logo-mark">PTK</span>
          <span className="navbar__brand-text">
            Praveen <span>T K</span>
          </span>
        </a>

        <nav className="navbar__nav" aria-label="Primary Navigation">
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`navbar__link ${activeSection === link.id ? 'is-active' : ''}`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download={PERSONAL_INFO.resumeFileName}
            className="btn btn--primary btn--sm navbar__resume-btn"
          >
            <Download size={15} />
            <span>Download Resume</span>
          </a>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-drawer__backdrop ${mobileOpen ? 'is-open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-nav-drawer"
        className={`mobile-drawer ${mobileOpen ? 'is-open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer__header">
          <span className="navbar__brand-text">
            Praveen <span>T K</span>
          </span>
          <button
            type="button"
            className="mobile-drawer__close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <ul className="mobile-drawer__list">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`mobile-drawer__link ${activeSection === link.id ? 'is-active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-drawer__footer">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download={PERSONAL_INFO.resumeFileName}
            className="btn btn--primary mobile-drawer__cta"
            onClick={() => setMobileOpen(false)}
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </div>
      </aside>
    </header>
  );
}
