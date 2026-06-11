import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  IMG,
  COPY,
  INTRO,
  DS_STATS,
  DS_CAPTION,
  PAGES,
  SECTIONS,
} from '../components/meez/meezPageData';
import { Panel } from '../components/meez/Panel';
import { StatCard } from '../components/meez/StatCard';
import { NarrativeCard } from '../components/meez/NarrativeCard';
import { MeezStepper } from '../components/meez/MeezStepper';

const TOTAL = PAGES.length;
const sectionForPage = (i) => PAGES[i]?.section;

export const MeezPage = () => {
  const pageRefs = useRef([]);
  const setRef = (i) => (el) => { pageRefs.current[i] = el; };

  const [activePage, setActivePage] = useState(0);
  // After a click/keyboard jump, ignore scroll-spy briefly so the two don't fight.
  const suppressUntil = useRef(0);

  // Scroll-spy: the most-visible page becomes the active page.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < suppressUntil.current) return;
        let best = null;
        for (const e of entries) {
          if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) {
            best = e;
          }
        }
        if (best) {
          const idx = Number(best.target.dataset.pageIndex);
          if (!Number.isNaN(idx)) setActivePage(idx);
        }
      },
      { threshold: [0.25, 0.5, 0.75] }
    );
    pageRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goToPage = useCallback((idx) => {
    const clamped = Math.max(0, Math.min(TOTAL - 1, idx));
    const el = pageRefs.current[clamped];
    if (!el) return;
    suppressUntil.current = Date.now() + 700;
    setActivePage(clamped);
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  const goToSection = useCallback(
    (sectionId) => {
      const sec = SECTIONS.find((s) => s.id === sectionId);
      if (sec) goToPage(sec.firstPage);
    },
    [goToPage]
  );

  // Left/right arrow keys step through pages (ignored while typing in a field).
  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); goToPage(activePage + 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); goToPage(activePage - 1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activePage, goToPage]);

  return (
    <section className="pt-4 pb-28 md:pb-32 max-w-[1024px] mx-auto">
      <div className="flex flex-col gap-4">
        {/* 01 — Intro / title: meez wordmark, pitch, pills + role on the left;
            five-photo collage in two staggered columns on the right. */}
        <Panel ref={setRef(0)} index={0} bg={IMG.introBg} tone="light">
          <div className="flex h-full w-full flex-col gap-8 md:flex-row md:items-center">
            {/* Left — text column */}
            <div className="flex w-full flex-col md:w-[44%]">
              <div className="flex flex-col gap-6">
                <img
                  src={IMG.meezLogoWhite}
                  alt="meez"
                  className="h-[30px] w-auto self-start"
                />
                <p className="headline-medium text-white">{INTRO.body}</p>
                <div className="flex flex-wrap gap-2">
                  {INTRO.pills.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-white/40 px-3 py-1 body-small text-white"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 md:mt-20">
                <p className="title-large text-white">{INTRO.role}</p>
                <p className="title-large text-white">{INTRO.year}</p>
              </div>
            </div>

            {/* Right — two-column photo collage. The left column (2 photos) is
                vertically centered against the taller right column (3 photos), so the
                leftover height sits as blue space above the receipts shot. */}
            <div className="flex w-full items-center gap-3 md:flex-1">
              <div className="flex flex-1 flex-col gap-3">
                <img src={IMG.introC0} alt="" className="w-full aspect-[5/3] rounded-[8px] object-cover" />
                <img src={IMG.introC2} alt="" className="w-full aspect-[5/6] rounded-[8px] object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <img src={IMG.introC5} alt="" className="w-full aspect-[11/10] rounded-[8px] object-cover" />
                <img src={IMG.introC4} alt="" className="w-full aspect-[3/2] rounded-[8px] object-cover" />
                <img src={IMG.introC1} alt="" className="w-full aspect-[16/9] rounded-[8px] object-cover object-[center_75%]" />
              </div>
            </div>
          </div>
        </Panel>

        {/* 02 — Filters 1 (THE WHY): title + story card left, filter mockup right. */}
        <Panel ref={setRef(1)} index={1} bg={IMG.filters1Bg} tone="light" eyebrow="Features" numberTopRight>
          <div className="flex h-full w-full flex-col gap-6 md:flex-row md:items-center md:gap-8">
            <div className="flex w-full flex-col gap-5 md:w-[38%]">
              <h2 className="display-large uppercase tracking-tight text-white">Filters</h2>
              <NarrativeCard label="The Why" tone="dark">{COPY.filtersWhy}</NarrativeCard>
            </div>
            <div className="flex w-full items-center justify-end md:flex-1 md:min-w-0">
              <img
                src={IMG.mFilters1}
                alt="Filters interface"
                className="w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </Panel>

        {/* 03 — Filters 2 (THE PROCESS): collage mockup above, story card below. */}
        <Panel ref={setRef(2)} index={2} bg={IMG.filter2Bg} tone="dark" eyebrow="Features: Filters" numberTopRight metaColor="text-[var(--color-text-primary)]">
          <div className="flex h-full w-full flex-col items-center justify-center gap-8 md:flex-row">
            <NarrativeCard label="The Process" tone="light" className="w-full max-w-[280px] shrink-0 md:w-[280px]">
              {COPY.filtersProcess}
            </NarrativeCard>
            <img
              src={IMG.mFilters2}
              alt="Filter UI collage"
              className="h-auto max-h-[60vh] w-auto max-w-full object-contain drop-shadow-xl md:h-[400px] md:max-h-full"
            />
          </div>
        </Panel>

        {/* 04 — Filters 3 (NEW): three-column photo/mockup collage + two story cards. */}
        <Panel ref={setRef(3)} index={3} bgClass="bg-[#e4ecf6]" tone="dark" eyebrow="Features: Filters" numberTopRight metaColor="text-[var(--color-text-primary)]">
          <div className="flex h-full w-full flex-col gap-6">
            <div className="flex flex-col gap-5 md:min-h-0 md:flex-1 md:flex-row">
              <div className="flex justify-center md:shrink-0">
                <img
                  src={IMG.mFilters3}
                  alt="Created-by filter"
                  className="max-h-[60vh] w-auto object-contain drop-shadow-xl md:h-full md:max-h-full"
                />
              </div>
              <div className="flex flex-1 flex-col gap-5">
                <img src={IMG.fPg3a} alt="" className="aspect-[4/3] w-full rounded-[8px] object-cover md:aspect-auto md:min-h-0 md:flex-1" />
                <img src={IMG.fPg3b} alt="" className="aspect-[4/3] w-full rounded-[8px] object-cover object-top md:aspect-auto md:min-h-0 md:flex-1" />
              </div>
              <img src={IMG.fPg3c} alt="" className="aspect-[3/4] w-full rounded-[8px] object-cover md:aspect-auto md:h-full md:w-[26%]" />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <NarrativeCard label="The Outcome">{COPY.filtersOutcome}</NarrativeCard>
              <NarrativeCard label="Future">{COPY.filtersFuture}</NarrativeCard>
            </div>
          </div>
        </Panel>

        {/* 05 — Server Cards 1 (THE WHY): title + story card left, recipe-card mockup right. */}
        <Panel ref={setRef(4)} index={4} bg={IMG.scPg1Bg} tone="dark" eyebrow="Features" numberTopRight metaColor="text-[var(--color-text-primary)]">
          <div className="flex h-full w-full flex-col gap-6 md:flex-row md:items-stretch md:gap-6">
            <div className="flex w-full flex-col md:w-[500px]">
              <img
                src={IMG.serverCardBg}
                alt=""
                className="aspect-[3/2] w-full rounded-[8px] object-cover drop-shadow-xl md:aspect-auto md:min-h-0 md:flex-1"
              />
              <h2 className="mt-6 display-large uppercase tracking-tight text-[var(--color-text-primary)]">
                Server Cards
              </h2>
              <NarrativeCard label="The Why" className="mt-3">{COPY.serverWhy}</NarrativeCard>
            </div>
            <div className="flex w-full items-end justify-center md:h-full md:flex-1 md:min-w-0">
              <img
                src={IMG.mSc1a}
                alt="Server card editor"
                className="max-h-full w-auto max-w-full drop-shadow-2xl md:h-full"
              />
            </div>
          </div>
        </Panel>

        {/* 06 — Server Cards 2 (THE PROCESS): two independent columns —
            create-card mockup over pots photo (left); desserts photo over story card (right). */}
        <Panel ref={setRef(5)} index={5} bg={IMG.scPg2Bg} tone="dark" eyebrow="Features: Server Cards" numberTopRight metaColor="text-white">
          <div className="flex h-full w-full flex-col gap-4 md:flex-row">
            <div className="flex w-full flex-col gap-4 md:w-1/2">
              <div className="flex min-h-0 flex-[1.4] items-center justify-center">
                <img
                  src={IMG.mScCreate}
                  alt="Create server card dialog"
                  className="max-h-full w-auto max-w-full drop-shadow-xl"
                />
              </div>
              <img src={IMG.scPg2a} alt="" className="aspect-[4/3] w-full rounded-[8px] object-cover md:aspect-auto md:min-h-0 md:flex-1" />
            </div>
            <div className="flex w-full flex-col gap-4 md:w-1/2">
              <img src={IMG.scPg2b} alt="" className="aspect-[4/3] w-full rounded-[8px] object-cover md:aspect-auto md:min-h-0 md:flex-1" />
              <NarrativeCard label="The Process" className="flex-1">{COPY.serverProcess}</NarrativeCard>
            </div>
          </div>
        </Panel>

        {/* 07 — Server Cards 3 (NEW): photo + two mockups + staff photo, NEXT card on the right. */}
        <Panel ref={setRef(6)} index={6} bgClass="bg-[#a7b3a8]" tone="dark" eyebrow="Features: Server Cards" numberTopRight metaColor="text-[var(--color-text-primary)]">
          <div className="flex h-full w-full flex-col gap-4 md:flex-row">
            <div className="flex flex-1 flex-col gap-3">
              <img src={IMG.scPg3a} alt="" className="aspect-[4/3] w-full rounded-[8px] object-cover md:aspect-auto md:min-h-0 md:flex-1" />
              <div className="flex items-center justify-center md:min-h-0 md:flex-1">
                <img
                  src={IMG.mSc2a}
                  alt="Print options dialog"
                  className="max-h-[70vh] w-auto max-w-full drop-shadow-xl md:max-h-full"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex items-center justify-center md:min-h-0 md:flex-1">
                <img
                  src={IMG.mSc2b}
                  alt="Choose existing photo dialog"
                  className="max-h-[70vh] w-auto max-w-full drop-shadow-xl md:max-h-full"
                />
              </div>
              <img src={IMG.scPg3b} alt="" className="aspect-[4/3] w-full rounded-[8px] object-cover md:aspect-auto md:min-h-0 md:flex-1" />
            </div>
            <div className="flex w-full items-center md:w-[30%]">
              <NarrativeCard label="Next">{COPY.serverNext}</NarrativeCard>
            </div>
          </div>
        </Panel>

        {/* 08 — Inventory 1 (THE PROBLEM): title + story card + photo left, count mockup right. */}
        <Panel ref={setRef(7)} index={7} bg={IMG.invPg1Bg} tone="light" eyebrow="Features" numberTopRight metaColor="text-white">
          <div className="flex h-full w-full flex-col gap-6 md:flex-row md:gap-8">
            <div className="flex w-full flex-col gap-4 md:w-[46%]">
              <h2 className="display-large uppercase tracking-tight text-white">Inventory</h2>
              <NarrativeCard label="The Problem" tone="dark">{COPY.inventoryProblem}</NarrativeCard>
              <img
                src={IMG.invPg1a}
                alt=""
                className="aspect-[4/3] w-full rounded-[8px] object-cover md:aspect-auto md:min-h-0 md:flex-1"
              />
            </div>
            <div className="flex w-full items-center justify-center md:h-full md:flex-1 md:min-w-0">
              <img
                src={IMG.mInvA}
                alt="Inventory count"
                className="max-h-full w-auto max-w-full drop-shadow-2xl md:h-full"
              />
            </div>
          </div>
        </Panel>

        {/* 09 — Inventory 2 (NEW): count mockup + PROCESS left; OUTCOME/WHAT'S NEXT + photos right. */}
        <Panel ref={setRef(8)} index={8} bgClass="bg-gradient-to-br from-[#5f78c2] to-[#9a8fc6]" tone="light" eyebrow="Features: Inventory" numberTopRight metaColor="text-white">
          <div className="flex h-full w-full flex-col gap-4 md:flex-row">
            <div className="flex w-full flex-col gap-4 md:w-[42%]">
              <div className="flex min-h-0 flex-1 items-center justify-center">
                <img
                  src={IMG.mInvB}
                  alt="Inventory count sheet"
                  className="max-h-full w-auto max-w-full drop-shadow-xl"
                />
              </div>
              <NarrativeCard label="Process" tone="dark">{COPY.inventoryProcess}</NarrativeCard>
            </div>
            <div className="flex w-full flex-col gap-4 md:flex-1">
              <NarrativeCard label="Outcome" tone="dark">{COPY.inventoryOutcome}</NarrativeCard>
              <NarrativeCard label="What's Next" tone="dark">{COPY.inventoryNext}</NarrativeCard>
              <div className="flex min-h-0 flex-1 gap-4">
                <img src={IMG.invPg2a} alt="" className="aspect-[4/3] w-full flex-1 rounded-[8px] object-cover md:aspect-auto" />
                <img src={IMG.invPg2b} alt="" className="aspect-[4/3] w-full flex-1 rounded-[8px] object-cover md:aspect-auto" />
              </div>
            </div>
          </div>
        </Panel>

        {/* 10 — The Design System: title + copy left, 2×2 stat grid right */}
        <Panel
          ref={setRef(9)}
          index={9}
          bg={IMG.designSystemBg}
          tone="dark"
          eyebrow="Features"
          numberTopRight
          metaColor="text-[var(--color-text-primary)]"
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

        {/* 11 — Design System (color tokens): spreadsheet + caption left, token mockup right */}
        <Panel
          ref={setRef(10)}
          index={10}
          bg={IMG.designSystemBg}
          tone="dark"
          eyebrow="Features: Design System"
          numberTopRight
          metaColor="text-[var(--color-text-primary)]"
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
      </div>

      {/* Floating frosted pager/stepper, fixed to the bottom center. */}
      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <MeezStepper
          sections={SECTIONS}
          activeSectionId={sectionForPage(activePage)}
          canPrev={activePage > 0}
          canNext={activePage < TOTAL - 1}
          onPrev={() => goToPage(activePage - 1)}
          onNext={() => goToPage(activePage + 1)}
          onDotClick={goToSection}
        />
      </div>
    </section>
  );
};
