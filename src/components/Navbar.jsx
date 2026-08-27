import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Sparkles, Menu, X, MessageCircle, Mail, Briefcase, User, Layers, Cpu, CheckCircle2, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import margrethPhoto from '../assets/margreth.png';

export const Navbar = ({ onOpenResume, onOpenHire }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" aria-label="Margreth Osudoh Home">
            <div className="brand-avatar-badge">
              <img src={margrethPhoto} alt={PERSONAL_INFO.name} className="brand-avatar-img" />
            </div>
            <div className="brand-text-wrap">
              <span className="brand-name">{PERSONAL_INFO.name}</span>
              <span className="brand-role">Executive VA</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="desktop-nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills-tools" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Tools & Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right Action Tools */}
          <div className="navbar-actions">
            <button
              onClick={toggleTheme}
              className="theme-switch-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={19} className="text-warning" /> : <Moon size={19} className="text-primary" />}
            </button>

            <button
              onClick={onOpenResume}
              className="btn btn-outline btn-sm hide-mobile"
              title="View & Print Resume"
            >
              Resume
            </button>

            <Link to="/contact" className="btn btn-primary btn-sm hide-mobile nav-hire-btn">
              <Sparkles size={16} />
              <span>Hire Me</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sliding Mobile Drawer Navigation */}
      <aside className={`mobile-drawer-menu ${mobileOpen ? 'open' : ''}`} aria-label="Mobile Navigation Drawer">
        <div className="drawer-header-row">
          <div className="brand-logo">
            <div className="brand-avatar-badge">
              <img src={margrethPhoto} alt={PERSONAL_INFO.name} className="brand-avatar-img" />
            </div>
            <div className="brand-text-wrap">
              <span className="brand-name">{PERSONAL_INFO.name}</span>
              <span className="brand-role">Virtual Assistant</span>
            </div>
          </div>
          <button
            className="drawer-close-icon"
            onClick={() => setMobileOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body-content">
          <ul className="drawer-nav-list">
            <li>
              <NavLink to="/" className={({ isActive }) => `drawer-nav-item ${isActive ? 'active' : ''}`} end>
                <User size={18} />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `drawer-nav-item ${isActive ? 'active' : ''}`}>
                <User size={18} />
                <span>About Margreth</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => `drawer-nav-item ${isActive ? 'active' : ''}`}>
                <Layers size={18} />
                <span>Services & Solutions</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className={({ isActive }) => `drawer-nav-item ${isActive ? 'active' : ''}`}>
                <Briefcase size={18} />
                <span>Work Experience</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills-tools" className={({ isActive }) => `drawer-nav-item ${isActive ? 'active' : ''}`}>
                <Cpu size={18} />
                <span>Tools & Skills</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `drawer-nav-item ${isActive ? 'active' : ''}`}>
                <Mail size={18} />
                <span>Contact & Inquiries</span>
              </NavLink>
            </li>
          </ul>

          <div className="drawer-quick-contacts">
            <div className="drawer-section-title">Direct Reach</div>
            <a
              href={`https://wa.me/2348148013690?text=Hello%20Margreth,%20I'm%20reaching%20out%20from%20your%20portfolio.`}
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-contact-badge wa"
            >
              <MessageCircle size={16} />
              <span>WhatsApp: 08148013690</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Virtual%20Assistant%20Opportunity`}
              className="drawer-contact-badge email"
            >
              <Mail size={16} />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>

          <div className="drawer-bottom-cta">
            <button
              onClick={() => {
                setMobileOpen(false);
                if (onOpenResume) onOpenResume();
              }}
              className="btn btn-outline btn-block"
            >
              View Official Resume
            </button>
            <Link
              to="/contact"
              className="btn btn-primary btn-block"
              onClick={() => setMobileOpen(false)}
            >
              <Sparkles size={16} />
              <span>Hire Margreth Now</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};
