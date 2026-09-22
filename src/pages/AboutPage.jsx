import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Clock, Users, GraduationCap, Award, CheckCircle2, Sparkles, MessageCircle, Mail, Globe2, BookOpen, Compass } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import margrethPhoto from '../assets/margreth.png';

export const AboutPage = ({ onOpenResume }) => {
  return (
    <div className="page-wrapper about-page">
      {/* PAGE HEADER */}
      <section className="page-hero-header">
        <div className="container">
          <SectionHeader
            badge="About Margreth Osudoh"
            title="Strategic Business Acumen Meets Operational Mastery"
            subtitle="Discover the mindset, academic foundation, and track record that drives every project."
          />
        </div>
      </section>

      {/* STORY & BACKGROUND */}
      <section className="section-padding">
        <div className="container">
          <div className="about-bio-grid">
            <div className="about-bio-card">
              <div className="bio-card-badge">
                <Compass size={18} />
                <span>Executive Bio</span>
              </div>
              <h3 className="bio-card-title">Dedicated, Dependable & Remote-Ready</h3>
              <p className="bio-paragraph">
                I am an organized and dependable Virtual Assistant with proven experience supporting day-to-day administrative operations, social media channels, managing high-stakes executive schedules, handling confidential email correspondence, maintaining immaculate digital records, and assisting international clients and team members remotely.
              </p>
              <p className="bio-paragraph">
                Throughout my career at companies like <strong>Coxatech Industries</strong>, <strong>Nerdbug</strong>, and <strong>Salford & Co Corporation</strong>, I have worked with founders, C-suite executives, and cross-functional teams of <strong>20+ employees</strong>. My core strength lies in prioritizing multiple tasks under tight deadlines, communicating professionally across borders, and working independently with minimal supervision.
              </p>
              <p className="bio-paragraph">
                I don't just execute checklists—I proactively spot inefficiencies, coordinate active social media scheduling, optimize procurement budgets, organize seamless corporate events, and defend executive focus hours so leadership can focus entirely on high-leverage growth.
              </p>

              <div className="bio-quote-callout">
                <p>"My mission as your Virtual Assistant is simple: turn operational chaos into quiet, predictable efficiency."</p>
                <span className="quote-author">— Margreth Osudoh</span>
              </div>
            </div>

            {/* Right Card: Quick Facts & Highlights */}
            <div className="about-facts-card">
              <div className="about-profile-header">
                <div className="about-photo-wrap">
                  <img src={margrethPhoto} alt={PERSONAL_INFO.name} className="about-profile-img" />
                  <div className="about-status-indicator" title="Available for hire">
                    <span className="live-status-dot"></span>
                  </div>
                </div>
                <div className="about-profile-meta">
                  <h4 className="about-profile-name">{PERSONAL_INFO.name}</h4>
                  <span className="about-profile-role">{PERSONAL_INFO.role}</span>
                </div>
              </div>

              <h3 className="facts-title">Snapshot at a Glance</h3>
              <div className="facts-list">
                <div className="fact-item">
                  <span className="fact-label">Primary Role</span>
                  <span className="fact-value">{PERSONAL_INFO.role}</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Location</span>
                  <span className="fact-value">{PERSONAL_INFO.location}</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Timezone Overlap</span>
                  <span className="fact-value">WAT (GMT+1) / Flexible for EST, PST, GMT, CET</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Education</span>
                  <span className="fact-value">BBA, University of Lagos (3.90 CGPA)</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Key Tools</span>
                  <span className="fact-value">Jira, Linear, HubSpot, Buffer, Canva, Google Workspace</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Availability</span>
                  <span className="fact-value text-success font-semibold">Immediate for Remote Roles</span>
                </div>
              </div>

              <div className="about-cta-buttons">
                <button onClick={onOpenResume} className="btn btn-secondary btn-block">
                  View Full CV
                </button>
                <Link to="/contact" className="btn btn-primary btn-block">
                  <Sparkles size={16} />
                  <span>Hire Margreth</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC FOUNDATION */}
      <section className="section-padding bg-alt">
        <div className="container">
          <SectionHeader
            badge="Academic Foundation"
            title="University of Lagos — Bachelor of Business Administration"
            subtitle="Major in International Business with an outstanding 3.90 CGPA."
          />

          <div className="edu-showcase-box">
            <div className="edu-showcase-main">
              <div className="edu-badge-icon"><GraduationCap size={32} /></div>
              <div>
                <h3 className="edu-main-title">{EDUCATION.degree}</h3>
                <h4 className="edu-main-sub">{EDUCATION.institution} &bull; Major in {EDUCATION.major}</h4>
                <p className="edu-main-desc">
                  My academic training in International Business provides a deep analytical framework for understanding global market dynamics, corporate communication, negotiation strategies, and organizational behavior.
                </p>
              </div>
            </div>

            <div className="edu-cgpa-pill">
              <span className="cgpa-label">Graduating CGPA</span>
              <span className="cgpa-val">{EDUCATION.cgpa}</span>
              <span className="cgpa-badge"><Award size={14} /> {EDUCATION.honors}</span>
            </div>
          </div>

          <div className="coursework-container">
            <h4 className="coursework-header"><BookOpen size={18} /> Specialized Coursework:</h4>
            <div className="course-badges-grid">
              {EDUCATION.coursework.map((course, idx) => (
                <div key={idx} className="course-badge-item">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE PILLARS */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            badge="Core Philosophy"
            title="The 4 Pillars of My Work Ethic"
            subtitle="How I ensure every executive partnership operates at peak efficiency."
          />

          <div className="pillars-grid">
            <div className="pillar-feature-card">
              <div className="pillar-icon-circle"><ShieldCheck size={24} /></div>
              <h3>1. Ironclad Discretion</h3>
              <p>Executives handle sensitive negotiations, payroll, investor memos, and confidential communications. I treat all organizational information with the highest standard of confidentiality and discretion.</p>
            </div>
            <div className="pillar-feature-card">
              <div className="pillar-icon-circle"><Zap size={24} /></div>
              <h3>2. Proactive Ownership</h3>
              <p>I don't wait to be told what to do. I look ahead at tomorrow's meetings, prepare materials today, spot schedule overlaps, and eliminate hurdles before they disrupt your day.</p>
            </div>
            <div className="pillar-feature-card">
              <div className="pillar-icon-circle"><Clock size={24} /></div>
              <h3>3. Time Defense & Punctuality</h3>
              <p>Your calendar is your most valuable asset. I implement strict buffer rules, protect deep-work focus time, and manage appointment requests with diplomatic firmness.</p>
            </div>
            <div className="pillar-feature-card">
              <div className="pillar-icon-circle"><Users size={24} /></div>
              <h3>4. Collaborative Team Bridge</h3>
              <p>Whether coordinating between design and sales or onboarding new hires, I establish clear, warm, and structured communication channels that keep everyone aligned.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
