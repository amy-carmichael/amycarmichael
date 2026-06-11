import React, { useEffect, useRef, useState } from 'react';

const PREFIX = 'systems thinker rather than screen ';
const SUFFIX = 'designer';
const PRODUCT = 'product ';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const TypingTagline = () => {
  const [pre, setPre] = useState('');
  const [suf, setSuf] = useState('');
  const [caretAt, setCaretAt] = useState('pre'); // 'pre' | 'suf'
  const runIdRef = useRef(0);

  useEffect(() => {
    // Claim this run; the cleanup bumps the id so a stale loop stops writing state.
    const myId = ++runIdRef.current;
    const stale = () => myId !== runIdRef.current;

    const run = async () => {
      while (!stale()) {
        setPre('');
        setSuf('');
        setCaretAt('pre');
        await sleep(600);
        if (stale()) return;

        for (let i = 1; i <= PREFIX.length; i++) {
          setPre(PREFIX.slice(0, i));
          await sleep(42 + Math.random() * 45);
          if (stale()) return;
        }

        setCaretAt('suf');
        for (let i = 1; i <= SUFFIX.length; i++) {
          setSuf(SUFFIX.slice(0, i));
          await sleep(80 + Math.random() * 40);
          if (stale()) return;
        }

        await sleep(1300);
        if (stale()) return;

        setCaretAt('pre');
        for (let i = PREFIX.length; i >= 0; i--) {
          setPre(PREFIX.slice(0, i));
          await sleep(22 + Math.random() * 16);
          if (stale()) return;
        }

        await sleep(350);
        if (stale()) return;

        for (let i = 1; i <= PRODUCT.length; i++) {
          setPre(PRODUCT.slice(0, i));
          await sleep(80 + Math.random() * 40);
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
      className="max-w-full overflow-hidden px-6"
      style={{
        fontSize: '3rem',
        fontWeight: 450,
        letterSpacing: '0.48px',
        lineHeight: 1.4,
        whiteSpace: 'pre',
        textAlign: 'center',
        color: 'var(--color-text-primary)',
      }}
    >
      <span>{pre}</span>
      {caretAt === 'pre' && <Caret />}
      <span style={{ color: 'var(--color-accent-primary)' }}>{suf}</span>
      {caretAt === 'suf' && <Caret />}
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
