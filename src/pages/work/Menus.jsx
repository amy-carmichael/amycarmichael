import React, { useEffect, useRef, useState } from 'react';
import { ProjectPage } from '../../components/meez/ProjectPage';
import { CaseStudyTitle } from '../../components/filters/CaseStudyTitle';
import { CaseStudyHeading as Heading } from '../../components/filters/CaseStudyHeading';
import { CaseStudyBody } from '../../components/filters/CaseStudyBody';
import { MockupBlock, MOCKUP_MEDIA } from '../../components/filters/MockupBlock';

import menuIntro1 from '../../assets/menus/MenuIntro1.png';
import menuIntro2 from '../../assets/menus/MenuIntro2.png';
import menuIntro3 from '../../assets/menus/MenuIntro3.png';
import createNewMenu from '../../assets/menus/CreateNewMenu.gif';
import newMenuItem from '../../assets/menus/NewMenuItem.gif';
import menuCategory1 from '../../assets/menus/MenuCategory1.png';
import menuCategory2 from '../../assets/menus/MenuCategory2.png';
import partiallyCompletedMenu from '../../assets/menus/partiallyCompletedMenu.png';
import menuVarianceInitial from '../../assets/menus/MenuVarianceInitial.png';
import menuVarianceFinal from '../../assets/menus/MenuVarianceFinal.png';
import varianceChange1 from '../../assets/menus/VarianceChange1.png';
import varianceChange2 from '../../assets/menus/VarianceChange2.png';
import importSalesData from '../../assets/menus/ImportSalesData.png';
import salesDateRange1 from '../../assets/menus/SalesDateRange1.png';
import salesDateRange2 from '../../assets/menus/SalesDateRange2.png';
import salesDateRange3 from '../../assets/menus/SalesDateRange3.png';
import salesDateRange4 from '../../assets/menus/SalesDateRange4.png';
import salesDateRange5 from '../../assets/menus/SalesDateRange5.png';
import menuUpgrade1 from '../../assets/menus/MenuUpgrade1.png';
import menuUpgrade2 from '../../assets/menus/MenuUpgrade2.png';

// Auto-advancing, looping image slideshow on the shared mockup-media surface.
// All source frames share the 45:32 aspect, so cross-fading avoids layout shift.
const Slideshow = ({ images, label, interval = 2600 }) => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  // Watch whether the slideshow is on screen.
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Only advance while visible; the timer restarts when it scrolls back into view.
  useEffect(() => {
    if (!visible) return undefined;
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % images.length),
      interval
    );
    return () => clearInterval(id);
  }, [visible, images.length, interval]);

  return (
    <div ref={ref} className={`${MOCKUP_MEDIA} relative aspect-[45/32] overflow-hidden bg-[var(--color-bg-white)]`}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={i === 0 ? label : ''}
          aria-hidden={i !== active}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === active ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

// A single full-width framed mockup image.
const Mockup = ({ src, caption, alt }) => (
  <MockupBlock caption={caption}>
    <img src={src} alt={alt} loading="lazy" decoding="async" className={MOCKUP_MEDIA} />
  </MockupBlock>
);

// Two framed mockups side by side (collapses to one column below sm).
const MockupPair = ({ a, b, caption, altA, altB }) => (
  <MockupBlock caption={caption}>
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      <img src={a} alt={altA} loading="lazy" decoding="async" className={`${MOCKUP_MEDIA} aspect-[45/32] object-cover`} />
      <img src={b} alt={altB} loading="lazy" decoding="async" className={`${MOCKUP_MEDIA} aspect-[45/32] object-cover`} />
    </div>
  </MockupBlock>
);

export const Menus = ({ showPage }) => (
  <ProjectPage showPage={showPage} projectId="menus">
    <div className="flex flex-col gap-16 px-4 pt-8 pb-4 sm:gap-20">
      <CaseStudyTitle
        title="Menus"
        subtitle="Design Lead for a new feature that turns recipe, sales and cost data into a flexible profitability forecasting workflow."
      />

      {/* Hero — MenuIntro1 → 2 → 3 looping slideshow */}
      <MockupBlock caption="Menus at first release through iterations">
        <Slideshow images={[menuIntro1, menuIntro2, menuIntro3]} label="The Menus interface at first release" />
      </MockupBlock>

      <section className="flex flex-col gap-8">
        <Heading>1. Project Overview</Heading>
        <CaseStudyBody>
          <p>
            Restaurant operators could already create recipes and track ingredient costs in meez, but
            understanding the profitability of an entire menu required a greater level of organization and
            calculation. I led the end-to-end design of meez’s menu engineering experience, beginning with the
            initial menu builder and expanding the feature through menu variance, sales data importing and plan
            upgrade paths.
          </p>
        </CaseStudyBody>
      </section>

      <section className="flex flex-col gap-8">
        <Heading>2. The Challenge</Heading>
        <CaseStudyBody>
          <p>Chefs, culinary directors, managers and restaurant owners often had the information needed to evaluate their menus, but that information lived in separate systems.</p>
          <p>Recipe and ingredient costs could be managed in meez. Actual sales data typically came from a POS report or spreadsheet. To understand menu performance, operators had to manually connect those sources and maintain their own calculations.</p>
          <p>That process became unreliable as costs changed. An ingredient price update could affect several recipes and menu items, but a separate spreadsheet would not reflect those changes unless someone manually updated it.</p>
          <p>The opportunity was to connect current culinary cost data with actual menu sales inside meez. This would allow operators to see how each item contributed to food cost, revenue and profit without rebuilding the analysis outside the platform.</p>
          <p>The challenge was not only computational. The existing application organized recipes, ingredients and menus as separate objects, even though users experienced them as parts of one financial workflow. My design needed to make those relationships visible without requiring the user to navigate through the underlying data structure.</p>
        </CaseStudyBody>
      </section>

      <section className="flex flex-col gap-8">
        <Heading>3. Framing the initial experience</Heading>
        <CaseStudyBody>
          <p>I began by mapping the relationship between the data that meez already contained and the information users needed to add:</p>
          <p>This model helped clarify which values came from the culinary system, which values were entered by the user and which values meez calculated.</p>
          <p>The default menu needed to represent actual performance. Sell Price and QTY Sold were not projections. They described what the restaurant sold during the period being analyzed. I designed the page around two levels of understanding. Summary metrics showed the financial performance of the entire menu while the table explained how individual items contributed to those totals.</p>
          <p>Within each row, I kept actual sales inputs beside the financial results they affected. This allowed users to follow the relationship between an item’s cost, its sell price, the number sold and the resulting profit without moving between separate editing and reporting views. The workflow also needed to support imperfect data. A menu item could have sales information but no recipe attached. A recipe could be missing the information required to calculate its full cost. Instead of treating every missing value as zero, I designed those gaps as actionable states that guided the user toward completing the analysis.</p>
          <p>This approach balanced the needs of expert users with the usability risks of a dense interface. Existing product audits had identified table readability and weak visual hierarchy as recurring problems, so the design needed to preserve professional-level detail without turning the menu into an undifferentiated spreadsheet.</p>
        </CaseStudyBody>
      </section>

      <section className="flex flex-col gap-8">
        <Heading>4. Menu object creation</Heading>
        <CaseStudyBody>
          <p>Once I had the data model and page hierarchy in place, I began mapping the flow for creating the menu. Users first named the menu and selected its owner. Ownership needed to be established before any data was added to the menu because it determined which Recipes and Ingredients were available in the typeahead search and which location costs would be used.</p>
        </CaseStudyBody>

        <Mockup
          src={createNewMenu}
          alt="The user flow of creating a new menu from the homepage"
          caption="The user flow of creating a new Menu from the homepage."
        />

        <CaseStudyBody>
          <p>The next challenge was adding items. I considered using a modal, but the workflow required users to search through their existing content, make a selection and sometimes review more information before saving. A modal would have covered the table and disconnected the task from the menu they were building.</p>
        </CaseStudyBody>

        <Mockup
          src={newMenuItem}
          alt="Adding a new menu item through the side drawer"
          caption="The drawer layout allowed users to add Recipes and/or Ingredients and set values for Qty and Unit in a focused setting."
        />

        <CaseStudyBody>
          <p>I used a side drawer instead. The menu remained visible while the user searched for Recipes or Ingredients, which preserved their place and reinforced the relationship between the item they were adding and the broader menu.</p>
          <p>Once an item was added, the user entered the actual Sell Price and QTY Sold directly in the table. meez combined those values with the cost of the connected Recipe or Ingredients, then calculated Food Cost %, Profit Margin, Revenue, Gross Profit and % of Sales.</p>
        </CaseStudyBody>

        <MockupPair
          a={menuCategory1}
          b={menuCategory2}
          altA="Creating a menu category"
          altB="Removing a menu category"
          caption="Creating and removing a category."
        />

        <CaseStudyBody>
          <p>The interface became dense quickly. There was no way around the amount of information required, so my focus was making the density intentional. Editable values appeared earlier in the row. Calculated values followed them. The summary cards stayed visually separate from the table so users could orient themselves before moving into the detail. Location remained visible near the menu-level results because different locations often had different data sets. The same menu could produce different results when it used another location’s ingredient costs. I also had to account for the fact that users would not always complete the menu in one sitting. An item could have sales data before it had a Recipe attached. A Recipe could also be missing the information required to calculate its full cost. I treated those gaps as incomplete work rather than converting them into zeros, which would have made the menu appear more complete than it actually was.</p>
          <p>The first release gave users one place to connect actual sales with the cost data they were already maintaining in meez. More importantly, it established the model that every later update would build on.</p>
        </CaseStudyBody>

        <Mockup
          src={partiallyCompletedMenu}
          alt="A partially completed menu showing empty, partial and completed states"
          caption="A partially completed menu, where items still missing a recipe or cost read as actionable gaps rather than zeros."
        />
      </section>

      <section className="flex flex-col gap-8">
        <Heading>5. Introducing Menu Variance</Heading>
        <CaseStudyBody>
          <p>Menu Variance was added after the initial version of Menus had been released. The existing page showed users what happened. The next question was, how they could use that information to plan their finances?</p>
          <p>The obvious approach would have been to let users edit Sell Price and QTY Sold directly, but doing that without preserving the existing values would erase the point of comparison. Users needed to experiment without losing the menu they were evaluating.</p>
          <p>I introduced a Track variance toggle as a deliberate mode change. When the user turned it on, meez captured the existing Sell Price and QTY Sold as the original values. The user could then change either field and compare the new result against that baseline.</p>
        </CaseStudyBody>

        <MockupPair
          a={menuVarianceInitial}
          b={menuVarianceFinal}
          altA="Menu with the variance toggle off"
          altB="Menu with the variance toggle on and an edited table state"
          caption="Turning on Track variance captures the current Sell Price and QTY Sold as the baseline to compare edits against."
        />

        <CaseStudyBody>
          <p>The intent was to keep everything in a single surface. The original summary cards already contained the metrics users were using to evaluate the menu, so I expanded those cards to show Current, Variance and Original together.</p>
          <p>The difficult part was ensuring that the relationship between the three aggregate numbers was easily understood. Current needed to remain the most prominent because it represented the scenario the user was actively working on. Original needed to stay visible as the reference point. Variance explained the effect of the change.</p>
          <p>The color treatment also needed to account for the meaning of the metric. An increase in Total Profit could be favorable, but an increase in Menu Cost % could be unfavorable. I could not use a blanket rule where every positive number was green and every negative number was red.</p>
        </CaseStudyBody>

        <MockupPair
          a={varianceChange1}
          b={varianceChange2}
          altA="A menu value before a change"
          altB="How the value change is reflected in variance"
          caption="How a value change is reflected in Variance."
        />

        <CaseStudyBody>
          <p>Menu Variance changed the role of the feature. Menus was no longer limited to explaining past performance. Users could use the same data to test a price change or a different sales mix before making that decision in the restaurant.</p>
        </CaseStudyBody>
      </section>

      <section className="flex flex-col gap-8">
        <Heading>6. Enabling sales data imports</Heading>
        <CaseStudyBody>
          <p>Manual entry of sales data was necessary for the initial release, but it wasn’t a realistic long-term workflow that would scale with users.</p>
          <p>Users’ sales data was native to their point-of-sale system. Asking them to copy every Sell Price and Quantity into meez added a tedious and lengthy task to a feature intended to simplify an already complicated financial processes.</p>
          <p>I designed an import flow that allowed users to upload a CSV from their point-of-sale system. The file populated Sell Price and QTY Sold for matching items. When the report contained an item that was not already on the menu, meez could add it with its sales information and allow the user to connect the appropriate Recipes or Ingredients afterward. That distinction mattered. The point-of-sale system knew what was sold, but it did not know how the item was constructed. This is where meez filled in the gap between actual food cost and revenue.</p>
        </CaseStudyBody>

        <Mockup
          src={importSalesData}
          alt="The CSV import flow and the resulting imported menu"
          caption="Uploading a CSV from the point-of-sale system populates Sell Price and QTY Sold for matching menu items."
        />

        <MockupBlock caption="Users could set a Sales Date Range using a date range selector component.">
          <Slideshow
            images={[salesDateRange1, salesDateRange2, salesDateRange3, salesDateRange4, salesDateRange5]}
            label="Setting a sales date range with the date range selector"
          />
        </MockupBlock>
      </section>

      <section className="flex flex-col gap-8">
        <Heading>7. Designing the feature-gated upgrade experience</Heading>
        <CaseStudyBody>
          <p>The upgrade experience came after Menus and its supporting workflows had already been established. The work was not about changing how the feature functioned. It was about introducing Menus to users whose accounts did not include access.</p>
          <p>The existing product relied heavily on Upgrade labels and locked navigation items. Those patterns communicated that a feature was unavailable, but did very little to explain what the user would gain by unlocking it.</p>
          <p>I wanted the experience to do more than stop the user at a feature gate, and so I designed a feature preview page using the actual Menus interface as the primary visual. Users could see the type of cost, revenue and profit analysis the feature provided before they encountered the Upgrade action. This gave the restriction context and made the value of the feature easier to understand than a generic plan message would have.</p>
        </CaseStudyBody>

        <MockupPair
          a={menuUpgrade1}
          b={menuUpgrade2}
          altA="Full-page upgrade teaser using the Menus interface for users on a Basic plan"
          altB="Upgrade modal for users on a Business plan"
          caption="Full page teaser for users on a Basic plan and an upgrade modal for users on a Business plan."
        />

        <CaseStudyBody>
          <p>I didn’t want the upsell to read like a separate marketing page that happened to sit inside the app. It needed to feel connected to the product the user had attempted to access. Using the Menus interface as the primary visual allowed the feature to explain itself rather than relying entirely on promotional copy.</p>
        </CaseStudyBody>
      </section>

      <section className="flex flex-col gap-8">
        <Heading>8. Iteration and validation</Heading>
        <CaseStudyBody>
          <p>The initial release established Menus as a connected, but static workspace. Menu Variance added a separate space for experimentation without replacing that record. The CSV import changed how sales information entered the system while the sales date range clarified how those numbers should be interpreted. The feature-gated upgrade experience then needed to explain all of that value to someone who had never used the feature.</p>
          <p>One of the most challenging aspects of working on this feature also happened to be one of the most rewarding. Each addition to Menus called for an adjustment the user experience, and I was constantly having to take a step back and evaluate all the different components and how they interacted at a holistic level. Each part was equally important to the whole. Everything we added to Menus gave it more life and more depth.</p>
          <p>For me, designing the upgrade experience was so informative and eye-opening. It one of the first times that I designed for the duality of users–users that were also potential customers. I was still designing with the intention of a unified user experience, but there was also real estate on the page to converse with users and paint a picture of potential.</p>
          <p>This project reinforced something I had learned on other meez features which was, the difficult part of designing data-rich software is rarely displaying the data. It’s deciding what form of the data is most valuable to users and delivering that back to users in a way that is easily understood and is memorable enough for them to return for more.</p>
        </CaseStudyBody>
      </section>
    </div>
  </ProjectPage>
);
