import React from 'react';
import { MEEZ, OTHERS, EDUCATION, CERTIFICATIONS, SKILLS } from './resumeData';

const SECTION_LABEL =
  'label-large uppercase tracking-[0.08em] text-[var(--color-text-tertiary)] mb-[18px]';

const ExpDates = ({ dates, span }) => (
  <div className="body-small text-[var(--color-text-tertiary)] flex flex-wrap items-center gap-2 mt-0.5">
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
        <div className="body-small text-[var(--color-text-secondary)]">{MEEZ.duration}</div>
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
                  <li className="body-small text-[var(--color-text-secondary)]" key={b}>{b}</li>
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
      </div>
    </div>
  </div>
);

export const ResumeSurface = () => (
  <div className="exp-surface">
    <h3 className={SECTION_LABEL}>Experience</h3>
    <MeezBlock />
    {OTHERS.map((c) => <SingleCompany c={c} key={c.title} />)}

    <hr className="exp-section-divider" />
    <h3 className={SECTION_LABEL}>Education</h3>
    {EDUCATION.map((e) => (
      <div key={e.title}>
        <p className="title-small text-[var(--color-text-primary)]">{e.title}</p>
        <p className="body-small text-[var(--color-text-secondary)] mt-0.5">{e.sub}</p>
      </div>
    ))}

    <hr className="exp-section-divider" />
    <h3 className={SECTION_LABEL}>Certifications</h3>
    <div>
      {CERTIFICATIONS.map((c) => (
        <div className="exp-edu-item" key={c.title}>
          <p className="title-small text-[var(--color-text-primary)]">{c.title}</p>
          <p className="body-small text-[var(--color-text-secondary)] mt-0.5">{c.sub}</p>
          <p className="label-small text-[var(--color-text-tertiary)] mt-0.5">{c.meta}</p>
        </div>
      ))}
    </div>

    <hr className="exp-section-divider" />
    <h3 className={SECTION_LABEL}>Skills</h3>
    {SKILLS.map((s) => (
      <p className="body-small text-[var(--color-text-primary)]" key={s}>{s}</p>
    ))}
  </div>
);
