import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRightCircle, Sparkles, Building2, Layers } from 'lucide-react';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';

export const ExperiencePage = ({ onOpenResume }) => {
  return (
    <div className="page-wrapper experience-page">
      {/* PAGE HEADER */}
      <section className="page-hero-header">
        <div className="container">
          <SectionHeader
            badge="Career History"
            title="Demonstrated Operational & Administrative Impact"
            subtitle="Hands-on experience driving executive support, cross-functional team liaison, and remote workflow optimization."
          />
        </div>
      </section>

      {/* DETAILED TIMELINE SECTION */}
      <section className="section-padding">
        <div className="container">
          <div className="experience-timeline-tree">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className="exp-tree-item">
                <div className="exp-tree-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>

                <div className="exp-tree-card">
                  <div className="exp-tree-card-header">
                    <div className="role-and-company">
                      <span className="exp-badge-index">Position 0{index + 1}</span>
                      <h3 className="exp-role-title">{exp.role}</h3>
                      <div className="exp-company-sub">
                        <Building2 size={16} />
                        <span className="font-semibold">{exp.company}</span>
                        <span className="bullet-sep">&bull;</span>
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="exp-period-pill">
                      <Calendar size={15} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="exp-tree-card-body">
                    <p className="exp-summary-text">{exp.summary}</p>

                    <div className="exp-key-contributions">
                      <h4 className="contrib-title">Key Responsibilities & Measurable Impact:</h4>
                      <ul className="contrib-list">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx}>
                            <ArrowRightCircle size={17} className="accent-icon flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="exp-tags-container">
                      <span className="tags-label">Areas & Core Skills:</span>
                      <div className="tags-flex">
                        {exp.tags.map((tag, idx) => (
                          <span key={idx} className="skill-tag-badge">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cv-download-banner">
            <div className="cv-banner-text">
              <h3>Need the Complete Printable CV?</h3>
              <p>View the full summary with all credentials, academic history, and complete references.</p>
            </div>
            <button onClick={onOpenResume} className="btn btn-primary btn-lg">
              <span>View & Print Official CV</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
