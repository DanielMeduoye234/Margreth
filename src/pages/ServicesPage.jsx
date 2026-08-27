import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Mail, Database, Plane, Users, FolderKanban, CheckCircle2, ArrowRight, Sparkles, MessageCircle, Clock, Shield } from 'lucide-react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';

export const ServicesPage = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Calendar': return <Calendar size={28} />;
      case 'Mail': return <Mail size={28} />;
      case 'Database': return <Database size={28} />;
      case 'Plane': return <Plane size={28} />;
      case 'Users': return <Users size={28} />;
      case 'FolderKanban': return <FolderKanban size={28} />;
      default: return <Sparkles size={28} />;
    }
  };

  return (
    <div className="page-wrapper services-page">
      {/* PAGE HEADER */}
      <section className="page-hero-header">
        <div className="container">
          <SectionHeader
            badge="Services & Solutions"
            title="Comprehensive Administrative & Executive Support"
            subtitle="Tailored virtual assistant services designed to streamline your daily operations and maximize executive leverage."
          />
        </div>
      </section>

      {/* ALL SERVICES GRID */}
      <section className="section-padding">
        <div className="container">
          <div className="services-detailed-grid">
            {SERVICES.map((service, index) => (
              <div key={service.id} className="service-detail-card">
                <div className="service-card-top">
                  <div className="service-icon-wrap">
                    {getIcon(service.icon)}
                  </div>
                  <span className="service-number">0{index + 1}</span>
                </div>

                <h3 className="service-heading">{service.title}</h3>
                <p className="service-body-desc">{service.description}</p>

                <div className="service-deliverables-block">
                  <h4 className="deliverables-title">Core Deliverables:</h4>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK / PROCESS */}
      <section className="section-padding bg-alt">
        <div className="container">
          <SectionHeader
            badge="Simple Workflow"
            title="How We Collaborate Seamlessly"
            subtitle="A clear, structured 4-step framework from initial onboarding to sustained operational rhythm."
          />

          <div className="process-steps-grid">
            <div className="process-step-card">
              <div className="step-count">1</div>
              <h4>Discovery & Alignment</h4>
              <p>We review your current tools, calendar preferences, priority bottlenecks, and define key performance milestones.</p>
            </div>
            <div className="process-step-card">
              <div className="step-count">2</div>
              <h4>Rapid Tool Onboarding</h4>
              <p>Integration with your workspace (Slack, Jira, Linear, HubSpot, Gmail, Google Workspace) and setting up access protocols.</p>
            </div>
            <div className="process-step-card">
              <div className="step-count">3</div>
              <h4>Flawless Day-to-Day Execution</h4>
              <p>Independent task execution, calendar defense, inbox triage, meeting briefs, and proactive schedule problem-solving.</p>
            </div>
            <div className="process-step-card">
              <div className="step-count">4</div>
              <h4>Weekly Sync & Continuous Polish</h4>
              <p>Regular async or sync rollups, status reviews, and workflow optimizations to keep systems running like clockwork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            badge="Flexible Engagement"
            title="Ways to Work Together"
            subtitle="Select the capacity model that aligns with your organization's stage and needs."
          />

          <div className="engagement-models-grid">
            <div className="engagement-card">
              <div className="engagement-badge">Full-Time Commitment</div>
              <h3 className="engagement-title">Dedicated Executive Partner</h3>
              <p className="engagement-desc">Full 40 hrs/week dedicated support for founders, C-suite executives, and growing startups.</p>
              <ul className="engagement-perks">
                <li><CheckCircle2 size={16} /> Full daily calendar & inbox management</li>
                <li><CheckCircle2 size={16} /> CRM & HubSpot pipeline operations</li>
                <li><CheckCircle2 size={16} /> Travel logistics & event coordination</li>
                <li><CheckCircle2 size={16} /> Real-time Slack/WhatsApp responsiveness</li>
              </ul>
              <Link to="/contact" className="btn btn-primary btn-block">Inquire for Full-Time</Link>
            </div>

            <div className="engagement-card featured-card">
              <div className="featured-pill">Most Popular</div>
              <div className="engagement-badge">Part-Time / Retainer</div>
              <h3 className="engagement-title">Executive Support Retainer</h3>
              <p className="engagement-desc">20 hrs/week flexible support ideal for managing executive schedules, meetings, and email flow.</p>
              <ul className="engagement-perks">
                <li><CheckCircle2 size={16} /> Daily schedule coordination & reminders</li>
                <li><CheckCircle2 size={16} /> Email inbox zero & client follow-ups</li>
                <li><CheckCircle2 size={16} /> Cross-team liaison & task tracking</li>
                <li><CheckCircle2 size={16} /> Priority async support</li>
              </ul>
              <Link to="/contact" className="btn btn-primary btn-block">Choose Retainer</Link>
            </div>

            <div className="engagement-card">
              <div className="engagement-badge">Project Basis</div>
              <h3 className="engagement-title">Special Project & Event Support</h3>
              <p className="engagement-desc">Targeted support for corporate events, new employee onboarding sprint, or CRM database cleanups.</p>
              <ul className="engagement-perks">
                <li><CheckCircle2 size={16} /> Corporate event setup & logistics</li>
                <li><CheckCircle2 size={16} /> Employee onboarding coordination</li>
                <li><CheckCircle2 size={16} /> Digital archive & CRM hygiene audit</li>
                <li><CheckCircle2 size={16} /> Milestone-based execution</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary btn-block">Discuss Project</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
