import React from 'react';

export const SectionHeader = ({ badge, title, subtitle, align = 'center' }) => {
  return (
    <div className={`section-header-block text-${align}`}>
      {badge && <div className="badge section-badge">{badge}</div>}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};
