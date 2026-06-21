import React from 'react';
import { IMG, COPY, DS_STATS, DS_CAPTION } from '../../components/meez/meezPageData';
import { Panel } from '../../components/meez/Panel';
import { StatCard } from '../../components/meez/StatCard';
import { ProjectPage } from '../../components/meez/ProjectPage';

export const DesignSystemPage = ({ showPage }) => (
  <ProjectPage showPage={showPage} projectId="design-system">
    <Panel
      bg={IMG.designSystemBg}
      left={
        <div className="flex h-full w-full flex-col justify-center gap-4">
          <h2 className="display-large uppercase tracking-tight text-[var(--color-text-primary)]">
            The Design System
          </h2>
          <p className="body-medium text-[var(--color-text-secondary)]">{COPY.designSystem}</p>
        </div>
      }
      right={
        <div className="flex h-full w-full items-center justify-center">
          <div className="grid w-full grid-cols-2 gap-4">
            {DS_STATS.map((s) => (
              <StatCard key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        </div>
      }
    />

    <Panel
      bg={IMG.designSystemBg}
      left={
        <div className="flex h-full w-full flex-col justify-center gap-4">
          <img
            src={IMG.mDs}
            alt="Old color-mapping spreadsheet"
            className="w-full shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          />
          <p className="title-medium text-[var(--color-text-primary)]">{DS_CAPTION}</p>
        </div>
      }
      right={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={IMG.mDs2}
            alt="Blue-scale color tokens"
            className="max-h-full w-auto max-w-full drop-shadow-2xl"
          />
        </div>
      }
    />
  </ProjectPage>
);
