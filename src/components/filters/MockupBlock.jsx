import React from 'react';

// Shared class for framed mockup media (image/video) — matches the established
// rounded-[8px] + drop-shadow-xl convention used across the meez case studies.
export const MOCKUP_MEDIA = 'w-full rounded-[2px] drop-shadow-xl';

// Reusable mockup container + caption.
// - Pass the mockup media (img/video) as children; by default it sits in a soft surface card.
// - `surface={false}` drops the card so the media sits bare on the page (e.g. a device render).
// - `caption` renders centered, tertiary-colored text beneath.
// - `empty` renders a placeholder card for mockups not yet built (sized via `emptyClassName`).
// Mirrors the Figma `*-container` + `mockup-caption` pattern.
export const MockupBlock = ({
  caption,
  children,
  empty = false,
  surface = true,
  emptyClassName = 'aspect-video',
  className = '',
}) => {
  const media = empty ? <div className={`w-full ${emptyClassName}`} /> : children;
  return (
    <figure className={`flex w-full flex-col items-center gap-3 ${className}`}>
      {surface ? (
        <div className="flex w-full flex-col items-center rounded-[8px] bg-[var(--color-bg-surface)] px-4 py-8 sm:px-8 sm:py-10">
          {media}
        </div>
      ) : (
        media
      )}
      {caption && (
        <figcaption className="body-medium max-w-2xl text-center text-[var(--color-text-tertiary)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
