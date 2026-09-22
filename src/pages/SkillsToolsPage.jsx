import React, { useState } from 'react';
import { Cpu, CheckCheck, Briefcase, HeartHandshake, CheckCircle2, Sparkles, Filter, Share2 } from 'lucide-react';
import { TOOLS_DATA, SKILLS_CATEGORIES } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';

export const SkillsToolsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Social Media', 'Project Management', 'CRM & Sales', 'Communication', 'Productivity'];

  const filteredTools = selectedFilter === 'All'
    ? TOOLS_DATA
    : TOOLS_DATA.filter(t => t.category === selectedFilter);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'CheckCheck': return <CheckCheck size={22} />;
      case 'Share2': return <Share2 size={22} />;
      case 'Briefcase': return <Briefcase size={22} />;
      case 'HeartHandshake': return <HeartHandshake size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  return (
    <div className="page-wrapper skills-tools-page">
      {/* PAGE HEADER */}
      <section className="page-hero-header">
        <div className="container">
          <SectionHeader
            badge="Competencies & Tech Stack"
            title="Tools, Software & Professional Strengths"
            subtitle="Fluent in modern digital productivity platforms, project tracking ecosystems, and high-impact administrative skills."
          />
        </div>
      </section>

      {/* TOOLS SHOWCASE & FILTER */}
      <section className="section-padding">
        <div className="container">
          <div className="tools-filter-controls">
            <span className="filter-label"><Filter size={16} /> Filter by Category:</span>
            <div className="filter-buttons-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn-pill ${selectedFilter === cat ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="tools-grid-interactive">
            {filteredTools.map((tool, idx) => (
              <div key={idx} className="tool-card-rich">
                <div className="tool-card-top-row">
                  <div className="tool-dot-circle" style={{ backgroundColor: tool.color }}></div>
                  <span className="tool-level-badge">{tool.level}</span>
                </div>

                <h3 className="tool-title-name">{tool.name}</h3>
                <span className="tool-cat-subtitle">{tool.category}</span>
                <p className="tool-desc-text">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS PROFICIENCY MATRIX */}
      <section className="section-padding bg-alt">
        <div className="container">
          <SectionHeader
            badge="Skill Proficiency Matrix"
            title="Core Functional Strengths"
            subtitle="Demonstrated competency levels evaluated through real-world executive support and business administration."
          />

          <div className="skills-matrix-grid">
            {SKILLS_CATEGORIES.map((cat, catIdx) => (
              <div key={catIdx} className="skill-matrix-card">
                <div className="matrix-card-header">
                  <div className="cat-icon-wrap">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <h3>{cat.title}</h3>
                </div>

                <div className="matrix-skills-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="matrix-skill-row">
                      <div className="skill-name-pct">
                        <span className="skill-name-text">{skill.name}</span>
                        <span className="skill-pct-number">{skill.level}%</span>
                      </div>
                      <div className="progress-track">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOFT SKILLS & PROFESSIONAL TRAITS */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            badge="Interpersonal Excellence"
            title="Executive Soft Skills & Traits"
            subtitle="The human qualities that make every collaboration smooth and enjoyable."
          />

          <div className="soft-skills-grid">
            <div className="soft-skill-pill"><CheckCircle2 size={16} className="text-primary" /> Active Listening & Clear Communication</div>
            <div className="soft-skill-pill"><CheckCircle2 size={16} className="text-primary" /> Brand Voice & Audience Engagement Consistency</div>
            <div className="soft-skill-pill"><CheckCircle2 size={16} className="text-primary" /> High Emotional Intelligence (EQ)</div>
            <div className="soft-skill-pill"><CheckCircle2 size={16} className="text-primary" /> Calm Under High-Pressure Deadlines</div>
            <div className="soft-skill-pill"><CheckCircle2 size={16} className="text-primary" /> Resourceful & Autonomous Problem Solver</div>
            <div className="soft-skill-pill"><CheckCircle2 size={16} className="text-primary" /> Cross-Cultural Sensitivity & Inclusivity</div>
            <div className="soft-skill-pill"><CheckCircle2 size={16} className="text-primary" /> Rapid Learner of New Software & APIs</div>
          </div>
        </div>
      </section>
    </div>
  );
};
