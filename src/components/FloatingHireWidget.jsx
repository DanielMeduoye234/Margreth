import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, Sparkles, X, Copy, Check, ChevronRight, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import margrethPhoto from '../assets/margreth.png';

export const FloatingHireWidget = ({ onShowToast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  // Close popup if clicking outside
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) {
      onShowToast(`Copied ${fieldName}: ${text}`, 'success');
    }
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <div className="floating-hire-container">
      {/* Quick Action Popover */}
      {isOpen && (
        <div className="hire-popover-card animate-fade-in" role="dialog" aria-label="Hire Margreth Quick Connect">
          <div className="popover-header">
            <div className="popover-header-title">
              <div className="popover-avatar-wrap">
                <img src={margrethPhoto} alt={PERSONAL_INFO.name} className="popover-avatar-img" />
                <span className="live-status-dot popover-status-dot"></span>
              </div>
              <div>
                <h4>Hire Margreth Osudoh</h4>
                <span className="popover-role">Virtual Assistant & Admin Specialist</span>
              </div>
            </div>
            <button
              className="popover-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close hire popover"
            >
              <X size={18} />
            </button>
          </div>

          <div className="popover-body">
            <p className="popover-desc">
              Looking for a dependable Virtual Assistant to handle calendar, social media, CRM, correspondence, or team operations? Let's connect directly:
            </p>

            {/* WhatsApp Option */}
            <div className="popover-channel-card whatsapp-theme">
              <a
                href={`https://wa.me/2348148013690?text=Hello%20Margreth,%20I'm%20interested%20in%20hiring%20you%20as%20a%20Virtual%20Assistant.`}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-main-link"
              >
                <div className="channel-icon-circle wa-bg">
                  <MessageCircle size={20} />
                </div>
                <div className="channel-info-text">
                  <span className="channel-name">WhatsApp Direct</span>
                  <span className="channel-detail">{PERSONAL_INFO.whatsapp}</span>
                </div>
                <ChevronRight size={18} className="channel-arrow" />
              </a>
              <button
                className="channel-copy-btn"
                onClick={() => handleCopy(PERSONAL_INFO.whatsapp, 'WhatsApp Number')}
                title="Copy phone number"
              >
                {copiedField === 'WhatsApp Number' ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedField === 'WhatsApp Number' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Email Option */}
            <div className="popover-channel-card email-theme">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Virtual%20Assistant%20Inquiry%20-%20Margreth%20Osudoh`}
                className="channel-main-link"
              >
                <div className="channel-icon-circle mail-bg">
                  <Mail size={20} />
                </div>
                <div className="channel-info-text">
                  <span className="channel-name">Email Inbox</span>
                  <span className="channel-detail">{PERSONAL_INFO.email}</span>
                </div>
                <ChevronRight size={18} className="channel-arrow" />
              </a>
              <button
                className="channel-copy-btn"
                onClick={() => handleCopy(PERSONAL_INFO.email, 'Email Address')}
                title="Copy email address"
              >
                {copiedField === 'Email Address' ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedField === 'Email Address' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="popover-footer-note">
              <span>⚡ Fast Response Guarantee (under 2 hours)</span>
            </div>
          </div>
        </div>
      )}

      {/* The Floating Hire Button */}
      <button
        className={`floating-hire-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Hire Margreth Osudoh - Direct WhatsApp and Email contacts"
        aria-expanded={isOpen}
      >
        <span className="pulse-ping"></span>
        <Sparkles size={20} className="sparkle-svg" />
        <span className="floating-btn-label">Hire Me</span>
      </button>
    </div>
  );
};
