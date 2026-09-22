import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Briefcase, FileText, ArrowRight, CheckCircle2, Clock, MapPin, MessageCircle, Mail, ChevronRight, Layers, Users, Calendar, ShieldCheck, Award } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SERVICES, TOOLS_DATA, EDUCATION } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import margrethPhoto from '../assets/margreth.png';

export const HomePage = ({ onOpenResume }) => {
  const [timeString, setTimeString] = useState('');

  // Live Clock for Lagos WAT (GMT+1)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTimeString(now.toLocaleTimeString('en-US', options) + ' WAT (GMT+1)');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-wrapper home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-ambient-glow"></div>
        <div className="hero-grid-lines"></div>

        <div className="container hero-container">
          <div className="hero-left-column">
            {/* Live Availability Badge */}
            <div className="availability-chip animate-fade-in">
              <span className="live-status-dot"></span>
              <span>Available for Remote & Full-time Roles</span>
            </div>

            <h1 className="hero-main-title">
              Executive Virtual Assistant & <span className="text-gradient">Operations Partner</span>
            </h1>

            <p className="hero-bio-lead">
              Organized, dependable, and commercial-minded administrative partner with proven experience supporting executives, social media presence, cross-functional teams of <strong>20+ employees</strong>, and scaling businesses. I turn operational friction into effortless execution.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <Sparkles size={18} />
                <span>Hire Margreth</span>
              </Link>
              <Link to="/experience" className="btn btn-secondary btn-lg">
                <Briefcase size={18} />
                <span>Explore Work</span>
              </Link>
              <button onClick={onOpenResume} className="btn btn-outline btn-lg">
                <FileText size={18} />
                <span>View CV</span>
              </button>
            </div>

            {/* Impact Metric Counters */}
            <div className="hero-stats-row">
              <div className="stat-card">
                <span className="stat-number">20+</span>
                <span className="stat-label">Team Members Supported</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">3.90</span>
                <span className="stat-label">BBA Academic CGPA</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Remote Ready</span>
              </div>
            </div>
          </div>

          <div className="hero-right-column">
            {/* Executive Profile Showcase Card */}
            <div className="glass-showcase-card">
              <div className="showcase-header">
                <div className="status-pill">
                  <span className="live-status-dot"></span>
                  <span>Active & In Office</span>
                </div>
                <div className="clock-pill">
                  <Clock size={14} />
                  <span>{timeString || '10:00 AM WAT'}</span>
                </div>
              </div>

              <div className="showcase-avatar-wrap">
                <img
                  src={margrethPhoto}
                  alt={PERSONAL_INFO.name}
                  className="showcase-avatar-img"
                />
                <div className="avatar-pulse-ring"></div>
                <div className="showcase-avatar-badge" title="Active & Available">
                  <span className="live-status-dot"></span>
                </div>
              </div>

              <h2 className="showcase-name">{PERSONAL_INFO.name}</h2>
              <p className="showcase-role">{PERSONAL_INFO.role}</p>
              <p className="showcase-loc">
                <MapPin size={14} />
                <span>{PERSONAL_INFO.location} &bull; Remote Worldwide</span>
              </p>

              <div className="showcase-skills-chips">
                <span className="skill-chip"><CheckCircle2 size={13} /> Calendar & Travel Management</span>
                <span className="skill-chip"><CheckCircle2 size={13} /> Social Media Management</span>
                <span className="skill-chip"><CheckCircle2 size={13} /> HubSpot CRM Operations</span>
                <span className="skill-chip"><CheckCircle2 size={13} /> Inbox Zero Mastery</span>
                <span className="skill-chip"><CheckCircle2 size={13} /> Cross-Department Liaison</span>
              </div>

              <div className="showcase-direct-actions">
                <a
                  href={`https://wa.me/2348148013690?text=Hi%20Margreth`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-contact-btn wa"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp: 08148013690</span>
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Virtual%20Assistant%20Inquiry`}
                  className="showcase-contact-btn email"
                >
                  <Mail size={16} />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUE PILLARS */}
      <section className="section-padding value-pillars-section">
        <div className="container">
          <SectionHeader
            badge="Why Work With Margreth"
            title="Strategic Support Built for High-Growth Leaders"
            subtitle="Bridging business strategy with reliable day-to-day administrative execution."
          />

          <div className="pillars-grid">
            <div className="pillar-feature-card">
              <div className="pillar-icon-circle"><ShieldCheck size={24} /></div>
              <h3>Confidentiality & Discretion</h3>
              <p>Trusted handling of high-level executive schedules, sensitive emails, board materials, and private company records with absolute discretion.</p>
            </div>
            <div className="pillar-feature-card">
              <div className="pillar-icon-circle"><Clock size={24} /></div>
              <h3>Independent & Proactive</h3>
              <p>Self-driven with minimal supervision. I identify bottlenecks early, create structured SOPs, and present thoughtful solutions rather than questions.</p>
            </div>
            <div className="pillar-feature-card">
              <div className="pillar-icon-circle"><Users size={24} /></div>
              <h3>Cross-Functional Team Bridge</h3>
              <p>Proven track record of supporting 20+ member teams at Nerdbug, facilitating seamless employee onboarding and inter-departmental harmony.</p>
            </div>
            <div className="pillar-feature-card">
              <div className="pillar-icon-circle"><Award size={24} /></div>
              <h3>Commercial Acumen (3.90 CGPA)</h3>
              <p>Backed by an International Business degree from the University of Lagos, bringing sales, negotiation, and market analysis context to administrative workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES PREVIEW */}
      <section className="section-padding featured-services-section bg-alt">
        <div className="container">
          <SectionHeader
            badge="Core Solutions"
            title="How I Can Support Your Business"
            subtitle="From calendar mastery and social media management to CRM pipelines and event logistics."
          />

          <div className="services-grid-preview">
            {SERVICES.slice(0, 4).map((service) => (
              <div key={service.id} className="service-preview-card">
                <div className="service-icon-box">
                  <Layers size={24} />
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                <ul className="service-quick-bullets">
                  {service.deliverables.slice(0, 2).map((item, idx) => (
                    <li key={idx}><CheckCircle2 size={15} /> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="section-cta-center">
            <Link to="/services" className="btn btn-secondary btn-lg">
              <span>View All {SERVICES.length} Dedicated Services</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section className="section-padding featured-experience-section">
        <div className="container">
          <SectionHeader
            badge="Proven Track Record"
            title="Recent Professional Roles"
            subtitle="Demonstrated impact across executive support, remote team operations, and administration."
          />

          <div className="experience-cards-stack">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="exp-highlight-card">
                <div className="exp-highlight-header">
                  <div>
                    <h3 className="exp-highlight-role">{exp.role}</h3>
                    <div className="exp-highlight-company">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                      <span className="exp-type-badge">{exp.type}</span>
                    </div>
                  </div>
                  <div className="exp-period-badge">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="exp-highlight-summary">{exp.summary}</p>
                <div className="exp-tags-row">
                  {exp.tags.map((tag, idx) => (
                    <span key={idx} className="exp-tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta-center">
            <Link to="/experience" className="btn btn-secondary btn-lg">
              <span>View Detailed Career History</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED TOOLS STRIP */}
      <section className="section-padding tools-strip-section bg-alt">
        <div className="container">
          <SectionHeader
            badge="Toolbox"
            title="Tech Stack & Software Fluency"
            subtitle="Proficient in the core platforms powering modern remote teams."
          />

          <div className="tools-pills-wrap">
            {TOOLS_DATA.map((tool, idx) => (
              <div key={idx} className="tool-pill-item">
                <span className="tool-pill-dot" style={{ backgroundColor: tool.color }}></span>
                <span className="tool-pill-name">{tool.name}</span>
                <span className="tool-pill-level">{tool.level}</span>
              </div>
            ))}
          </div>

          <div className="section-cta-center mt-4">
            <Link to="/skills-tools" className="btn btn-outline">
              <span>Explore Full Competency Matrix & Tools</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="section-padding cta-banner-section">
        <div className="container">
          <div className="cta-banner-glass">
            <div className="cta-banner-glow"></div>
            <div className="cta-content">
              <span className="badge">Ready to Scale Your Productivity?</span>
              <h2 className="cta-heading">Let's Discuss How I Can Free Up 15+ Hours of Your Week</h2>
              <p className="cta-sub">
                Open for full-time remote roles, contract executive assistance, and specialized operations support.
              </p>
              <div className="cta-actions-group">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <Sparkles size={18} />
                  <span>Get in Touch</span>
                </Link>
                <a
                  href={`https://wa.me/2348148013690?text=Hi%20Margreth,%20I'd%20like%20to%20hire%20you%20as%20a%20Virtual%20Assistant.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp (08148013690)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
