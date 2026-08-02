import React from 'react';

// ---------------------------------------------------------------------------
// Real meez nav glyphs — the exact Figma SVGs exported for the Filters mockup,
// reused here so the Inventory navbar matches the product 1:1. Each [w, h] is
// the glyph's native rendered size from Figma; the glyph is centered (never
// stretched) inside a `size` box.
// ---------------------------------------------------------------------------
import navHamburger from '../../assets/filter-mockup/nav-hamburger.svg';
import navAdd from '../../assets/filter-mockup/nav-add.svg';
import navHelp from '../../assets/filter-mockup/nav-help.svg';
import navBell from '../../assets/filter-mockup/nav-bell.svg';
import sortArrow from '../../assets/filter-mockup/sort-arrow.svg';

const Glyph = ({ src, w, h, size }) => (
  <span className="invm-icon" style={{ width: size, height: size }}>
    <img loading="lazy" decoding="async" src={src} width={w} height={h} alt="" style={{ display: 'block' }} />
  </span>
);

export const MenuIcon = ({ size = 19.2 }) => <Glyph src={navHamburger} w={14.4} h={9.6} size={size} />;
export const AddIcon = ({ size = 14.4 }) => <Glyph src={navAdd} w={8.4} h={8.4} size={size} />;

// Search magnifier — exact Figma SVG (viewBox 13×13), tinted to the placeholder
// grey via currentColor so it matches the search-field text in every context.
export const SearchIcon = ({ size = 13.5 }) => (
  <span className="invm-icon" style={{ width: size, height: size, color: 'var(--invm-placeholder)' }}>
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
      <path d="M8.26661 7.46667H7.84528L7.69594 7.32267C8.33594 6.576 8.66661 5.55734 8.48528 4.47467C8.23461 2.992 6.99728 1.808 5.50394 1.62667C3.24794 1.34934 1.34928 3.248 1.62661 5.504C1.80794 6.99734 2.99194 8.23467 4.47461 8.48534C5.55728 8.66667 6.57594 8.336 7.32261 7.696L7.46661 7.84534V8.26667L9.73328 10.5333C9.95194 10.752 10.3093 10.752 10.5279 10.5333C10.7466 10.3147 10.7466 9.95734 10.5279 9.73867L8.26661 7.46667ZM5.06661 7.46667C3.73861 7.46667 2.66661 6.39467 2.66661 5.06667C2.66661 3.73867 3.73861 2.66667 5.06661 2.66667C6.39461 2.66667 7.46661 3.73867 7.46661 5.06667C7.46661 6.39467 6.39461 7.46667 5.06661 7.46667Z" fill="currentColor" />
    </svg>
  </span>
);
export const HelpIcon = ({ size = 19.2 }) => <Glyph src={navHelp} w={19.2} h={19.2} size={size} />;
export const BellIcon = ({ size = 19.2 }) => <Glyph src={navBell} w={19.2} h={19.2} size={size} />;
export const SortDownIcon = ({ size = 12.8 }) => <Glyph src={sortArrow} w={8.09} h={8.31} size={size} />;

// ---------------------------------------------------------------------------
// Material Symbols glyphs (auto_graph / remove_circle_outline / drag_indicator)
// — the same glyph families meez uses; rendered from MUI path data so they can
// be inlined directly as SVG.
// ---------------------------------------------------------------------------
const M = ({ size = 24, children, vb = '0 0 24 24' }) => (
  <svg width={size} height={size} viewBox={vb} fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flex: 'none' }}>
    {children}
  </svg>
);

// auto_graph — the trend/sparkle mark beside "View report".
export const AutoGraphIcon = ({ size = 12.8 }) => (
  <M size={size}><path d="m14.06 9.94-.94 2.06-.94-2.06L10.12 9l2.06-.94L13.12 6l.94 2.06L16.12 9l-2.06.94zM4.12 14l.94-2.06L7.12 11l-2.06-.94L4.12 8l-.94 2.06L1.12 11l2.06.94L4.12 14zm4.5-5 1.09-2.41L12.12 5.5 9.71 4.41 8.62 2 7.53 4.41 5.12 5.5l2.41 1.09L8.62 9zm-4 11.5 6-6.01 4 4L23.12 9.5l-1.41-1.41-6.09 6.84-4-4L3.12 19.09l1.5 1.41z" /></M>
);

// remove_circle_outline — the delete control on template rows.
export const DeleteIcon = ({ size = 19.2 }) => (
  <M size={size}><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></M>
);

// drag_indicator — the 6-dot drag handle.
export const DragIcon = ({ size = 19.2 }) => (
  <M size={size}><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></M>
);

// Recipe glyph — exact Figma SVG (notebook). Native 10 × 10.667; rendered at
// `w` px wide (8px inside the 16px recipe circle, per Figma 705:2002).
export const RecipeGlyph = ({ w = 8 }) => (
  <svg width={w} height={(w * 10.6667) / 10} viewBox="0 0 10 10.6667" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
    <path d="M9.33333 0C9.70152 0 10 0.298477 10 0.666667V10C10 10.3682 9.70152 10.6667 9.33333 10.6667H0.666667C0.298477 10.6667 0 10.3682 0 10V0.666667C0 0.298477 0.298477 0 0.666667 0H9.33333ZM8.66667 1.33333H1.33333V9.33333H8.66667V1.33333ZM8 6.66667V8H4V6.66667H8ZM3.33333 6.66667V8H2V6.66667H3.33333ZM8 4.66667V6H4V4.66667H8ZM3.33333 4.66667V6H2V4.66667H3.33333ZM8 2.66667V4H4V2.66667H8ZM3.33333 2.66667V4H2V2.66667H3.33333Z" fill="#fff" />
  </svg>
);

// Ingredient glyph — exact Figma SVG (sprout). Native 10 × 12.5; rendered at
// `w` px wide (8px inside the 16px ingredient circle, per Figma 705:2012).
export const IngredientGlyph = ({ w = 8 }) => (
  <svg width={w} height={(w * 12.5) / 10} viewBox="0 0 10 12.5" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
    <path d="M5.92168 1.75339L5.98337 1.66532C6.35555 1.15388 6.7433 0.845634 7.1622 0.748217C7.47873 0.674607 7.78505 0.922929 7.84638 1.30286C7.9077 1.68279 7.70082 2.05046 7.38429 2.12407C7.17732 2.1722 6.90485 2.46196 6.59572 3.00748C6.86072 3.01206 7.11529 3.03575 7.35962 3.07873C9.29706 3.41957 10.6071 5.82614 9.71334 9.09561C8.98128 11.7737 7.56313 12.967 5.64766 12.2516C5.35569 12.1571 5.14588 12.113 5.04234 12.113C5.00115 12.113 4.97344 12.1221 4.93854 12.1477L4.8121 12.2219C2.92349 13.0838 1.41578 11.9098 0.432692 9.14905C-0.214583 7.33134 -0.114339 5.84982 0.591024 4.71363C1.06773 3.94575 1.66049 3.50471 2.41306 3.13942C2.57068 3.06291 2.74802 3.00926 2.94649 2.97724C2.5326 2.50625 2.30001 1.79728 2.21393 0.878451L2.14286 0.119904L2.83837 0.0324559C4.31371 -0.153038 5.37078 0.461338 5.92168 1.75339ZM3.03308 4.46554C2.50414 4.72228 2.10897 5.0163 1.80939 5.49888C1.35445 6.23168 1.28627 7.23935 1.78789 8.64805C2.50958 10.6747 3.25839 11.2854 4.17008 10.9044C4.43218 10.7327 4.72818 10.6441 5.04234 10.6441C5.32399 10.6441 5.66323 10.7154 6.11377 10.862C7.1062 11.2322 7.79007 10.6568 8.32456 8.70149C8.99901 6.23414 8.17045 4.71201 7.11434 4.52622C6.58291 4.43273 5.94476 4.46724 5.20043 4.63772L5.03594 4.67539L4.87211 4.63482C3.8923 4.39218 3.25173 4.35941 3.03308 4.46554ZM3.67003 1.47059C3.75246 1.69014 3.85067 1.83508 3.95667 1.91164C4.11244 2.02414 4.32034 2.13684 4.57902 2.24786C4.36575 1.83372 4.06787 1.58175 3.67003 1.47059Z" fill="#fff" />
  </svg>
);
