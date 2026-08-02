import React, { useEffect, useRef, useState } from 'react';

// Line reads "systems thinker first, screen designer second", then the accent
// word "designer" is held while the lead and tail morph into "product designer".
const PREFIX = 'systems thinker first, screen ';
const ANCHOR = 'designer';
const TAIL = ' second';
const PRODUCT = 'product ';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const TypingTagline = () => {
  const [pre, setPre] = useState('');
  const [anchor, setAnchor] = useState('');
  const [tail, setTail] = useState('');
  const [caretAt, setCaretAt] = useState('pre'); // 'pre' | 'anchor' | 'tail'
  const runIdRef = useRef(0);

  useEffect(() => {
    // Claim this run; the cleanup bumps the id so a stale loop stops writing state.
    const myId = ++runIdRef.current;
    const stale = () => myId !== runIdRef.current;

    const run = async () => {
      while (!stale()) {
        setPre('');
        setAnchor('');
        setTail('');
        setCaretAt('pre');
        await sleep(600);
        if (stale()) return;

        // Type the lead: "systems thinker first, screen "
        for (let i = 1; i <= PREFIX.length; i++) {
          setPre(PREFIX.slice(0, i));
          await sleep(55 + Math.random() * 55);
          if (stale()) return;
        }

        // Type the accent anchor: "designer"
        setCaretAt('anchor');
        for (let i = 1; i <= ANCHOR.length; i++) {
          setAnchor(ANCHOR.slice(0, i));
          await sleep(105 + Math.random() * 50);
          if (stale()) return;
        }

        // Type the tail: " second"
        setCaretAt('tail');
        for (let i = 1; i <= TAIL.length; i++) {
          setTail(TAIL.slice(0, i));
          await sleep(105 + Math.random() * 50);
          if (stale()) return;
        }

        // Hold "systems thinker first, screen designer second".
        await sleep(1300);
        if (stale()) return;

        // Delete the tail, back to "…screen designer".
        for (let i = TAIL.length; i >= 0; i--) {
          setTail(TAIL.slice(0, i));
          await sleep(30 + Math.random() * 20);
          if (stale()) return;
        }

        // Delete the lead, leaving just the accent word "designer".
        setCaretAt('pre');
        for (let i = PREFIX.length; i >= 0; i--) {
          setPre(PREFIX.slice(0, i));
          await sleep(30 + Math.random() * 20);
          if (stale()) return;
        }

        await sleep(350);
        if (stale()) return;

        // Retype the lead as "product " → "product designer".
        for (let i = 1; i <= PRODUCT.length; i++) {
          setPre(PRODUCT.slice(0, i));
          await sleep(105 + Math.random() * 50);
          if (stale()) return;
        }

        // Caret rests at the 'pre' position — right before "designer".
        // Hold the finished "product designer" before looping again.
        await sleep(2400);
        if (stale()) return;
      }
    };

    run();
    return () => {
      runIdRef.current++;
    };
  }, []);

  return (
    <div
      role="img"
      aria-label='Animated text that ends reading "product designer"'
      className="max-w-full px-6"
      style={{
        // Fluid size so the longest line scales down on narrow viewports
        // instead of bleeding past the frame.
        fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
        fontWeight: 450,
        letterSpacing: '0.48px',
        lineHeight: 1.4,
        // pre-wrap preserves the typing whitespace but still lets the line
        // wrap; overflowWrap guards against any single long token.
        whiteSpace: 'pre-wrap',
        overflowWrap: 'break-word',
        textAlign: 'center',
        color: 'var(--color-text-primary)',
      }}
    >
      <span>{pre}</span>
      {caretAt === 'pre' && <Caret />}
      <span style={{ color: 'var(--color-accent-primary)' }}>{anchor}</span>
      {caretAt === 'anchor' && <Caret />}
      <span>{tail}</span>
      {caretAt === 'tail' && <Caret />}
    </div>
  );
};

const Caret = () => (
  <span
    aria-hidden="true"
    style={{
      display: 'inline-block',
      width: '2px',
      height: '1.05em',
      background: 'var(--color-text-primary)',
      verticalAlign: '-0.16em',
      marginLeft: '1px',
      animation: 'tt-blink 1s steps(1) infinite',
    }}
  />
);

export default TypingTagline;
