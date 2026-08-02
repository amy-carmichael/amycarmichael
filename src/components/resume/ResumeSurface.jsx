import React from 'react';
import { MEEZ, OTHERS, EDUCATION, CERTIFICATIONS, SKILLS } from './resumeData';
import resumePdf from '../../assets/amy-carmichael-resume.pdf';

const SECTION_LABEL =
  'body-bold uppercase tracking-[0.08em] text-[var(--color-text-tertiary)] mb-[18px]';

const ExpDates = ({ dates, span }) => (
  <div className="body-medium text-[var(--color-text-tertiary)] flex flex-wrap items-center gap-2 mt-0.5">
    <span>{dates}</span>
    {span ? <><span>·</span><span>{span}</span></> : null}
  </div>
);

const ExpLogo = ({ icon, mark }) => (
  <div className="exp-logo">
    {icon ? (
      <img src={icon} alt="" loading="lazy" decoding="async" />
    ) : (
      <span className="title-medium text-[var(--color-text-tertiary)] opacity-[0.55] select-none">{mark}</span>
    )}
  </div>
);

const MeezBlock = () => (
  <div className="exp-company">
    <div className="exp-company-head">
      <ExpLogo icon={MEEZ.icon} />
      <div className="exp-company-meta">
        <div className="title-medium text-[var(--color-text-primary)]">{MEEZ.name}</div>
        <div className="body-medium text-[var(--color-text-secondary)]">{MEEZ.duration}</div>
      </div>
    </div>
    <div className="exp-roles">
      {MEEZ.roles.map((r, i) => (
        <div className="exp-role" key={r.title}>
          <div className="exp-gutter">
            <span className={'exp-dot' + (i === 0 ? ' exp-dot--current' : '')} />
            {i < MEEZ.roles.length - 1 && <span className="exp-rail-line" aria-hidden="true" />}
          </div>
          <div className="flex-auto min-w-0">
            <h4 className="title-small text-[var(--color-text-primary)]">{r.title}</h4>
            <ExpDates dates={r.dates} span={r.span} />
            {r.bullets?.length > 0 && (
              <ul className="exp-bullets">
                {r.bullets.map((b) => (
                  <li className="body-medium text-[var(--color-text-secondary)]" key={b}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SingleCompany = ({ c }) => (
  <div className="exp-company">
    <div className="exp-company-head">
      <ExpLogo mark={c.mark} />
      <div className="exp-single">
        <h4 className="title-small text-[var(--color-text-primary)]">{c.title}</h4>
        <div className="body-medium text-[var(--color-text-secondary)]">{c.sub}</div>
        <ExpDates dates={c.dates} />
        {c.desc && (
          <p className="exp-single-desc body-medium text-[var(--color-text-secondary)]">{c.desc}</p>
        )}
      </div>
    </div>
  </div>
);

export const ResumeSurface = () => (
  <div className="exp-surface">
    <div className="flex items-center justify-between gap-4 mb-8">
      <h2 className="title-large text-[var(--color-text-primary)]">Resume</h2>
      <a
        href={resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        title="Open resume in new tab"
        className="inline-flex items-center gap-2 body-medium text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent-secondary)]"
      >
        <span>Open PDF</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 shrink-0">
          <path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1z" />
        </svg>
      </a>
    </div>
    <h3 className={SECTION_LABEL}>Experience</h3>
    <MeezBlock />
    {OTHERS.map((c) => <SingleCompany c={c} key={c.title} />)}

    <hr className="exp-section-divider" />
    <h3 className={SECTION_LABEL}>Education</h3>
    {EDUCATION.map((e) => (
      <div key={e.title}>
        <p className="title-small text-[var(--color-text-primary)]">{e.title}</p>
        <p className="body-medium text-[var(--color-text-secondary)] mt-0.5">{e.sub}</p>
      </div>
    ))}

    <hr className="exp-section-divider" />
    <h3 className={SECTION_LABEL}>Certifications</h3>
    <div>
      {CERTIFICATIONS.map((c) => (
        <div className="exp-edu-item" key={c.title}>
          <p className="title-small text-[var(--color-text-primary)]">{c.title}</p>
          <p className="body-medium text-[var(--color-text-secondary)] mt-0.5">{c.sub}</p>
          <p className="label-small text-[var(--color-text-tertiary)] mt-0.5">{c.meta}</p>
        </div>
      ))}
    </div>

    <hr className="exp-section-divider" />
    <h3 className={SECTION_LABEL}>Skills</h3>
    {SKILLS.map((s) => (
      <p className="body-medium text-[var(--color-text-primary)]" key={s}>{s}</p>
    ))}
  </div>
);
