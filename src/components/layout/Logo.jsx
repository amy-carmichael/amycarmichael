import React from 'react';

// The amy·carmichael wordmark used in the header (desktop + mobile) and the
// mobile menu. Callers pass positioning via className and the click handler.
export const Logo = ({ className = '', onClick }) => (
  <a
    href="#/"
    className={`logo cursor-pointer ${className}`}
    onClick={onClick}
    aria-label="Amy Carmichael - Home"
  >
    <span className="text-[var(--color-text-primary)]">amy</span>
    <span className="logo-gradient">carmichael</span>
  </a>
);
