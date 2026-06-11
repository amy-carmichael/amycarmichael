import React from 'react';

export const NarrativeCard = ({ label, children, tone = 'light', className = '' }) => {
  const dark = tone === 'dark';
  return (
    <div
      className={`rounded-md border p-4 backdrop-blur-md ${
        dark ? 'border-white/15 bg-black/10' : 'border-white/50 bg-white/15'
      } ${className}`}
    >
      <p
        className={`label-small uppercase tracking-[0.16em] mb-2 ${
          dark ? 'text-white/70' : 'text-[var(--color-text-tertiary)]'
        }`}
      >
        {label}
      </p>
      <p className={`body-small ${dark ? 'text-white' : 'text-[var(--color-text-primary)]'}`}>
        {children}
      </p>
    </div>
  );
};
