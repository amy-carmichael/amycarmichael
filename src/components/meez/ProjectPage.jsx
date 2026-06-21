import React, { useCallback, useEffect } from 'react';
import { PROJECTS } from './meezPageData';
import { MeezStepper } from './MeezStepper';

// Shared layout for a single meez sub-project page: a vertical stack of slides
// plus a fixed bottom switcher that hops between the four project pages.
export const ProjectPage = ({ showPage, projectId, children }) => {
  const idx = PROJECTS.findIndex((p) => p.id === projectId);

  const goToProject = useCallback(
    (i) => {
      const proj = PROJECTS[i];
      if (proj) showPage(`work/${proj.id}`);
    },
    [showPage]
  );

  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); goToProject(idx + 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); goToProject(idx - 1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [idx, goToProject]);

  return (
    <section className="pt-4 pb-28 md:pb-32 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-4">{children}</div>

      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <MeezStepper
          sections={PROJECTS}
          activeSectionId={projectId}
          canPrev={idx > 0}
          canNext={idx < PROJECTS.length - 1}
          onPrev={() => goToProject(idx - 1)}
          onNext={() => goToProject(idx + 1)}
          onDotClick={(id) => showPage(`work/${id}`)}
        />
      </div>
    </section>
  );
};
