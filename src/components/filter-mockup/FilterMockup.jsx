import React, { useEffect, useState } from 'react';
import '../../styles/filter-mockup.css';
import { Icon, FilterGlyph, IC } from './icons';
import avatar from '../../assets/inventory/avatar.png';

const Iconsrc = (name) => IC[name][0];

/* ----- Data --------------------------------------------------------------- */
const PILLS = [
  { name: 'Recipes', icon: 'pillRecipes', bg: '#3c4679', active: true },
  { name: 'Ingredients', icon: 'pillIngredients', bg: '#3f908a' },
  { name: 'Menus', icon: 'pillMenus', bg: '#6234f2' },
  { name: 'Recipe Books', icon: 'pillRecipebooks', bg: '#f3a642' },
  { name: 'Docs', icon: 'pillDocs', bg: '#6234f2' },
  { name: 'New Purchased Items', icon: 'pillPurchase', bg: '#3f908a' },
];

const CATS = [
  { name: 'Needs Attention', icon: 'catNeedsAttention' },
  { name: 'Allergens', icon: 'catAllergens' },
  { name: 'Created by', icon: 'catCreatedby' },
  { name: 'Prep Stations', icon: 'catPrepstations' },
  { name: 'Ingredients', icon: 'catIngredients' },
  { name: 'Tags', icon: 'catTags' },
];

const STATUS = { review: 'Ready for Review', draft: 'Draft', published: 'Published' };

const ROWS = [
  { n: 'Pork + Pickles Sandwich', s: 'review', u: 'About 1 hour ago' },
  { n: 'Koji Mayo', s: 'review', u: 'About 1 hour ago' },
  { n: 'Jardiniere', s: 'draft', u: 'About 1 hour ago' },
  { n: 'Italian Dressing', s: 'draft', u: 'About 1 hour ago' },
  { n: 'Pickled Persian Cucumbers', s: 'draft', u: 'April 11' },
  { n: 'French Fries', s: 'published', u: 'April 11' },
  { n: 'Crispy Golden French Fries', s: 'published', u: 'April 11' },
  { n: 'Savory Seasoned Potato Wedges', s: 'published', u: 'April 11' },
  { n: 'Zesty Herb-Infused Potato Bites', s: 'published', u: 'April 11' },
  { n: 'Crunchy Garlic Parmesan Potato Fries', s: 'published', u: 'April 11' },
  { n: 'Sweet Potato Fries Delight', s: 'published', u: 'April 11' },
];
const CHECKS = ['Empty recipes (8)', 'Missing total yield (3)', 'Contains undefined ingredients (11)'];

/* ----- Animation timeline ------------------------------------------------- */
// Each step: duration + the UI state it represents. Cursor is [x, y] in the
// 1024×665.6 frame coordinate space. Move steps are >= the 0.55s cursor easing
// so the pointer always settles before the next beat; the table never reorders.
const STEPS = [
  { ms: 1400, cur: [905, 86], idle: true },                                      // rest — cursor hidden; repositions onto the Filter btn invisibly
  { ms: 500, cur: [905, 86] },                                                   // fade in ON the Filter btn (no move → no back-and-forth)
  { ms: 450, cur: [905, 86], fHover: true },                                     // arrived → hover appears
  { ms: 240, cur: [905, 86], fHover: true, down: true },                         // click
  { ms: 1100, cur: [905, 86], fHover: true, drop: true },                        // dropdown open
  { ms: 550, cur: [790, 130], fHover: true, drop: true },                        // MOVE to "Needs Attention" (no hover yet)
  { ms: 450, cur: [790, 130], fHover: true, drop: true, catHover: true },        // arrived → row hover appears
  { ms: 240, cur: [790, 130], fHover: true, drop: true, catHover: true, down: true }, // click
  { ms: 950, cur: [110, 166], chip: true, sub: true },                           // chip + sub-menu in, move to checkbox 1
  { ms: 240, cur: [110, 166], chip: true, sub: true, down: true },               // click
  { ms: 820, cur: [110, 191], chip: true, sub: true, c1: true },                 // checked 1, move to checkbox 2
  { ms: 240, cur: [110, 191], chip: true, sub: true, c1: true, down: true },     // click
  { ms: 1800, cur: [110, 191], chip: true, sub: true, c1: true, c2: true },      // checked 2 → chip active, Filter (1)
  { ms: 3000, cur: [110, 191], chip: true, c1: true, c2: true, idle: true },     // sub-menu fades out; cursor fades out; hold applied end state ~3s
  { ms: 1100, cur: [110, 191], idle: true },                                     // chip fades out → rest (cursor stays hidden), then loop
];

const Cursor = ({ x, y, down, hidden }) => (
  <svg
    className={`fltm-cursor${down ? ' fltm-cursor--down' : ''}${hidden ? ' fltm-cursor--hidden' : ''}`}
    viewBox="0 0 24 24"
    style={{ transform: `translate(${x}px, ${y}px)` }}
    aria-hidden="true"
  >
    <path d="M4 2 L4 20 L9 15 L12.6 21.6 L15.1 20.4 L11.7 14 L18 14 Z" fill="#fff" stroke="#1a1a1a" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
);

export const FilterMockup = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let t;
    let i = 0;
    const tick = () => {
      if (cancelled) return;
      setStep(i);
      t = setTimeout(() => { i = (i + 1) % STEPS.length; tick(); }, STEPS[i].ms);
    };
    tick();
    return () => { cancelled = true; clearTimeout(t); };
  }, []);

  const st = STEPS[step];
  const [cx, cy] = st.cur;
  const active = !!(st.c1 || st.c2); // a filter is applied → chip filled + "Filter (1)"

  return (
    <div className="fltm">
      <div className="fltm-frame">
        {/* ---- Navbar ---- */}
        <nav className="fltm-nav">
          <div className="fltm-nav__side">
            <span className="fltm-iconbtn"><Icon name="navHamburger" box={19.2} /></span>
            <span className="fltm-locator">
              <span className="fltm-locator__label">All</span>
              <Icon name="navChevron" box={19.2} />
            </span>
          </div>
          <div className="fltm-nav__side">
            <span className="fltm-search"><Icon name="navSearch" box={12.8} /> Search</span>
            <button className="fltm-new"><Icon name="navAdd" box={14.4} /> New</button>
            <span className="fltm-iconbtn-group">
              <span className="fltm-iconbtn"><Icon name="navHelp" box={19.2} /></span>
              <span className="fltm-iconbtn"><Icon name="navBell" box={19.2} /></span>
            </span>
          </div>
        </nav>

        {/* ---- Body ---- */}
        <div className="fltm-body">
          <div className="fltm-pillrow">
            <div className="fltm-pills">
              {PILLS.map((p) => (
                <div key={p.name} className={`fltm-pill${p.active ? ' fltm-pill--active' : ''}`}>
                  <span className="fltm-pill__circle" style={{ background: p.bg }}><Icon name={p.icon} /></span>
                  <span className="fltm-pill__label">
                    <span className="fltm-pill__name">{p.name}</span>
                    <span className="fltm-pill__count">1</span>
                  </span>
                </div>
              ))}
            </div>
            <div className={`fltm-filterbtn${st.fHover ? ' fltm-filterbtn--hover' : ''}${active ? ' fltm-filterbtn--count' : ''}`}>
              <FilterGlyph blue={active} />
              {active ? 'Filter (1)' : 'Filter'}
            </div>
          </div>

          {/* ---- Active-filter bar (in flow; chip lives here and pushes the table down) ---- */}
          <div className={`fltm-filterbar${st.chip ? ' fltm-filterbar--active' : ''}`}>
            <div className={`fltm-chip${active ? ' fltm-chip--active' : ''}`}>
              <div className="fltm-chip__main">
                <Icon name="chipInfo" box={12.8} />
                <span className="fltm-chip__text"><b>Needs Attention:</b><span>Missing UoM</span></span>
                <span className="fltm-chip__arrow" style={{ transform: st.sub ? 'rotate(180deg)' : 'none' }}><Icon name="chipArrow" box={12.8} /></span>
              </div>
              <div className="fltm-chip__close"><Icon name="chipClose" box={12.8} /></div>
            </div>
          </div>

          {/* ---- Table ---- */}
          <div className="fltm-table">
            <div className="fltm-tgrid fltm-thead">
              <span className="fltm-cc"><Icon name="checkboxUnchecked" box={16} /></span>
              <span className="fltm-th" style={{ justifyContent: 'center' }}>Type</span>
              <span className="fltm-th">Name <Icon name="sortArrow" box={12.8} /></span>
              <span className="fltm-th">Status</span>
              <span className="fltm-th">Owner</span>
              <span className="fltm-th">Last Updated</span>
              <span />
            </div>
            <div className="fltm-tbody">
              {ROWS.map((r, i) => (
                <div className="fltm-tgrid fltm-trow" key={r.n + i}>
                  <span className="fltm-cc"><Icon name="checkboxUnchecked" box={16} /></span>
                  <span className="fltm-type">
                    <img className="bg" src={Iconsrc('typeBg')} width={19.2} height={19.2} alt="" />
                    <img className="glyph" src={Iconsrc('typeRecipe')} width={9.64} height={10.29} alt="" />
                  </span>
                  <span className="fltm-name">{r.n}</span>
                  <span className={`fltm-status fltm-status--${r.s}`}>
                    <span className="fltm-status__dot" />
                    <span className="fltm-status__label">{STATUS[r.s]}</span>
                  </span>
                  <span><img className="fltm-avatar" src={avatar} alt="" /></span>
                  <span className="fltm-updated">{r.u}</span>
                  <span className="fltm-cc"><Icon name="more" box={16} /></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Category dropdown (right) ---- */}
        <div className={`fltm-pop${st.drop ? ' fltm-pop--open' : ''}`} style={{ right: 64, top: 108 }}>
          <div className="fltm-dropdown">
            <div>
              {CATS.map((c, i) => (
                <div key={c.name} className={`fltm-catrow${st.catHover && i === 0 ? ' fltm-catrow--hover' : ''}`}>
                  <span className="fltm-catrow__label"><Icon name={c.icon} box={16} /> {c.name}</span>
                  <Icon name="catAdd" box={16} />
                </div>
              ))}
            </div>
            <div className="fltm-clearall">Clear all</div>
          </div>
        </div>

        {/* ---- Checkbox sub-menu (overlay below the chip) ---- */}
        <div className={`fltm-pop${st.sub ? ' fltm-pop--open' : ''}`} style={{ left: 64, top: 146 }}>
          <div className="fltm-submenu">
            <div className="fltm-submenu__list">
              {CHECKS.map((label, i) => {
                const checked = (i === 0 && st.c1) || (i === 1 && st.c2);
                return (
                  <div key={label} className="fltm-checkitem">
                    <Icon name={checked ? 'checkboxChecked' : 'checkboxUnchecked'} box={14.4} />
                    {label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Cursor x={cx} y={cy} down={!!st.down} hidden={!!st.idle} />
      </div>
    </div>
  );
};
