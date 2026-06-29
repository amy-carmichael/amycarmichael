import React, { useEffect, useRef, useState } from 'react';
import '../../styles/filter-animation.css';
import prepStationIcon from '../../assets/filter-animation/prep-station-icon.svg';
import arrowDown from '../../assets/filter-animation/arrow-down.svg';
import closeIconRounded from '../../assets/filter-animation/close-icon-rounded.svg';
import searchIcon from '../../assets/filter-animation/search-icon.svg';
import checkboxIcon from '../../assets/filter-animation/checkbox-icon.svg';
import checkboxChecked from '../../assets/filter-animation/checkbox-checked.svg';

/* Non-interactive "element build" animation for the Filters case study.
   Mirrors the Figma `filter-element-animation` storyboard: the active-filter
   chip and the filter dropdown are assembled one element at a time. A single
   step counter drives every reveal; elements appear when `step` reaches their
   threshold, then the timeline holds, fades out as a unit, and loops. Every
   element keeps its final footprint at all times, so nothing reflows. */

// `step` = when the row reveals; `checkAt` = when its checkbox ticks (the step
// its matching applied-filter pill populates). Bar/Fry have no pill → stay off.
const FILTER_OPTIONS = [
  { label: 'Bakery (13)', step: 11, checkAt: 16 },
  { label: 'Sauté (40)', step: 12, checkAt: 18 },
  { label: 'To go (4)', step: 13, checkAt: 20 },
  { label: 'Bar (18)', step: 14 },
  { label: 'Fry (31)', step: 15 },
];

const TOTAL = 20;
const CANVAS_W = 743; // chip 263 + gap 80 + dropdown 400

export const FilterAnimation = () => {
  const [step, setStep] = useState(0);
  const [fading, setFading] = useState(false);
  const rootRef = useRef(null);

  // Proportional down-scale to fit the column. transform: scale() alone leaves
  // the full layout box reserved, so the sizer reads back the same factor for
  // its width/height — no dead band. (CSS can't derive a unitless ratio from
  // cqw, so this is measured in JS.)
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;
    const apply = () => {
      const w = el.clientWidth;
      const s = Math.max(0, Math.min(1, (w - 32) / CANVAS_W));
      el.style.setProperty('--fa-scale', String(s));
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Build timeline. Respects prefers-reduced-motion by rendering the finished
  // board statically and never starting the loop (no churn, no flicker).
  useEffect(() => {
    const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq && mq.matches) {
      setStep(TOTAL);
      return undefined;
    }
    let cancelled = false;
    let id;
    const run = (s) => {
      if (cancelled) return;
      if (s > TOTAL) {
        // Hold finished, then fade the whole board out as one unit and rebuild.
        setFading(true);
        id = setTimeout(() => {
          if (cancelled) return;
          setStep(0);
          setFading(false);
          id = setTimeout(() => run(1), 140);
        }, 520);
        return;
      }
      setStep(s);
      const delay = s === TOTAL ? 3200 : s === 0 ? 900 : 800;
      id = setTimeout(() => run(s + 1), delay);
    };
    run(0);
    return () => { cancelled = true; clearTimeout(id); };
  }, []);

  // `step >= n` → element n is revealed.
  const on = (n) => (step >= n ? 'fa-in' : '');

  return (
    <div className="fa" ref={rootRef}>
      <div className="fa-sizer">
        <div className={`fa-canvas ${fading ? 'fa-canvas--out' : ''}`}>
          {/* ---- Active filter chip (built element-by-element) ---- */}
          <div className={`fa-chip fa-rv drop-shadow-xl ${on(1)}`}>
            <div className="fa-chip__sel">
              <span className={`fa-ic16 fa-rv ${on(2)}`}>
                <img loading="lazy" decoding="async" src={prepStationIcon} alt="" />
              </span>
              <span className="fa-chip__label">
                <span className={`fa-chip__title fa-rv ${on(3)}`}>Prep Stations:</span>
                <span className={`fa-chip__value fa-rv ${on(4)}`}>Bakery, Sauté</span>
              </span>
              <span className={`fa-ic16 fa-rv ${on(5)}`}>
                <img loading="lazy" decoding="async" src={arrowDown} alt="" />
              </span>
            </div>
            <div className="fa-chip__del">
              <span className={`fa-ic16 fa-rv ${on(6)}`}>
                <img loading="lazy" decoding="async" src={closeIconRounded} alt="" />
              </span>
            </div>
          </div>

          {/* ---- Filter dropdown (built element-by-element) ---- */}
          <div className={`fa-dd fa-rv ${on(7)}`}>
            {/* applied-filters container (empty first, chips fill in last) */}
            <div className={`fa-applied fa-rv ${on(8)}`}>
              <span className={`fa-selfilter fa-rv ${on(16)}`}>
                <span>Bakery</span><span>(13)</span>
              </span>
              <span className={`fa-andor fa-rv ${on(17)}`}>Or</span>
              <span className={`fa-selfilter fa-rv ${on(18)}`}>
                <span>Sauté</span><span>(40)</span>
              </span>
              <span className={`fa-andor fa-rv ${on(19)}`}>Or</span>
              <span className={`fa-selfilter fa-rv ${on(20)}`}>
                <span>To go</span><span>(4)</span>
              </span>
            </div>

            {/* filter-item container: search, then checkbox options one-by-one */}
            <div className={`fa-items fa-rv ${on(9)}`}>
              <div className="fa-search-wrap">
                <div className={`fa-search fa-rv ${on(10)}`}>
                  <span className="fa-ic16"><img loading="lazy" decoding="async" src={searchIcon} alt="" /></span>
                  <span className="fa-search__ph">Search</span>
                </div>
              </div>
              {FILTER_OPTIONS.map((o) => (
                <div key={o.label} className={`fa-opt fa-rv ${on(o.step)}`}>
                  <span className="fa-cb">
                    <img loading="lazy" decoding="async" src={o.checkAt && step >= o.checkAt ? checkboxChecked : checkboxIcon} alt="" />
                  </span>
                  <span>{o.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
