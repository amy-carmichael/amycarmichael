import React from 'react';

// Reusable case-study page title: heavy display heading + medium subtitle, centered.
// Mirrors the Figma `case-study-title` component. The heading uses the shared
// `display-hero` utility (theme sheet) rather than a bespoke responsive size.
export const CaseStudyTitle = ({ title, subtitle, className = '' }) => (
  <header className={`flex flex-col items-center gap-6 py-12 text-center sm:py-16 ${className}`}>
    <h1 className="display-hero text-[var(--color-text-primary)]">
      {title}
    </h1>
    {subtitle && (
      <p className="body-xlarge max-w-2xl text-[var(--color-text-primary)]">{subtitle}</p>
    )}
  </header>
);
