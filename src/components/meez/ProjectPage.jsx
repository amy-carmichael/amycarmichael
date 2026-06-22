import React, { useCallback, useEffect } from 'react';
import { PROJECTS } from './meezPageData';

// Shared layout for a single meez sub-project page: a vertical stack of slides.
// Left/right arrow keys hop between the four project pages.
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
    <section className="pt-4 pb-12 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
};
