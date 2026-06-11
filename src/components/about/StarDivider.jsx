import React, { useMemo } from 'react';

// Tiny seeded PRNG so each star has a stable-but-unique hand-drawn shape.
const mulberry32 = (seed) => () => {
  let t = (seed += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// Right-hand star: traced directly from the reference image (blue outline + red inner star).
const TRACED_OUTER =
  'M70.1 50.8 L68.2 52.2 L73.8 54.7 L71.6 56.1 L80.3 61.2 L91.7 69.2 L90.1 72.5 L81.5 71.0 L75.1 69.8 L70.9 69.3 L67.3 68.7 L64.8 68.8 L61.7 67.5 L59.6 67.1 L57.9 67.1 L56.3 67.2 L55.4 69.2 L54.6 73.0 L53.5 79.2 L51.5 87.5 L48.4 90.1 L45.6 87.0 L43.6 82.3 L41.9 78.7 L40.6 75.5 L39.5 72.8 L38.6 70.3 L37.8 68.3 L35.2 68.8 L30.3 71.4 L23.6 74.4 L17.6 75.5 L17.2 71.9 L20.2 66.7 L22.3 62.8 L24.1 59.6 L25.4 56.9 L26.3 54.7 L27.3 52.7 L22.4 51.1 L15.9 48.7 L8.9 45.1 L9.9 42.0 L15.3 40.2 L20.4 39.1 L24.0 38.0 L27.3 37.3 L29.4 36.3 L32.3 36.1 L34.1 35.3 L36.3 35.1 L37.9 34.6 L39.5 34.2 L41.2 34.3 L41.6 31.8 L42.0 28.2 L42.3 22.8 L43.2 15.8 L44.9 7.3 L48.2 4.4 L51.4 13.4 L53.2 23.1 L54.0 29.7 L56.1 28.3 L58.6 26.8 L61.7 24.6 L65.8 21.7 L70.9 18.7 L76.4 16.5 L78.4 19.2 L75.0 26.9 L72.4 32.4 L74.8 33.4 L80.0 33.2 L87.4 32.7 L88.6 35.8 L83.9 40.4 L79.0 44.2 L75.4 47.0 L72.4 49.1 Z';
const TRACED_INNER =
  'M62.9 50.5 L61.8 51.4 L60.6 52.1 L60.2 52.9 L61.0 54.1 L65.2 57.0 L74.6 63.8 L72.4 65.0 L68.1 64.3 L65.1 64.0 L62.4 63.4 L60.2 62.9 L58.3 62.4 L56.7 62.0 L55.4 61.6 L54.2 61.3 L53.1 61.0 L52.6 62.8 L51.8 65.2 L50.8 69.5 L49.0 76.4 L46.9 76.3 L45.6 72.3 L44.5 69.6 L43.5 67.5 L43.2 64.9 L42.6 63.2 L42.2 61.7 L42.0 60.1 L40.9 59.9 L37.9 61.2 L29.9 65.8 L24.7 66.9 L25.6 63.7 L27.8 60.3 L29.8 57.4 L31.9 55.1 L33.6 53.3 L35.1 51.8 L34.2 50.6 L28.4 49.2 L22.0 46.7 L22.2 44.5 L25.2 43.0 L28.4 42.0 L31.5 41.5 L34.1 41.1 L36.1 40.7 L38.4 40.8 L39.7 40.5 L41.0 40.3 L42.1 40.0 L43.0 39.6 L44.3 39.8 L45.1 39.3 L45.4 37.5 L45.8 35.1 L46.3 31.3 L47.0 24.3 L48.8 20.0 L50.7 33.1 L51.2 39.8 L51.8 40.8 L52.9 39.7 L54.1 38.9 L56.2 36.6 L58.7 34.5 L63.6 29.7 L67.5 27.7 L66.2 32.4 L61.5 39.4 L60.6 41.6 L63.2 41.2 L67.3 40.3 L73.0 39.4 L77.3 39.9 L74.4 43.1 L69.1 46.2 L66.7 48.0 L64.4 49.4 Z';

// Build a burst-star path with per-vertex jitter so it looks hand-drawn.
const starPath = (rand, { points, outer, inner, cx, cy, jitter }) => {
  const step = Math.PI / points;
  let d = '';
  for (let i = 0; i < points * 2; i++) {
    const base = i % 2 === 0 ? outer : inner;
    const r = base * (1 + (rand() - 0.5) * jitter);
    const a = i * step - Math.PI / 2 + (rand() - 0.5) * jitter * 0.4;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return `${d}Z`;
};

const Star = ({ seed, points = 7, size = 68, rotate = 0, boilDur = '0.5s', outerPath, innerPath }) => {
  const { outer, inner } = useMemo(() => {
    if (outerPath && innerPath) return { outer: outerPath, inner: innerPath };
    const rand = mulberry32(seed);
    return {
      outer: starPath(rand, { points, outer: 42, inner: 17, cx: 50, cy: 50, jitter: 0.16 }),
      inner: starPath(rand, { points, outer: 26, inner: 10, cx: 50, cy: 50, jitter: 0.14 }),
    };
  }, [seed, points, outerPath, innerPath]);

  const fid = `star-rough-${seed}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <defs>
        {/* Crayon-edge roughen, with the noise seed boiling in discrete (stop-motion) steps. */}
        <filter id={fid} x="-25%" y="-25%" width="150%" height="150%">
          <feTurbulence type="turbulence" baseFrequency="0.045" numOctaves="2" seed={seed} result="n">
            <animate
              attributeName="seed"
              calcMode="discrete"
              values={`${seed};${seed + 1};${seed + 2};${seed + 3}`}
              dur={boilDur}
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3.5" />
        </filter>
      </defs>
      <g filter={`url(#${fid})`}>
        <path
          d={outer}
          fill="none"
          strokeWidth="3.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{ stroke: 'var(--color-accent-primary)' }}
        />
        <path d={inner} style={{ fill: 'var(--color-accent-secondary)' }} />
      </g>
    </svg>
  );
};

export const StarDivider = () => (
  <div className="mt-28 mb-24 flex items-center justify-center gap-8" aria-hidden="true">
    <Star seed={7} points={7} rotate={0} boilDur="1.3s" />
    <Star seed={23} rotate={0} boilDur="1.6s" outerPath={TRACED_OUTER} innerPath={TRACED_INNER} />
  </div>
);
