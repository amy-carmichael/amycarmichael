import React from 'react';

// Shared case-study narrative body — `body-large` paragraphs, justified, in a
// readable column. Pass one or more <p> children; spacing/type are handled here.
export const CaseStudyBody = ({ children, className = '' }) => (
  <div
    className={`mx-auto flex max-w-2xl flex-col gap-4 text-justify text-[var(--color-text-primary)] [&>p]:body-large ${className}`}
  >
    {children}
  </div>
);
