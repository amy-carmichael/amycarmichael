import React from 'react';
import { IMG, COPY } from '../../components/meez/meezPageData';
import { Panel } from '../../components/meez/Panel';
import { NarrativeCard } from '../../components/meez/NarrativeCard';
import { ProjectPage } from '../../components/meez/ProjectPage';
import { CaseStudyTitle } from '../../components/filters/CaseStudyTitle';
import { CaseStudyBody as Body } from '../../components/filters/CaseStudyBody';
import { MockupBlock, MOCKUP_MEDIA } from '../../components/filters/MockupBlock';
import { FilterMockup } from '../../components/filter-mockup';
import chatgptPrompt from '../../assets/filters/chatgpt-prompt.png';
import filterScroll from '../../assets/filters/filter-scroll.mov';

export const FiltersPage = ({ showPage }) => (
  <ProjectPage showPage={showPage} projectId="filters">
    {/* Case-study scroll layout (new design) */}
    <div className="flex flex-col gap-16 px-4 pt-8 pb-4 sm:gap-20">
      <CaseStudyTitle
        title="Filters"
        subtitle="Design Lead to re-imagine a system to users narrow down large culinary libraries through structured search criteria."
      />

      {/* Mockup 1 — omitted for this iteration */}
      <MockupBlock empty />

      <Body>
        <p>
          When the filters project came to me, instead of designing a completely new component, the
          plan was to build on top of the existing filter component and incorporate the AND/OR sorting
          capability. The product team assumed that this path forward would be the lighter lift and
          would get the project to release quicker.
        </p>
      </Body>

      {/* Mockup 2 — ChatGPT prompt */}
      <MockupBlock caption="Prompting ChatGPT to breakdown current filter logic cutdown the time spent in discovery.">
        <img
          src={chatgptPrompt}
          alt="ChatGPT breaking down the existing filter aggregation logic"
          className={`${MOCKUP_MEDIA} max-w-2xl`}
        />
      </MockupBlock>

      {/* Mockup 3 — scroll video (loops) */}
      <MockupBlock caption="If we had built the new functionality on top of the existing filter component, users would be stuck with absurdly tall scroll areas.">
        <video
          src={filterScroll}
          className={`${MOCKUP_MEDIA} max-w-4xl`}
          autoPlay
          loop
          muted
          playsInline
          aria-label="Recording of the existing filter drawer producing an excessively tall scroll area"
        />
      </MockupBlock>

      <Body>
        <p>
          The new design surfaces active filter categories directly onto the page. It moves away from
          the drawer, where the feature was completely hidden, and allows users easy access to
          available filter categories. This alone greatly reduced the interaction cost of using the
          feature and in doing so, users feel less of a commitment when exploring the feature. Their
          workspace persists in view and they no longer have to stop what they’re doing just to use
          the feature.
        </p>
      </Body>

      {/* Mockup 4 — interactive (auto-playing) demo of the redesigned filter */}
      <MockupBlock caption="The redesigned filter, surfaced directly on the page.">
        <FilterMockup />
      </MockupBlock>

      <Body>
        <p>
          I also introduced icons to go with each filter category. This subtly reinforces users’
          memory of using the feature, and the added imagery also brings a richer meaning to the
          product, its features and ultimately the brand.
        </p>
      </Body>

      {/* Mockup 5 — omitted for this iteration */}
      <MockupBlock empty />

      <Body>
        <p>
          Last but not least, I updated the functionality of the feature to include additional
          filtering capabilities within categories and between categories. Users are now able to
          easily switch views between inclusive and exclusive filtering. One of the difficulties I had
          when designing this feature was how to incorporate all the complexities and nuances of
          filtering while maintaining a clean interface for users. The last thing I’d want to do with
          this kind of update is reintroduce the level of cognitive load that existed with the old
          feature. I needed to maintain a clear distinction between active category chips, AND/OR
          pills and between category selection pills. To accomplish this, I strategically utilized
          differing border radii, subtle border colors as well as layering active state colors.
        </p>
      </Body>

      <Body>
        <p>
          The result was a filtering feature that consistently works across feature pages and with a
          multitude of device viewports. Within the first month of release, we saw an interaction
          increase of about 22%.
        </p>
      </Body>
    </div>

    {/* Existing content (kept at the bottom of the page) */}
    <Panel bg={IMG.filters1Bg}>
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

    <Panel bg={IMG.filter2Bg}>
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

    <Panel bgClass="bg-[#e4ecf6]">
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
  </ProjectPage>
);
