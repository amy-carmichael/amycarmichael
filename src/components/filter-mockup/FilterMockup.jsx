import React, { useState, Fragment } from 'react';
import '../../styles/filter-mockup.css';
import { Icon, FilterGlyph } from './icons';
import { IC } from './icons.data';
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

// In-flow "applied filter" chips. Each uses the same glyph as its category row
// in the Filter dropdown; values are representative selections from Figma.
const CHIPS = [
  { cat: 'Needs Attention', icon: 'catNeedsAttention', value: 'Missing UoM' },
  { cat: 'Allergens', icon: 'catAllergens', value: 'Allium' },
  { cat: 'Created by', icon: 'catCreatedby', value: 'Carlos Ost' },
  { cat: 'Prep Stations', icon: 'catPrepstations', value: 'Bakery' },
  { cat: 'Ingredients', icon: 'catIngredients', value: 'Carrot' },
  { cat: 'Tags', icon: 'catTags', value: 'App' },
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

// Needs-Attention checkbox sub-menu options (name + count split for chips).
const CHECKS = [
  { name: 'Empty recipes', count: '(8)' },
  { name: 'Missing total yield', count: '(3)' },
  { name: 'Contains undefined ingredients', count: '(11)' },
];

/* ----- AND/OR selector ----------------------------------------------------
   Specs from the filter-category-dropdown-and-or frame (Figma 122:15029):
   trigger #F3F3F3 / 12px / radius 4 / pad 3.2×6.4; hover #E8ECF7 + #3D5DF6.
   Dropdown: white, radius 6.4, pad 3.2, w64; rows pad 6.4 radius 3.2; the
   selected row is #F1F5FE + check, hover row rgba(5,8,65,0.08). */
// Category glyph tinted to #3D5DF6 (masked so any category recolors to the
// active blue). `box` matches <Icon box>; `fit` scales the glyph like <Icon fit>.
const CatIconBlue = ({ name, box = 16, fit }) => {
  let [src, w, h] = IC[name];
  if (fit) { const s = fit / Math.max(w, h); w = w * s; h = h * s; }
  const size = fit || box;
  return (
    <span
      className="fltm-caticon-blue"
      style={{
        width: size, height: size,
        // Quote the URL — Vite inlines these SVGs as data URIs whose special
        // chars make an unquoted url() invalid (silently dropped → blue square).
        WebkitMaskImage: `url("${src}")`, maskImage: `url("${src}")`,
        WebkitMaskSize: `${w}px ${h}px`, maskSize: `${w}px ${h}px`,
      }}
    />
  );
};

const AndOr = ({ op, onChange, isOpen, onToggle }) => (
  <span className="fltm-andor-wrap">
    <button type="button" className="fltm-andor" onClick={onToggle}>{op}</button>
    <div className={`fltm-andor-menu${isOpen ? ' fltm-andor-menu--open' : ''}`}>
      {['Or', 'And'].map((o) => (
        <div
          key={o}
          className={`fltm-andor-opt${op === o ? ' fltm-andor-opt--sel' : ''}`}
          onClick={() => onChange(o)}
          role="button"
          tabIndex={0}
        >
          <span>{o}</span>
          {op === o && <Icon name="andorCheck" box={12.8} />}
        </div>
      ))}
    </div>
  </span>
);

/* ----- Interactive filter mockup -----------------------------------------
   Click the Filter button → category dropdown → pick "Needs Attention" to add
   the applied-filter chips + open its checkbox sub-menu. Checking a box fills
   the Filter count, surfaces selection chips (with AND/OR between them) and
   turns "Clear all" live. AND/OR selectors share one value per group. */
export const FilterMockup = () => {
  const [dropOpen, setDropOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [checked, setChecked] = useState([false, false, false]);
  const [chips, setChips] = useState([]); // only categories the visitor has picked
  const [subMenuOp, setSubMenuOp] = useState('And'); // shared AND/OR — sub-menu selection chips
  const [chipBarOp, setChipBarOp] = useState('And'); // shared AND/OR — in-flow chip bar
  const [openAndOr, setOpenAndOr] = useState(null);   // id of the single open AND/OR dropdown

  const anyChecked = checked.some(Boolean); // a real selection → Filter (1) + Clear all live
  const checkedItems = CHECKS.filter((_, i) => checked[i]);
  const activeChips = CHIPS.filter((c) => chips.includes(c.cat)); // keep canonical order

  const toggleDrop = () => setDropOpen((v) => !v);
  const toggleSub = () => setSubOpen((v) => !v);
  const toggleCheck = (i) => setChecked((arr) => arr.map((c, idx) => (idx === i ? !c : c)));
  const toggleAndOr = (id) => setOpenAndOr((cur) => (cur === id ? null : id));

  const pickSub = (v) => { setSubMenuOp(v); setOpenAndOr(null); };
  const pickBar = (v) => { setChipBarOp(v); setOpenAndOr(null); };

  // Picking a category adds its chip; "Needs Attention" also opens the sub-menu.
  const addCategory = (cat) => {
    setChips((arr) => (arr.includes(cat) ? arr : [...arr, cat]));
    if (cat === 'Needs Attention') setSubOpen(true);
    setDropOpen(false);
  };

  const removeChip = (cat) => {
    setChips((arr) => arr.filter((c) => c !== cat));
    if (cat === 'Needs Attention') {
      setSubOpen(false);
      setChecked([false, false, false]);
    }
  };

  // "Clear all" — wipe every selection in the open category.
  const clearAll = () => setChecked([false, false, false]);

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
            <div
              className={`fltm-filterbtn${dropOpen ? ' fltm-filterbtn--open' : ''}${anyChecked ? ' fltm-filterbtn--count' : ''}`}
              onClick={toggleDrop}
              role="button"
              tabIndex={0}
            >
              <FilterGlyph blue={anyChecked} />
              {anyChecked ? 'Filter (1)' : 'Filter'}
            </div>
          </div>

          {/* ---- Active-filter bar (in flow; chips push the table down) ---- */}
          <div className={`fltm-filterbar${chips.length ? ' fltm-filterbar--active' : ''}`}>
            {activeChips.map((c, idx) => {
              const isNA = c.cat === 'Needs Attention';
              return (
                <Fragment key={c.cat}>
                  {idx > 0 && (
                    <AndOr
                      op={chipBarOp}
                      onChange={pickBar}
                      isOpen={openAndOr === `bar-${idx}`}
                      onToggle={() => toggleAndOr(`bar-${idx}`)}
                    />
                  )}
                  <div className="fltm-chip fltm-chip--active">
                    <div
                      className="fltm-chip__main"
                      onClick={isNA ? toggleSub : undefined}
                      role="button"
                      tabIndex={0}
                    >
                      <CatIconBlue name={c.icon} fit={12.8} />
                      <span className="fltm-chip__text"><b>{c.cat}:</b><span>{c.value}</span></span>
                      <span className="fltm-chip__arrow" style={{ transform: isNA && subOpen ? 'rotate(180deg)' : 'none' }}><Icon name="chipArrow" box={12.8} /></span>
                    </div>
                    <div className="fltm-chip__close" onClick={() => removeChip(c.cat)} role="button" tabIndex={0}><Icon name="chipClose" box={12.8} /></div>
                  </div>
                </Fragment>
              );
            })}
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

        {/* ---- Category dropdown (flush under the Filter button) ---- */}
        <div className={`fltm-pop${dropOpen ? ' fltm-pop--open' : ''}`} style={{ right: 64, top: 102.4 }}>
          <div className="fltm-dropdown">
            <div>
              {CATS.map((c) => {
                const isActive = chips.includes(c.name);
                return (
                  <div
                    key={c.name}
                    className={`fltm-catrow${isActive ? ' fltm-catrow--active' : ''}`}
                    onClick={() => addCategory(c.name)}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="fltm-catrow__label">
                      {isActive ? <CatIconBlue name={c.icon} box={16} /> : <Icon name={c.icon} box={16} />}
                      {c.name}
                    </span>
                    <span className="fltm-catadd" aria-hidden="true" />
                  </div>
                );
              })}
            </div>
            <div
              className={`fltm-clearall${anyChecked ? ' fltm-clearall--active' : ''}`}
              onClick={anyChecked ? clearAll : undefined}
              role="button"
              tabIndex={0}
            >
              Clear all
            </div>
          </div>
        </div>

        {/* ---- Checkbox sub-menu (flush under the active chip's bottom edge) ---- */}
        <div className={`fltm-pop${subOpen ? ' fltm-pop--open' : ''}`} style={{ left: 64, top: 148 }}>
          <div className="fltm-submenu">
            {anyChecked && (
              <div className="fltm-selcontainer">
                {checkedItems.map((item, idx) => (
                  <Fragment key={item.name}>
                    {idx > 0 && (
                      <AndOr
                        op={subMenuOp}
                        onChange={pickSub}
                        isOpen={openAndOr === `sub-${idx}`}
                        onToggle={() => toggleAndOr(`sub-${idx}`)}
                      />
                    )}
                    <span className="fltm-selchip">
                      <span className="fltm-selchip__name">{item.name}</span>
                      <span>{item.count}</span>
                    </span>
                  </Fragment>
                ))}
              </div>
            )}
            <div className="fltm-submenu__list">
              {CHECKS.map((item, i) => (
                <div key={item.name} className="fltm-checkitem" onClick={() => toggleCheck(i)} role="button" tabIndex={0}>
                  <Icon name={checked[i] ? 'checkboxChecked' : 'checkboxUnchecked'} box={14.4} />
                  {item.name} {item.count}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
