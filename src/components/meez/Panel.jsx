import React from 'react';

export const Panel = ({ bg, bgPosition = 'object-center', bgClass = '', left, right, bare = false, className = '', children }) => (
  <section
    className={`relative overflow-hidden rounded-[2px] shadow-[var(--shadow-lg)] md:aspect-[16/10] ${
      bg ? '' : bgClass
    } ${className}`}
  >
    {bg && (
      <img loading="lazy" decoding="async"
        src={bg}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover ${bgPosition}`}
      />
    )}

    {bare ? (
      <div className="relative md:absolute md:inset-0">{children}</div>
    ) : (left || right) ? (
      <div className="relative md:absolute md:inset-0 flex flex-col md:flex-row gap-6 p-6">
        <div className="flex w-full md:w-auto md:flex-1 md:min-w-0">{left}</div>
        <div className="flex w-full md:w-auto md:flex-1 md:min-w-0">{right}</div>
      </div>
    ) : (
      <div className="relative md:absolute md:inset-0 flex p-6">{children}</div>
    )}
  </section>
);
