import React from 'react';
import { CaseStudyTitle } from '../../components/filters/CaseStudyTitle';
import { CaseStudyHeading as Heading } from '../../components/filters/CaseStudyHeading';
import { CaseStudyBody as Body } from '../../components/filters/CaseStudyBody';
import { MockupBlock } from '../../components/filters/MockupBlock';
import { ProjectPage } from '../../components/meez/ProjectPage';
import { ColorSystem } from '../../components/design-system/ColorSystem';
import dsColorVideo from '../../assets/design system/color-consolidation.mp4';
import typeInspect from '../../assets/design system/TypographyInspect.png';
import typeAnnotated from '../../assets/design system/TypographyAnnotated.png';
import typeSystem from '../../assets/design system/Typography.png';
import typeComponentized from '../../assets/design system/TypographyComponentized.png';

// Framed mockup media, matching the color-video styling used above on this page.
const DS_MEDIA = 'w-full max-w-4xl rounded-[8px] drop-shadow-xl';

export const DesignSystemPage = ({ showPage }) => (
  <ProjectPage showPage={showPage} projectId="design-system">
    {/* Case-study scroll layout — mirrors the Figma `design-system-webpage` frame.
        Spacing matches the Menus case study: gap-16/20 between sections, gap-8
        within each section. */}
    <div className="flex flex-col gap-16 px-4 pt-8 pb-4 sm:gap-20">
      <CaseStudyTitle
        title="Color Token Library"
        subtitle="Design Lead for a color consolidation effort that turned fragmented legacy styling into the foundation for a scalable design system."
      />

      {/* Hero — the new color token library, rendered live rather than as a flat
          export. Figma node 696:2098: #FBFBFB (meez/grey25) card · 8px radius ·
          shadow-medium. Capped at 650px per design. */}
      <MockupBlock caption="The new color token library consisted of 44 key colors.">
        <div className="flex w-full max-w-[650px] flex-col items-center justify-center overflow-hidden rounded-[8px] bg-[#FBFBFB] shadow-[0px_12px_28px_0px_rgba(0,0,0,0.2),0px_2px_4px_0px_rgba(0,0,0,0.1),inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]">
          <ColorSystem />
        </div>
      </MockupBlock>

      <section className="flex flex-col gap-8">
        <Heading>1. Creating a color system out of a cache of hardcoded values</Heading>

        <Body>
          <p>
            At a small company, the biggest challenge when it comes to maintaining a reusable component
            library and styling tokens is capacity. However, at meez, we were multitudes behind that
            even. There wasn’t anything to maintain, because almost nothing was set up correctly.
          </p>
          <p>
            One of the first things I asked the front-end team when I started was what color and type
            system they were using. There wasn’t a component library in Figma, so I sort of knew the
            answer to the question before they answered.
          </p>
          <p>
            The answer was that there was no single answer. Devs were doing a combination of hardcoding
            values each time, using colors or type styles that were existing but varied from page to
            page, using a custom theme sheet and a Material UI theme sheet. On top of that, there were
            so many deprecated styling attributes from MUI v4 and MUI v5.
          </p>
        </Body>

        {/* Color consolidation recording (loops) */}
        <MockupBlock caption="I manually extracted every hardcoded color value from the repo and organized each instance by hue and shade.">
          <video
            src={dsColorVideo}
            className="w-full max-w-4xl rounded-[8px] drop-shadow-xl"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Recording of hardcoded color values being extracted and organized by hue and shade"
          />
        </MockupBlock>

        <Body>
          <p>
            There were 243 hardcoded values sprinkled all across the codebase, some using hex values and
            others using RGBa values. What was more insane was that so many colors were so closely
            matching, so my hypothesis is that some developers just chose arbitrary values by eye.
          </p>
          <p>
            As mentioned earlier, there was no product color pallet. There was no way to know which
            colors to keep and which ones to toss out. What I had to do will horrify many, but please
            have an open mind and know that this was before Claude Code was released. Personally, in
            order to move on with my life, I need to tell myself that it built character.
          </p>
          <p>
            I downloaded the repo and manually extracted every single hardcoded color value, created a
            table in Figma and organized each color by hue and contrast. After I did that, I grouped the
            colors that were most closely matching and then picked a hex value for each group that would
            be tokenized. The result was a token library of 38 colors, all in hex values, organized and
            ranked by color group. Then, I went back and created tickets for the dev to replace each
            instance with the newly defined color tokens.
          </p>
          <p>
            The work was extremely tedious and time-consuming, but when it was all completed, I could rid
            my handoff specs of all hex values. Additionally, anytime other teams like marketing or sales
            needed company assets, I had all core colors on hand and could easily share the deck. At the
            end, I had managed to clean up color values across the site by 84%, and the effort saved in
            the long run for myself and the front-end developers was incalculable.
          </p>
        </Body>
      </section>

      <section className="flex flex-col gap-8">
        <Heading>2. Let’s talk about Type</Heading>

        <Body>
          <p>
            I moved into establishing a type system next. I learned from the tedious work that came out
            of the color consolidation effort, and I went with a different approach for typography.
            Instead of manually sifting through the codebase for each hardcoded type value, I first
            defined the type system. The required a fair bit of manual work initially, but nothing near
            what went into creating the color system.
          </p>
        </Body>

        {/* Chrome inspect documenting existing type styling */}
        <MockupBlock caption="I used Chrome Inspect tools to document the existing type styling.">
          <img
            src={typeInspect}
            alt="The meez login page beside Chrome inspect tools documenting the existing type styling"
            loading="lazy"
            decoding="async"
            className={DS_MEDIA}
          />
        </MockupBlock>

        <Body>
          <p>
            To create a universal type system, one that would work across pages and viewport, I first
            went through all of the pages in the product and identified each type style by usage. I did
            this using Chrome Inspect tools by drilling down to each text element, and documenting role,
            styling attributes and any responsive behavior. (The product wasn’t fully integrated into the
            8 column grid layout, and so there were many manually sized text elements per breakpoint.)
          </p>
          <p>
            I identified each text component by “Headline,” “Title,” “Body” and etc. Once I had that basic
            list of type styles and their attributes, I narrowed down the list to the core styles and what
            would eventually become the list of type tokens I would design from and the developers would
            build from going forward. In documenting all the varying type styles, I found that there were
            inconsistencies littered in every area of the product. Some of the inconsistencies that I found
            were: page titles were different sizes, input fields and label text styling varied within a
            single page and line heights were defined in pixels, percentages, keywords and points. I was
            very eager to implement a uniform system, because I knew it would make a huge difference to the
            overall user experience and feel of the product.
          </p>
          <p>
            Implementation was where the real manual work came back into play. As the Product Designer, it
            was my job to not only define the type styling attributes, but also to create instructions for
            the functionality of each style.
          </p>
        </Body>

        {/* Type-token annotations across the ingredient page */}
        <MockupBlock caption="I manually annotated each instance where type tokens would be implemented across the entire site for the frontend team.">
          <img
            src={typeAnnotated}
            alt="An ingredient page with each text element annotated with its assigned type token"
            loading="lazy"
            decoding="async"
            className={DS_MEDIA}
          />
        </MockupBlock>

        {/* The new type system, each style and role defined */}
        <MockupBlock caption="The new type system with each style and role defined.">
          <img
            src={typeSystem}
            alt="The new typography type system table showing each style, size, weight and role"
            loading="lazy"
            decoding="async"
            className={DS_MEDIA}
          />
        </MockupBlock>

        {/* New type styles published to the Figma component library */}
        <MockupBlock caption="New type styles were added to the component library in Figma.">
          <img
            src={typeComponentized}
            alt="The Figma Manage Libraries dialog publishing the new type styles to the component library"
            loading="lazy"
            decoding="async"
            className={DS_MEDIA}
          />
        </MockupBlock>
      </section>
    </div>
  </ProjectPage>
);
