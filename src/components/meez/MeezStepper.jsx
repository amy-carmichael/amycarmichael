import React from 'react';

const ChevronLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// Floating frosted pager/stepper. Arrows step one page at a time (driven by the
// page-level handlers); the dots map to the 5 sections, and the active section's
// dot expands into a named pill. Visual language adapted from the original
// project StepperNav so it stays consistent with the rest of the site.
export const MeezStepper = ({
  sections,
  activeSectionId,
  canPrev,
  canNext,
  onPrev,
  onNext,
  onDotClick,
}) => (
  <div className="flex items-center gap-1 rounded-full border border-white/60 bg-white/70 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md select-none">
    <button
      type="button"
      onClick={onPrev}
      disabled={!canPrev}
      aria-label="Previous page"
      className="flex h-7 w-7 items-center justify-center rounded-full text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-text-primary)] disabled:opacity-30 disabled:hover:text-[var(--color-text-tertiary)]"
    >
      <ChevronLeft />
    </button>

    <div className="flex items-center gap-1.5 px-1">
      {sections.map((sec) => {
        const isActive = sec.id === activeSectionId;
        return (
          <button
            key={sec.id}
            type="button"
            onClick={() => onDotClick(sec.id)}
            aria-label={sec.title}
            aria-current={isActive ? 'step' : undefined}
            className={
              isActive
                ? 'flex items-center justify-center whitespace-nowrap rounded-full bg-[var(--color-text-primary)] px-4 py-1.5 title-small text-white'
                : 'flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[var(--color-bg-secondary)] transition-colors hover:bg-[var(--color-text-tertiary)]'
            }
          >
            {isActive && sec.title}
          </button>
        );
      })}
    </div>

    <button
      type="button"
      onClick={onNext}
      disabled={!canNext}
      aria-label="Next page"
      className="flex h-7 w-7 items-center justify-center rounded-full text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-text-primary)] disabled:opacity-30 disabled:hover:text-[var(--color-text-tertiary)]"
    >
      <ChevronRight />
    </button>
  </div>
);
