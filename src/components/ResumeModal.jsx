import React from 'react';
import { X, Printer, Phone, Mail, MapPin, Building2, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, TOOLS_DATA } from '../data/portfolioData';
import margrethPhoto from '../assets/margreth.png';

export const ResumeModal = ({ isOpen, onClose, onShowToast }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose} aria-modal="true" role="dialog">
      <div className="modal-card resume-modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <h3 className="modal-title">Official Curriculum Vitae</h3>
            <span className="modal-subtitle">{PERSONAL_INFO.name} — {PERSONAL_INFO.role}</span>
          </div>
          <div className="modal-header-actions">
            <button className="btn btn-sm btn-secondary" onClick={handlePrint} title="Print or Save PDF">
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-body printable-cv">
          {/* Header */}
          <div className="cv-header cv-header-flex">
            <img src={margrethPhoto} alt={PERSONAL_INFO.name} className="cv-avatar-img" />
            <div className="cv-header-text">
              <h1 className="cv-name">{PERSONAL_INFO.name.toUpperCase()}</h1>
              <p className="cv-title">{PERSONAL_INFO.role}</p>
              <div className="cv-contact-row">
                <span><Phone size={14} /> +234 814 801 3690</span>
                <span className="bullet-sep">&bull;</span>
                <span><Mail size={14} /> {PERSONAL_INFO.email}</span>
                <span className="bullet-sep">&bull;</span>
                <span><MapPin size={14} /> {PERSONAL_INFO.location} (Remote)</span>
              </div>
            </div>
          </div>

          <hr className="cv-divider" />

          {/* Summary */}
          <div className="cv-section">
            <h2 className="cv-section-title">SUMMARY</h2>
            <p className="cv-text">{PERSONAL_INFO.bio}</p>
          </div>

          {/* Work Experience */}
          <div className="cv-section">
            <h2 className="cv-section-title">WORK EXPERIENCE</h2>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="cv-exp-block">
                <div className="cv-exp-header">
                  <strong>{exp.role}, {exp.company}</strong>
                  <span className="cv-date">{exp.period}</span>
                </div>
                <ul className="cv-bullet-list">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="cv-section">
            <h2 className="cv-section-title">EDUCATION</h2>
            <div className="cv-exp-header">
              <strong>{EDUCATION.degree} — {EDUCATION.institution}</strong>
            </div>
            <ul className="cv-bullet-list">
              <li>Major in {EDUCATION.major}</li>
              <li>Final CGPA: {EDUCATION.cgpa} ({EDUCATION.honors})</li>
            </ul>
          </div>

          {/* Tools & Key Skills */}
          <div className="cv-section cv-grid-two">
            <div>
              <h2 className="cv-section-title">TOOLS</h2>
              <p className="cv-text">
                {TOOLS_DATA.map(t => t.name).join(', ')}
              </p>
            </div>
            <div>
              <h2 className="cv-section-title">KEY SKILLS</h2>
              <p className="cv-text">
                Client Acquisition, B2B Sales, Negotiation Skills, Relationship Management, Problem-Solving, Time Management, Market Analysis, Calendar Coordination.
              </p>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
          <a
            href={`https://wa.me/${PERSONAL_INFO.whatsappIntl}?text=Hi%20Margreth,%20I'm%20reaching%20out%20after%20reviewing%20your%20CV.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Hire Margreth Directly
          </a>
        </div>
      </div>
    </div>
  );
};
