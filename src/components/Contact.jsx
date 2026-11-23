import { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(values) {
  const errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }
  if (!values.email.trim() || !EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.subject.trim() || values.subject.trim().length < 3) {
    errors.subject = 'Please enter a subject (at least 3 characters).';
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Please enter a message (at least 10 characters).';
  }
  return errors;
}

export default function Contact() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submittedPayload, setSubmittedPayload] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (submittedPayload) {
      setSubmittedPayload(null);
      setCopied(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedPayload(null);
      return;
    }

    setErrors({});
    setSubmittedPayload({
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    });
    setCopied(false);
  };

  const buildMailtoHref = (payload) => {
    const body = `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`;
    return `mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(
      payload.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleCopyMessage = async () => {
    if (!submittedPayload) return;
    const text = `To: ${PERSONAL_INFO.contact.email}\nSubject: ${submittedPayload.subject}\nFrom: ${submittedPayload.name} (${submittedPayload.email})\n\n${submittedPayload.message}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section section--white">
      <div
        ref={sectionRef}
        className={`container reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="section-header section-header--center">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="section-subtitle">
            Interested in hiring for Software Developer, React.js Developer, or Full-Stack
            Developer roles? Reach out directly via phone, email, or the validated form below.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info-panel">
            <h3>Contact Information</h3>
            <p className="contact__info-lead">
              Direct channels to reach {PERSONAL_INFO.name} for opportunities, collaborations, or
              technical discussions.
            </p>

            <div className="contact__cards">
              <a href={`tel:${PERSONAL_INFO.contact.phone}`} className="contact__detail-card">
                <span className="contact__detail-icon">
                  <Phone size={19} />
                </span>
                <div>
                  <span className="contact__detail-label">Phone</span>
                  <strong className="contact__detail-value">{PERSONAL_INFO.contact.phone}</strong>
                </div>
              </a>

              <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="contact__detail-card">
                <span className="contact__detail-icon">
                  <Mail size={19} />
                </span>
                <div>
                  <span className="contact__detail-label">Email</span>
                  <strong className="contact__detail-value">{PERSONAL_INFO.contact.email}</strong>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__detail-card"
              >
                <span className="contact__detail-icon">
                  <Github size={19} />
                </span>
                <div>
                  <span className="contact__detail-label">GitHub</span>
                  <strong className="contact__detail-value">github.com/praveentk6</strong>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__detail-card"
              >
                <span className="contact__detail-icon">
                  <Linkedin size={19} />
                </span>
                <div>
                  <span className="contact__detail-label">LinkedIn</span>
                  <strong className="contact__detail-value">linkedin.com/in/praveen-t-k309351285</strong>
                </div>
              </a>
            </div>
          </div>

          <div className="contact__form-panel">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-row">
                <div className="form-field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="contact-name-error" className="form-field__error" role="alert">
                      <AlertCircle size={14} />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="contact-email-error" className="form-field__error" role="alert">
                      <AlertCircle size={14} />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Role inquiry or project collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                />
                {errors.subject && (
                  <span id="contact-subject-error" className="form-field__error" role="alert">
                    <AlertCircle size={14} />
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                />
                {errors.message && (
                  <span id="contact-message-error" className="form-field__error" role="alert">
                    <AlertCircle size={14} />
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn btn--primary contact__submit">
                <Send size={17} />
                <span>Send Message</span>
              </button>

              {submittedPayload && (
                <div className="contact__feedback" role="status" aria-live="polite">
                  <div className="contact__feedback-header">
                    <CheckCircle2 size={19} />
                    <strong>Message Validated — Ready to Send via Email</strong>
                  </div>
                  <p>
                    This portfolio is currently hosted as a static site without a configured
                    backend email server, so your message was <strong>not</strong> sent
                    automatically. Use the button below to launch your email client with your
                    message pre-filled, or copy the details directly.
                  </p>
                  <div className="contact__feedback-actions">
                    <a
                      href={buildMailtoHref(submittedPayload)}
                      className="btn btn--primary btn--sm"
                    >
                      <ExternalLink size={15} />
                      <span>Open in Email App</span>
                    </a>
                    <button
                      type="button"
                      className="btn btn--outline-light btn--sm"
                      onClick={handleCopyMessage}
                    >
                      <Copy size={15} />
                      <span>{copied ? 'Copied!' : 'Copy Message'}</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
