import React from 'react';
import { ProjectPage } from '../../components/meez/ProjectPage';
import { CaseStudyTitle } from '../../components/filters/CaseStudyTitle';
import { CaseStudyBody as Body } from '../../components/filters/CaseStudyBody';
import { MockupBlock, MOCKUP_MEDIA } from '../../components/filters/MockupBlock';
import scMockup from '../../assets/server cards/server-card-mockup.png';
import scResearch from '../../assets/server cards/research-analysis.png';
import scIaDiagram from '../../assets/server cards/information-architecture-diagram.png';
import scGrid1 from '../../assets/server cards/servercard-grid-1.png';
import scGrid2 from '../../assets/server cards/servercard-grid-2.png';
import scGrid3 from '../../assets/server cards/servercard-grid-3.png';
import scGrid4 from '../../assets/server cards/servercard-grid-4.png';
import scGrid5 from '../../assets/server cards/servercard-grid-5.png';
import scGrid6 from '../../assets/server cards/servercard-grid-6.png';
import scGrid7 from '../../assets/server cards/servercard-grid-7.png';
import scGrid8 from '../../assets/server cards/servercard-grid-8.png';
import scGrid9 from '../../assets/server cards/servercard-grid-9.png';
import scAddSection1 from '../../assets/server cards/server-card-add-section-1.png';
import scAddSection2 from '../../assets/server cards/server-card-add-section-2.png';

const SERVER_CARD_GRID = [
  scGrid1, scGrid2, scGrid3, scGrid4, scGrid5, scGrid6, scGrid7, scGrid8, scGrid9,
];

export const ServerCardsPage = ({ showPage }) => (
  <ProjectPage showPage={showPage} projectId="server-cards">
    {/* Case-study scroll layout (new design) */}
    <div className="flex flex-col gap-16 px-4 pt-8 pb-4 sm:gap-20">
      <CaseStudyTitle
        title="Server Cards"
        subtitle="Design Lead on a service-reference feature that turns recipe data into staff-facing item guidance."
      />

      {/* Mockup 1 — server card mockup on the shared surface card (bottom ~40% cropped) */}
      <MockupBlock caption="The server card feature paved the way for a new user group: front of house restaurant staff.">
        <div
          className="w-full overflow-hidden rounded-[8px] drop-shadow-xl"
          style={{ aspectRatio: '5771 / 3769' }}
        >
          <img
            src={scMockup}
            alt="Server card mockup"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </MockupBlock>

      <Body>
        <p>
          Months before I began designing, I partnered with Product to interview 13 key user
          accounts. We ran through a series of questions, ranging in specificity. We asked users
          basic questions like how they were using the application on the day-to-day. What did their
          workflow look like from login? I wanted to zero in on specific tasks they sought out to
          complete and what was the cadence of how often those tasks were completed? Then we asked
          more specific questions around server cards. This was an existing artifact in most fast
          casual restaurants, but every restaurant had a different system of creating and storing
          that information.
        </p>
      </Body>

      {/* Mockup 2 — research analysis */}
      <MockupBlock caption="Research analysis of the user interviews I had conducted.">
        <img
          src={scResearch}
          alt="Discovery summary from the user interviews"
          className={`${MOCKUP_MEDIA} max-w-4xl`}
        />
      </MockupBlock>

      <Body>
        <p>
          From our research I concluded that Server Cards needed to be easily created using existing
          source material (Recipes, Ingredients), editable after creation, compatible with multi-print
          and contain customizable sections.
        </p>
        <p>
          The first thing that I did before designing any screens was map out the information
          architecture of this feature and how it would be defined as an object in meez and as an
          object containing other objects.
        </p>
      </Body>

      {/* Mockup 3 — information architecture diagram */}
      <MockupBlock caption="Initial information architecture mapping">
        <img
          src={scIaDiagram}
          alt="Information architecture diagram for server cards"
          className={MOCKUP_MEDIA}
        />
      </MockupBlock>

      <Body>
        <p>
          I determined that “Ingredients” and “Allergens” should remain fixed, read-only fields. That
          data is inherited from Recipes and Ingredients, allowing edits directly from a server card
          would require additional write-back logic to update the source Recipe or Ingredient. The use
          case was not strong enough to justify the added complexity, and it would have introduced
          unnecessary ambiguity for users around where the data should be managed.
        </p>
      </Body>

      {/* Mockup 4 — add-section screens, side by side */}
      <MockupBlock caption="Users would be able to create, bulk print and share a view-only version of server cards.">
        <div className="grid w-full grid-cols-2 gap-4">
          <img src={scAddSection1} alt="Adding a section to a server card" className={MOCKUP_MEDIA} />
          <img src={scAddSection2} alt="Configuring the new server card section" className={MOCKUP_MEDIA} />
        </div>
      </MockupBlock>

      <Body>
        <p>
          The next phase is focused on understanding how teams adopt server cards in day-to-day
          operations and where additional automation can reduce maintenance overhead. Future
          opportunities include expanding integrations with adjacent menu-management workflows and
          exploring new ways to distribute and consume server card content across both digital and
          physical touchpoints.
        </p>
      </Body>

      {/* Photo grid — 3 × 3, full-bleed so the outer photos sit flush to the page
          edges, with even spacing between. Stays 3-up and scales down on smaller
          viewports. */}
      <div className="-mx-4 grid grid-cols-3 gap-2 sm:gap-3">
        {SERVER_CARD_GRID.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="block aspect-[45/32] w-full object-cover shadow-xl"
          />
        ))}
      </div>
    </div>
  </ProjectPage>
);
