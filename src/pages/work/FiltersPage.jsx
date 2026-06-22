import React from 'react';
import { IMG } from '../../components/meez/meezPageData';
import { Panel } from '../../components/meez/Panel';
import { SlideTitle } from '../../components/meez/SlideTitle';
import { ProjectPage } from '../../components/meez/ProjectPage';
import { CaseStudyTitle } from '../../components/filters/CaseStudyTitle';
import { CaseStudyBody as Body } from '../../components/filters/CaseStudyBody';
import { MockupBlock, MOCKUP_MEDIA } from '../../components/filters/MockupBlock';
import { FilterMockup } from '../../components/filter-mockup';
import { FilterAnimation } from '../../components/filter-animation';
import filterActiveMenu from '../../assets/filter-active-menu.png';
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

      {/* Mockup 1 — filter menu active */}
      <MockupBlock>
        <img
          src={filterActiveMenu}
          alt="The redesigned filter with the category menu active"
          className={`${MOCKUP_MEDIA} object-top`}
        />
      </MockupBlock>

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
          className="w-full rounded-[8px] drop-shadow-xl max-w-2xl"
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

      {/* Mockup 5 — element-build animation (active filter chip + dropdown) */}
      <MockupBlock
        surface={false}
        caption="I strategically utilized differing border radii, subtle border colors as well as layering active state colors."
      >
        <FilterAnimation />
      </MockupBlock>

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

    {/* End-of-page mockup slides (Figma `filter-slides`, node 697:3786) — reduced
        mockups placed on the background photo, each with the meez/Filters title. */}
    <Panel bare bg={IMG.filters1Bg}>
      <div className="relative flex flex-col gap-6 p-6 md:absolute md:inset-0 md:gap-0 md:p-0">
        <SlideTitle title="Filters" tone="light" className="md:absolute md:left-[6.7%] md:top-[16.7%] md:z-10" />
        <img
          src={IMG.mFilters1}
          alt="Redesigned filter landing page with the category menu open"
          className="w-full rounded-[8px] drop-shadow-2xl md:absolute md:left-[32%] md:top-[15.7%] md:w-[62%]"
        />
      </div>
    </Panel>

    <Panel bare bg={IMG.filter2Bg}>
      <div className="relative flex flex-col gap-6 p-6 md:absolute md:inset-0 md:gap-0 md:p-0">
        <SlideTitle title="Filters" tone="dark" className="md:absolute md:left-[6.8%] md:top-[37%] md:z-10" />
        <img
          src={IMG.mFilters2}
          alt="Filter category builder with AND/OR controls"
          className="w-full rounded-[8px] drop-shadow-xl md:absolute md:left-[21.8%] md:top-[18.8%] md:w-[56.5%]"
        />
      </div>
    </Panel>

    <Panel bare bgClass="bg-[#e4ecf6]">
      <div className="relative flex flex-col gap-6 p-6 md:absolute md:inset-0 md:gap-0 md:p-0">
        <img
          src={IMG.mFilters3}
          alt="Created-by filter menu"
          className="w-full rounded-[8px] drop-shadow-xl md:absolute md:left-[8.75%] md:top-[14.2%] md:w-[24.6%]"
        />
        <img
          src={IMG.fPg3a}
          alt=""
          className="aspect-[3/2] w-full rounded-[8px] object-cover md:absolute md:left-[37.6%] md:top-[13.1%] md:aspect-auto md:h-[28.6%] md:w-[27.8%]"
        />
        <img
          src={IMG.fPg3c}
          alt=""
          className="aspect-[2/3] w-full rounded-[8px] object-cover md:absolute md:left-[67%] md:top-[13.3%] md:aspect-auto md:h-[58.1%] md:w-[24.2%]"
        />
        <img
          src={IMG.fPg3b}
          alt=""
          className="aspect-[3/2] w-full rounded-[8px] object-cover md:absolute md:left-[37.6%] md:top-[44%] md:aspect-auto md:h-[28.6%] md:w-[27.8%]"
        />
        <SlideTitle title="Filters" tone="dark" className="md:absolute md:left-[78%] md:top-[79.7%] md:z-10" />
      </div>
    </Panel>
  </ProjectPage>
);
