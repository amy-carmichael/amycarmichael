import React from 'react';

// Shared section heading for case-study pages (e.g. "1. Project Overview").
// Aligns to the same readable column (max-w-2xl) as CaseStudyBody so headings
// and body copy share one left edge. Single source of truth for the heading
// style across every case study.
export const CaseStudyHeading = ({ children, className = '' }) => (
  <h2 className={`headline-large mx-auto w-full max-w-2xl text-[var(--color-text-primary)] ${className}`}>
    {children}
  </h2>
);
