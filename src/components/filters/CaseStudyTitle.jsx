import React from 'react';

// Reusable case-study page title: heavy display heading + medium subtitle, centered.
// Mirrors the Figma `case-study-title` component. The 64px Heavy display size is the
// one value not covered by the type scale, so it stays as an explicit responsive size;
// everything else uses design-system utilities and tokens.
export const CaseStudyTitle = ({ title, subtitle, className = '' }) => (
  <header className={`flex flex-col items-center gap-6 py-12 text-center sm:py-16 ${className}`}>
    <h1 className="font-[600] leading-tight tracking-tight text-[var(--color-text-primary)] text-[2.5rem] sm:text-[4rem]">
      {title}
    </h1>
    {subtitle && (
      <p className="body-xlarge max-w-2xl text-[var(--color-text-primary)]">{subtitle}</p>
    )}
  </header>
);
