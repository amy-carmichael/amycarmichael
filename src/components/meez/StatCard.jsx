import React from 'react';

// Frosted/translucent "stat" card sitting over the page-7 water-ripple photo.
export const StatCard = ({ label, value }) => (
  <div className="rounded-xl border border-white/40 bg-white/20 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md">
    <p className="label-small uppercase text-[var(--color-text-tertiary)]">{label}</p>
    <p className="title-small mt-1 text-[var(--color-text-primary)]">{value}</p>
  </div>
);
