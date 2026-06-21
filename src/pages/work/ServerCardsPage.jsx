import React from 'react';
import { IMG, COPY, INTRO } from '../../components/meez/meezPageData';
import { Panel } from '../../components/meez/Panel';
import { NarrativeCard } from '../../components/meez/NarrativeCard';
import { ProjectPage } from '../../components/meez/ProjectPage';
import { CaseStudyTitle } from '../../components/filters/CaseStudyTitle';
import { CaseStudyBody as Body } from '../../components/filters/CaseStudyBody';
import { MockupBlock, MOCKUP_MEDIA } from '../../components/filters/MockupBlock';
import scIpad from '../../assets/server cards/server-card-mockup-ipad.png';
import scResearch from '../../assets/server cards/research-analysis.png';
import scIaDiagram from '../../assets/server cards/information-architecture-diagram.png';

export const ServerCardsPage = ({ showPage }) => (
  <ProjectPage showPage={showPage} projectId="server-cards">
    {/* Case-study scroll layout (new design) */}
    <div className="flex flex-col gap-16 px-4 pt-8 pb-4 sm:gap-20">
      <CaseStudyTitle
        title="Server Cards"
        subtitle="Design Lead on a service-reference feature that turns recipe data into staff-facing item guidance."
      />

      {/* Mockup 1 — iPad device render, bare on the page */}
      <MockupBlock surface={false}>
        <img
          src={scIpad}
          alt="Server card displayed on an iPad"
          className="mx-auto w-full max-w-xl"
        />
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

      {/* Mockup 4 — to be added later (empty placeholder) */}
      <MockupBlock
        empty
        caption="Users would be able to create, bulk print and share a view-only version of server cards."
      />

      <Body>
        <p>
          The next phase is focused on understanding how teams adopt server cards in day-to-day
          operations and where additional automation can reduce maintenance overhead. Future
          opportunities include expanding integrations with adjacent menu-management workflows and
          exploring new ways to distribute and consume server card content across both digital and
          physical touchpoints.
        </p>
      </Body>
    </div>

    {/* Existing content (kept at the bottom of the page) */}
    <Panel bg={IMG.introBg}>
      <div className="flex h-full w-full flex-col gap-8 md:flex-row md:items-center">
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

    <Panel bg={IMG.scPg1Bg}>
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

    <Panel bg={IMG.scPg2Bg}>
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

    <Panel bgClass="bg-[#a7b3a8]">
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
  </ProjectPage>
);
