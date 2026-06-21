import React from 'react';

// Material UI (Material Icons) path data — used because the original Figma icons
// are served from a localhost asset server that can't be inlined here. Standard
// UI glyphs are verbatim MUI paths; the recipe/ingredient brand marks are drawn
// to match meez (a book + a sprout) since they aren't part of the MUI set.
const M = ({ size = 24, children, fill = 'currentColor', vb = '0 0 24 24' }) => (
  <svg width={size} height={size} viewBox={vb} fill={fill} xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flex: 'none' }}>
    {children}
  </svg>
);

export const MenuIcon = ({ size = 24 }) => (
  <M size={size}><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></M>
);

export const SearchIcon = ({ size = 24 }) => (
  <M size={size}><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></M>
);

export const PlusIcon = ({ size = 24 }) => (
  <M size={size}><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></M>
);

// Filled MUI "Help"
export const HelpIcon = ({ size = 24 }) => (
  <M size={size}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /></M>
);

// Filled MUI "Notifications"
export const BellIcon = ({ size = 24 }) => (
  <M size={size}><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></M>
);

// sort arrow (downward)
export const SortDownIcon = ({ size = 24 }) => (
  <M size={size}><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" /></M>
);

// auto_graph (Material Symbol) — the sparkle/trend mark beside "View report"
export const AutoGraphIcon = ({ size = 24 }) => (
  <M size={size}><path d="m14.06 9.94-.94 2.06-.94-2.06L10.12 9l2.06-.94L13.12 6l.94 2.06L16.12 9l-2.06.94zM4.12 14l.94-2.06L7.12 11l-2.06-.94L4.12 8l-.94 2.06L1.12 11l2.06.94L4.12 14zm4.5-5 1.09-2.41L12.12 5.5 9.71 4.41 8.62 2 7.53 4.41 5.12 5.5l2.41 1.09L8.62 9zm-4 11.5 6-6.01 4 4L23.12 9.5l-1.41-1.41-6.09 6.84-4-4L3.12 19.09l1.5 1.41z" /></M>
);

// remove_circle_outline — the delete control on template rows
export const DeleteIcon = ({ size = 24 }) => (
  <M size={size}><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></M>
);

// drag_indicator — the 6-dot drag handle
export const DragIcon = ({ size = 24 }) => (
  <M size={size}><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></M>
);

// Recipe glyph — exact SVG fetched from the Figma dev server (notebook/receipt).
// Native size 10 × 10.667, sits inside the 20px navy recipe circle.
export const RecipeGlyph = () => (
  <svg width="10" height="10.667" viewBox="0 0 10 10.6667" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
    <path d="M9.33333 0C9.70152 0 10 0.298477 10 0.666667V10C10 10.3682 9.70152 10.6667 9.33333 10.6667H0.666667C0.298477 10.6667 0 10.3682 0 10V0.666667C0 0.298477 0.298477 0 0.666667 0H9.33333ZM8.66667 1.33333H1.33333V9.33333H8.66667V1.33333ZM8 6.66667V8H4V6.66667H8ZM3.33333 6.66667V8H2V6.66667H3.33333ZM8 4.66667V6H4V4.66667H8ZM3.33333 4.66667V6H2V4.66667H3.33333ZM8 2.66667V4H4V2.66667H8ZM3.33333 2.66667V4H2V2.66667H3.33333Z" fill="#fff" />
  </svg>
);

// Ingredient glyph — exact SVG fetched from the Figma dev server (sprout).
// Native size 10 × 12.5, sits inside the 20px green ingredient circle.
export const IngredientGlyph = () => (
  <svg width="10" height="12.5" viewBox="0 0 10 12.5" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
    <path d="M5.92168 1.75339L5.98337 1.66532C6.35555 1.15388 6.7433 0.845634 7.1622 0.748217C7.47873 0.674607 7.78505 0.922929 7.84638 1.30286C7.9077 1.68279 7.70082 2.05046 7.38429 2.12407C7.17732 2.1722 6.90485 2.46196 6.59572 3.00748C6.86072 3.01206 7.11529 3.03575 7.35962 3.07873C9.29706 3.41957 10.6071 5.82614 9.71334 9.09561C8.98128 11.7737 7.56313 12.967 5.64766 12.2516C5.35569 12.1571 5.14588 12.113 5.04234 12.113C5.00115 12.113 4.97344 12.1221 4.93854 12.1477L4.8121 12.2219C2.92349 13.0838 1.41578 11.9098 0.432692 9.14905C-0.214583 7.33134 -0.114339 5.84982 0.591024 4.71363C1.06773 3.94575 1.66049 3.50471 2.41306 3.13942C2.57068 3.06291 2.74802 3.00926 2.94649 2.97724C2.5326 2.50625 2.30001 1.79728 2.21393 0.878451L2.14286 0.119904L2.83837 0.0324559C4.31371 -0.153038 5.37078 0.461338 5.92168 1.75339ZM3.03308 4.46554C2.50414 4.72228 2.10897 5.0163 1.80939 5.49888C1.35445 6.23168 1.28627 7.23935 1.78789 8.64805C2.50958 10.6747 3.25839 11.2854 4.17008 10.9044C4.43218 10.7327 4.72818 10.6441 5.04234 10.6441C5.32399 10.6441 5.66323 10.7154 6.11377 10.862C7.1062 11.2322 7.79007 10.6568 8.32456 8.70149C8.99901 6.23414 8.17045 4.71201 7.11434 4.52622C6.58291 4.43273 5.94476 4.46724 5.20043 4.63772L5.03594 4.67539L4.87211 4.63482C3.8923 4.39218 3.25173 4.35941 3.03308 4.46554ZM3.67003 1.47059C3.75246 1.69014 3.85067 1.83508 3.95667 1.91164C4.11244 2.02414 4.32034 2.13684 4.57902 2.24786C4.36575 1.83372 4.06787 1.58175 3.67003 1.47059Z" fill="#fff" />
  </svg>
);
