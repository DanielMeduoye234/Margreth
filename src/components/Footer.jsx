import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin, ArrowUp, Sparkles, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import margrethPhoto from '../assets/margreth.png';

export const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top-grid">
          {/* Brand info */}
          <div className="footer-brand-col">
            <Link to="/" className="brand-logo">
              <div className="brand-avatar-badge">
                <img src={margrethPhoto} alt={PERSONAL_INFO.name} className="brand-avatar-img" />
              </div>
              <div className="brand-text-wrap">
                <span className="brand-name">{PERSONAL_INFO.name}</span>
                <span className="brand-role">{PERSONAL_INFO.role}</span>
              </div>
            </Link>
            <p className="footer-bio-summary">
              Empowering visionary leaders, founders, and dynamic distributed teams with dependable, high-precision administrative, social media & operational partnership.
            </p>
            <div className="footer-status-pill">
              <span className="live-status-dot"></span>
              <span>Available for Remote / Full-time Roles</span>
            </div>
          </div>

          {/* Quick Pages */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Pages</h4>
            <ul className="footer-links">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/about">About Margreth</Link></li>
              <li><Link to="/services">Services & Solutions</Link></li>
              <li><Link to="/experience">Career Experience</Link></li>
              <li><Link to="/skills-tools">Tools & Key Skills</Link></li>
              <li><Link to="/contact">Contact & Hire</Link></li>
            </ul>
          </div>

          {/* Core Competencies */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Specializations</h4>
            <ul className="footer-links">
              <li><span>Calendar & Time Defense</span></li>
              <li><span>Social Media Management</span></li>
              <li><span>HubSpot CRM & Sales Support</span></li>
              <li><span>Inbox Zero & Correspondence</span></li>
              <li><span>Travel & Event Logistics</span></li>
              <li><span>20+ Team Liaison & Onboarding</span></li>
              <li><button onClick={onOpenResume} className="footer-text-btn">View Official CV</button></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Direct Reach</h4>
            <div className="footer-contact-items">
              <a
                href={`https://wa.me/2348148013690?text=Hello%20Margreth`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link wa"
              >
                <MessageCircle size={16} />
                <span>WhatsApp: {PERSONAL_INFO.whatsapp}</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Virtual%20Assistant%20Opportunity`}
                className="footer-contact-link email"
              >
                <Mail size={16} />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <div className="footer-contact-link location">
                <MapPin size={16} />
                <span>{PERSONAL_INFO.location} (Remote Global)</span>
              </div>
            </div>

            <div className="footer-cta-box">
              <Link to="/contact" className="btn btn-primary btn-sm btn-block">
                <Sparkles size={15} />
                <span>Hire Margreth</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="copyright-text">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="footer-back-to-top">
            <button onClick={scrollToTop} className="back-top-btn" aria-label="Scroll back to top">
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
