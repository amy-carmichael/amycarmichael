import React from 'react';

export const Panel = React.forwardRef(
  (
    { index, bg, bgPosition = 'object-center', bgClass = '', tone = 'light', eyebrow, numberTopRight = false, metaColor, left, right, children },
    ref
  ) => {
    const number = String(index + 1).padStart(2, '0');
    const numberColor =
      tone === 'light' ? 'text-white/75' : 'text-[var(--color-text-tertiary)]';
    const metaCls = metaColor || numberColor;
    const framePad = eyebrow || numberTopRight ? 'p-6 pt-12' : 'p-6';

    return (
      <section
        ref={ref}
        data-page-index={index}
        className={`relative overflow-hidden rounded-[2px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] md:aspect-[16/10] ${
          bg ? '' : bgClass
        }`}
      >
        {bg && (
          <img
            src={bg}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover ${bgPosition}`}
          />
        )}

        {(left || right) ? (
          <div className={`relative md:absolute md:inset-0 flex flex-col md:flex-row gap-6 ${framePad}`}>
            <div className="flex w-full md:w-auto md:flex-1 md:min-w-0">{left}</div>
            <div className="flex w-full md:w-auto md:flex-1 md:min-w-0">{right}</div>
          </div>
        ) : (
          <div className={`relative md:absolute md:inset-0 flex ${framePad}`}>{children}</div>
        )}

        {eyebrow && (
          <span className={`pointer-events-none absolute top-4 left-6 z-10 label-large uppercase tracking-[0.12em] ${metaCls}`}>
            {eyebrow}
          </span>
        )}

        <span
          className={`pointer-events-none absolute z-10 label-small ${metaCls} ${
            numberTopRight ? 'top-4 right-6' : 'bottom-3 left-1/2 -translate-x-1/2'
          }`}
        >
          {number}
        </span>
      </section>
    );
  }
);

Panel.displayName = 'Panel';
