import React from 'react';
import { IMG, COPY } from '../../components/meez/meezPageData';
import { Panel } from '../../components/meez/Panel';
import { NarrativeCard } from '../../components/meez/NarrativeCard';
import { ProjectPage } from '../../components/meez/ProjectPage';
import { CaseStudyTitle } from '../../components/filters/CaseStudyTitle';
import { CaseStudyBody as Body } from '../../components/filters/CaseStudyBody';
import { MockupBlock, MOCKUP_MEDIA } from '../../components/filters/MockupBlock';
import { InventoryListMock, InventoryMockups } from '../../components/inventory-mockup';
import invIaDiagram from '../../assets/inventory/information-architecture-diagram.png';
import invWfEmpty from '../../assets/inventory/inventory-empty-state-wireframe.png';
import invWfList from '../../assets/inventory/inventory-list-wireframe.png';
import invWfTemplate from '../../assets/inventory/inventory-template-wireframe.png';
import invWfCount from '../../assets/inventory/inventory-count-wireframe.png';

export const InventoryPage = ({ showPage }) => (
  <ProjectPage showPage={showPage} projectId="inventory">
    {/* Case-study scroll layout (new design) */}
    <div className="flex flex-col gap-16 px-4 pt-8 pb-4 sm:gap-20">
      <CaseStudyTitle
        title="Inventory"
        subtitle="Design Lead for a new feature that turns stock counts into real-time ingredient visibility for restaurant teams."
      />

      {/* Mockup 1 — hi-fi inventory landing page */}
      <MockupBlock caption="Inventory landing page">
        <InventoryListMock />
      </MockupBlock>

      <Body>
        <p>
          Our greatest challenge during this project was our tight timeline. We had three months to
          gather requirements, design the full feature and all the interactive states and user paths,
          QA and release. The only way to meet our deadline was if dev was able to start work almost
          immediately. Meaning, I was going to have to work alongside the front end.
        </p>
        <p>
          The first thing I did was create wireframes for the three new pages. In doing so, I was also
          mapping out the information architecture. Where in the product would this feature live? How
          will users access this feature? Where is the intersection of this feature and existing
          features?
        </p>
      </Body>

      {/* Mockup 2 — information architecture diagram */}
      <MockupBlock caption="Information architecture mapping to locate where in the product this feature would live.">
        <img
          src={invIaDiagram}
          alt="Information architecture diagram for the inventory feature"
          className={MOCKUP_MEDIA}
        />
      </MockupBlock>

      {/* Mockup 3 — early wireframes (2×2 grid) */}
      <MockupBlock caption="Early wireframes of the feature helped me plan ahead.">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <img src={invWfEmpty} alt="Inventory empty-state wireframe" className={MOCKUP_MEDIA} />
          <img src={invWfList} alt="Inventory list wireframe" className={MOCKUP_MEDIA} />
          <img src={invWfTemplate} alt="Inventory sheet template wireframe" className={MOCKUP_MEDIA} />
          <img src={invWfCount} alt="Inventory count wireframe" className={MOCKUP_MEDIA} />
        </div>
      </MockupBlock>

      <Body>
        <p>
          The beginning stages of this project were the most difficult, because this is where the
          design lift was the heaviest. I had to map out a foundation for this feature and be sure that
          it was the right path forward, because any adjustment down the line was going to be
          difficult. Then I went to work crafting the new components. It was a struggle to maintain
          creativity at times, because I felt that there were so many constraints I had to work around.
          However, once I got through the foundational work, the rest of my work felt more like
          assembling pieces.
        </p>
      </Body>

      {/* Mockup 4 — final designs, to be added later */}
      <MockupBlock
        empty
        caption="The final product was three new fully responsive features and a new and stronger connection between the Recipes and Ingredient features."
      />

      <Body>
        <p>
          The feature became a new acquisition driver for meez, attracting a distinct segment of
          customers that previously turned away from meez because of the lack of inventory management
          and analytics. It also strengthened the platform's ecosystem by creating tighter connections
          between features–users could add Recipes and Ingredients to Inventory sheets. For existing
          users, this meant that their onboarding cost was much lower because their Recipes and
          Ingredients were already in their accounts, all they had to do was search and add.
        </p>
      </Body>

      {/* Concluding hero — hi-fi mockups of the finished feature */}
      <MockupBlock>
        <InventoryMockups />
      </MockupBlock>
    </div>

    {/* Existing content (kept at the bottom of the page) */}
    <Panel bg={IMG.invPg1Bg}>
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

    <Panel bgClass="bg-gradient-to-br from-[#5f78c2] to-[#9a8fc6]">
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
  </ProjectPage>
);
