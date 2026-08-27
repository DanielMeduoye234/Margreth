import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Copy, Check, Send, Sparkles, ChevronDown, ChevronUp, Clock, Globe } from 'lucide-react';
import { PERSONAL_INFO, FAQS } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';

export const ContactPage = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Executive Virtual Assistance',
    message: ''
  });

  const [copiedField, setCopiedField] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto query
    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nService Needed: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    if (onShowToast) {
      onShowToast('Opening your email client to send your message to Margreth!', 'info');
    }
  };

  return (
    <div className="page-wrapper contact-page">
      {/* PAGE HEADER */}
      <section className="page-hero-header">
        <div className="container">
          <SectionHeader
            badge="Get In Touch"
            title="Let's Discuss How We Can Work Together"
            subtitle="Ready to hire an organized, dependable Virtual Assistant? Reach out via WhatsApp, Email, or the form below."
          />
        </div>
      </section>

      {/* CONTACT CHANNELS & FORM */}
      <section className="section-padding">
        <div className="container">
          <div className="contact-main-layout">
            {/* Left Column: Direct Reach Cards */}
            <div className="contact-cards-col">
              <h3 className="col-heading">Direct Contact Channels</h3>
              <p className="col-desc">For fast responses, feel free to message directly on WhatsApp or drop an email.</p>

              {/* WhatsApp Card */}
              <div className="channel-box wa-channel">
                <div className="channel-box-icon wa-bg">
                  <MessageCircle size={24} />
                </div>
                <div className="channel-box-info">
                  <span className="channel-type">WhatsApp (Fastest Response)</span>
                  <strong className="channel-val">{PERSONAL_INFO.whatsapp}</strong>
                  <span className="channel-note">+234 814 801 3690 (Global WhatsApp)</span>
                </div>
                <div className="channel-box-actions">
                  <a
                    href={`https://wa.me/2348148013690?text=Hello%20Margreth,%20I'm%20interested%20in%20discussing%20a%20Virtual%20Assistant%20role.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    Chat
                  </a>
                  <button
                    className="btn btn-sm btn-icon-only btn-secondary"
                    onClick={() => handleCopy(PERSONAL_INFO.whatsapp, 'WhatsApp Phone')}
                    title="Copy phone number"
                  >
                    {copiedField === 'WhatsApp Phone' ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>

              {/* Email Card */}
              <div className="channel-box email-channel">
                <div className="channel-box-icon mail-bg">
                  <Mail size={24} />
                </div>
                <div className="channel-box-info">
                  <span className="channel-type">Direct Email</span>
                  <strong className="channel-val">{PERSONAL_INFO.email}</strong>
                  <span className="channel-note">Checked regularly throughout the day</span>
                </div>
                <div className="channel-box-actions">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Virtual%20Assistant%20Inquiry%20-%20Margreth%20Osudoh`}
                    className="btn btn-sm btn-primary"
                  >
                    Send Email
                  </a>
                  <button
                    className="btn btn-sm btn-icon-only btn-secondary"
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'Email Address')}
                    title="Copy email address"
                  >
                    {copiedField === 'Email Address' ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="channel-box location-channel">
                <div className="channel-box-icon loc-bg">
                  <MapPin size={24} />
                </div>
                <div className="channel-box-info">
                  <span className="channel-type">Location & Availability</span>
                  <strong className="channel-val">{PERSONAL_INFO.location}</strong>
                  <span className="channel-note">Timezone: WAT (GMT+1) &bull; Flexible for US, UK, EU timezones</span>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="contact-form-col">
              <div className="form-card-glass">
                <h3 className="form-card-title">Send a Message</h3>
                <p className="form-card-sub">Fill in the quick details below and let's explore how I can support your goals.</p>

                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="form-row-two">
                    <div className="form-field-group">
                      <label htmlFor="name">Your Name <span className="req">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        required
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="email">Your Email <span className="req">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row-two">
                    <div className="form-field-group">
                      <label htmlFor="service">Service Needed</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="Executive Virtual Assistance">Executive Virtual Assistance</option>
                        <option value="Calendar & Travel Management">Calendar & Travel Management</option>
                        <option value="CRM & B2B Sales Support">CRM & B2B Sales Support (HubSpot)</option>
                        <option value="Team Operations & Liaison">Team Operations & Liaison</option>
                        <option value="Email & Inbox Zero Management">Email & Inbox Zero Management</option>
                        <option value="Full-Time Remote VA Role">Full-Time Remote VA Role</option>
                        <option value="Other Support">Other Custom Support</option>
                      </select>
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="company">Company / Organization</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Tech"
                      />
                    </div>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="message">Message / Scope of Work <span className="req">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share a brief overview of your team, key priorities, or current bottlenecks..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                    <Send size={18} />
                    <span>Send Message to Margreth</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS ACCORDION */}
      <section className="section-padding bg-alt">
        <div className="container">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Common Questions Before Hiring"
            subtitle="Everything you need to know about working with Margreth Osudoh."
          />

          <div className="faqs-accordion-wrapper">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={`faq-accordion-item ${openFaq === index ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="faq-question-row">
                  <h4 className="faq-question-text">{faq.question}</h4>
                  <span className="faq-toggle-icon">
                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </div>
                {openFaq === index && (
                  <div className="faq-answer-block animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
