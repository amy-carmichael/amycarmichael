import React from 'react';

// Interactive-prototype device frame — Figma "interactive prototype container" (node 133:15042).
// A labelled bezel that wraps any live prototype passed as `children`: an "Interactive Prototype"
// marker with a dashed connector dropping to the frame, a rounded outer border, a centered camera
// dot, and an inner screen border that clips its contents. Reusable around any mockup.
//
// The bezel chrome is fixed-px (real device frames don't scale with content); the screen is fluid.
// Specs are verbatim from Figma (stroke #85898D == --color-text-tertiary throughout):
//   • outer border 4px, radius 14px (rx 12 path + 2px half-stroke)
//   • screen border 2px, radius 4px; inset 24px sides / 40px top & bottom around a 1024×665.6 screen
//   • camera dot 16px ring, 2px stroke, horizontally centered, center 21px below the frame top
//   • marker text Futura PT Medium 18px; dashed line 1.5px wide, 4/4 dash, x=74, y 20→57 (frame top)
const STROKE = 'var(--color-text-tertiary)'; // #85898D

// Cap the frame so its screen interior equals the mockup's natural width (1024px) and never
// stretches wider on roomy columns: 1024 + 4px screen border + 40px side padding + 8px outer
// border = 1076px. Below that the frame is fluid and the mockup's own max-width:100% follows.
// `align` places the marker (label + connector) on either end of the frame. The
// right variant is a mirror: the label hugs the right edge and the connector sits
// 74px in from it, the same inset the left variant uses from the left edge.
export const InteractivePrototype = ({ children, label = 'Interactive Prototype', align = 'left', className = '' }) => (
  <div className={`mx-auto w-full max-w-[1076px] ${className}`}>
    {/* Marker — label + dashed connector dropping to the frame top */}
    <div className="relative h-[57px]">
      <span
        className={`absolute top-0 text-[18px] font-[450] leading-[1.5] text-[var(--color-text-tertiary)] ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
      >
        {label}
      </span>
      <div
        className={`absolute top-[20px] h-[37px] w-[1.5px] ${
          align === 'right' ? 'right-[74px]' : 'left-[74px]'
        }`}
        style={{ backgroundImage: `repeating-linear-gradient(to bottom, ${STROKE} 0 4px, transparent 4px 8px)` }}
        aria-hidden="true"
      />
    </div>

    {/* Device frame: 24px horizontal / 40px vertical inset around the screen, minus the 4px border */}
    <div className="relative rounded-[14px] border-4 border-[var(--color-text-tertiary)] px-5 pt-9 pb-9">
      {/* Camera dot — center sits 21px below the frame's outer top */}
      <div
        className="absolute left-1/2 top-[9px] h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[var(--color-text-tertiary)]"
        aria-hidden="true"
      />
      {/* Screen — clips the prototype to a rounded inner border */}
      <div className="overflow-hidden rounded-[4px] border-2 border-[var(--color-text-tertiary)]">
        {children}
      </div>
    </div>
  </div>
);
