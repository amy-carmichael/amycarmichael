import React from 'react';
import meezLogoWhite from '../../assets/meez-pg-assets/meez-logo-white.png';
import meezLogoDark from '../../assets/meez-logo.png';

// Stacked meez logo + page wordmark — mirrors the Figma `Frame 1888` title used on
// the end-of-page case-study slides: a 24px-tall meez logo above a Futura PT Bold
// 48px title (leading 1.2).
//   tone="light" → white logo + white title (for dark photo backgrounds)
//   tone="dark"  → colored logo + #2C3238 title (for light backgrounds)
export const SlideTitle = ({ title, tone = 'dark', className = '' }) => {
  const light = tone === 'light';
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <img loading="lazy" decoding="async"
        src={light ? meezLogoWhite : meezLogoDark}
        alt="meez"
        className="mb-1 h-5 w-auto sm:h-6"
      />
      <p
        className={`font-bold leading-[1.2] text-[2rem] sm:text-[3rem] ${
          light ? 'text-white' : 'text-[var(--color-text-primary)]'
        }`}
      >
        {title}
      </p>
    </div>
  );
};
