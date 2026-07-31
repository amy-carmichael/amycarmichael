import React from 'react';
import { CaseStudyTitle } from '../../components/filters/CaseStudyTitle';
import { CaseStudyBody as Body } from '../../components/filters/CaseStudyBody';
import { MockupBlock } from '../../components/filters/MockupBlock';
import { ProjectPage } from '../../components/meez/ProjectPage';
import { ColorSystem } from '../../components/design-system/ColorSystem';
import dsColorVideo from '../../assets/design system/color-consolidation.mp4';

export const DesignSystemPage = ({ showPage }) => (
  <ProjectPage showPage={showPage} projectId="design-system">
    {/* Case-study scroll layout — mirrors the Figma `design-system-webpage` frame */}
    <div className="flex flex-col gap-16 px-4 pt-8 pb-4 sm:gap-20">
      <CaseStudyTitle
        title="Color Token Library"
        subtitle="Design Lead for a color consolidation effort that turned fragmented legacy styling into the foundation for a scalable design system."
      />

      {/* Mockup 1 — the new color token library, rendered live rather than as a flat
          export. Figma node 696:2098: #FBFBFB (meez/grey25) card · 8px radius ·
          shadow-medium. Widened to max-w-4xl to match the other media on this page. */}
      <MockupBlock caption="The new color token library consisted of 44 key colors.">
        <div className="flex w-full max-w-4xl flex-col items-center justify-center overflow-hidden rounded-[8px] bg-[#FBFBFB] shadow-[0px_12px_28px_0px_rgba(0,0,0,0.2),0px_2px_4px_0px_rgba(0,0,0,0.1),inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]">
          <ColorSystem />
        </div>
      </MockupBlock>

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

      {/* Mockup 2 — color consolidation recording (loops) */}
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
    </div>
  </ProjectPage>
);
