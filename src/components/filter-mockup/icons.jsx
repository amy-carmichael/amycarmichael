import React from 'react';
import { IC } from './icons.data';

// FilterGlyph composes the 3 "tune" bars directly (not via the IC table).
import filterBar1 from '../../assets/filter-mockup/filter-bar1.svg';
import filterBar2 from '../../assets/filter-mockup/filter-bar2.svg';
import filterBar3 from '../../assets/filter-mockup/filter-bar3.svg';
import filterBar1Blue from '../../assets/filter-mockup/filter-bar1-blue.svg';
import filterBar2Blue from '../../assets/filter-mockup/filter-bar2-blue.svg';
import filterBar3Blue from '../../assets/filter-mockup/filter-bar3-blue.svg';

// Renders an icon at its exact glyph size, centered inside an optional `box`.
// `fit` scales the glyph proportionally so its largest side equals `fit` px
// (used to drop the 16px category glyphs into the 12.8px chip icon slot).
export const Icon = ({ name, box, fit, style }) => {
  let [src, w, h] = IC[name];
  if (fit) {
    const s = fit / Math.max(w, h);
    w = +(w * s).toFixed(3);
    h = +(h * s).toFixed(3);
  }
  const img = <img loading="lazy" decoding="async" src={src} width={w} height={h} alt="" style={{ display: 'block' }} />;
  const size = box || fit;
  if (!size) return img;
  return (
    <span style={{ width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none', ...style }}>
      {img}
    </span>
  );
};

// The 3-bar "tune" filter glyph (Figma composes 3 vectors, rotated -90 + flipped).
// `blue` swaps to the #3D5DF6 bars used by the active "Filter (1)" state.
export const FilterGlyph = ({ blue = false }) => {
  const bars = blue ? [filterBar1Blue, filterBar2Blue, filterBar3Blue] : [filterBar1, filterBar2, filterBar3];
  return (
    <span style={{ width: 19.2, height: 19.2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 0.667, transform: 'rotate(-90deg) scaleY(-1)' }}>
        {bars.map((s, i) => (
          <img loading="lazy" decoding="async" key={i} src={s} width={3.33} height={12} alt="" style={{ display: 'block' }} />
        ))}
      </span>
    </span>
  );
};
