import React, { useState, useEffect, Fragment } from 'react';
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

// Filter categories, in the Filter-dropdown order. `search` flags the one
// category (Created by) whose menu carries a search field. (Figma 122:15030)
const CATS = [
  { name: 'Needs Attention', icon: 'catNeedsAttention' },
  { name: 'Allergens', icon: 'catAllergens' },
  { name: 'Created by', icon: 'catCreatedby', search: true },
  { name: 'Prep Stations', icon: 'catPrepstations' },
  { name: 'Ingredients', icon: 'catIngredients' },
  { name: 'Tags', icon: 'catTags' },
];

// Each category's checkbox options — name + count split so chips can show the
// count separately. Content is verbatim from the Figma menus in frame 122:15030.
const OPTIONS = {
  'Needs Attention': [
    { name: 'Empty recipes', count: '(8)' },
    { name: 'Missing total yield', count: '(3)' },
    { name: 'Contains undefined ingredients', count: '(11)' },
  ],
  'Allergens': [
    { name: 'Allium', count: '(6)' },
    { name: 'Celery', count: '(1)' },
    { name: 'Eggs', count: '(2)' },
    { name: 'Fish', count: '(4)' },
    { name: 'Legumes', count: '(3)' },
  ],
  'Created by': [
    { name: 'Carlos Ost', count: '(8)' },
    { name: 'Dan Roestorf', count: '(3)' },
    { name: 'Ernesto Muñoz', count: '(11)' },
    { name: 'Marina Melaré', count: '(18)' },
    { name: 'Pad Madigan', count: '(4)' },
  ],
  'Prep Stations': [
    { name: 'Bakery', count: '(13)' },
    { name: 'Bar', count: '(18)' },
    { name: 'Fry', count: '(31)' },
    { name: 'Sauté', count: '(40)' },
    { name: 'To go', count: '(4)' },
  ],
  'Ingredients': [
    { name: 'Carrot', count: '(31)' },
    { name: 'Onion', count: '(84)' },
    { name: 'Potato', count: '(3)' },
    { name: 'Leek', count: '(8)' },
    { name: 'Tomato', count: '(11)' },
  ],
  'Tags': [
    { name: 'App', count: '(33)' },
    { name: 'Bar', count: '(18)' },
    { name: 'Dinner', count: '(66)' },
  ],
};

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

/* ----- AND/OR selector ----------------------------------------------------
   Specs from the filter-category-dropdown-and-or frame (Figma 122:15029):
   trigger #F3F3F3 / 12px / radius 4 / pad 3.2×6.4; hover #E8ECF7 + #3D5DF6.
   Dropdown: white, radius 6.4, pad 3.2, w64; rows pad 6.4 radius 3.2; the
   selected row is #F1F5FE + check, hover row rgba(5,8,65,0.08). */
// Category glyph tinted to #3D5DF6 (masked so any category recolors to the
// active blue). Category glyphs are authored in a 16px frame, so the glyph is
// scaled by box/16 — box={16} renders it native (dropdown rows), box={12.8}
// renders the 0.8× chip icon (Figma chip icons are 12.8px boxes).
const CatIconBlue = ({ name, box = 16 }) => {
  const [src, w, h] = IC[name];
  const s = box / 16;
  return (
    <span
      className="fltm-caticon-blue"
      style={{
        width: box, height: box,
        // Quote the URL — Vite inlines these SVGs as data URIs whose special
        // chars make an unquoted url() invalid (silently dropped → blue square).
        WebkitMaskImage: `url("${src}")`, maskImage: `url("${src}")`,
        WebkitMaskSize: `${w * s}px ${h * s}px`, maskSize: `${w * s}px ${h * s}px`,
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
   Click Filter → category dropdown → pick a category to add its applied-filter
   chip + open that category's menu. Each menu (Figma 122:15030) lists its
   checkbox options (Created by adds a search field); checking a box surfaces a
   selection chip in the menu's selected-container, fills the chip's value with
   the chosen values, bumps the Filter count and turns "Clear all" live. AND/OR
   selectors sit between selection chips and between in-flow chips. */
export const FilterMockup = () => {
  const [dropOpen, setDropOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);    // cat name whose menu is open
  const [added, setAdded] = useState([]);            // chips present (cat names)
  const [sel, setSel] = useState({});                // { cat: [optionName, ...] }
  const [catOps, setCatOps] = useState({});          // { cat: 'And'|'Or' } — selected-container
  const [chipBarOp, setChipBarOp] = useState('And'); // shared AND/OR — in-flow chip bar
  const [openAndOr, setOpenAndOr] = useState(null);  // id of the single open AND/OR dropdown
  const [searchText, setSearchText] = useState('');  // Created-by menu search
  const [hinted, setHinted] = useState(false);       // trigger has pulsed until first hover/click

  const chips = CATS.filter((c) => added.includes(c.name)); // keep canonical order
  const activeCount = added.filter((c) => (sel[c] || []).length).length;
  const hasFilters = added.length > 0;

  // Selected options for a category, in canonical (option) order.
  const selectedFor = (cat) => OPTIONS[cat].filter((o) => (sel[cat] || []).includes(o.name));

  // Click outside a popover closes it: the category dropdown (unless the click
  // is on its trigger or inside it), each chip's menu (unless inside a chip or
  // an AND/OR control), and any open AND/OR dropdown.
  useEffect(() => {
    const onDown = (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (!t.closest('.fltm-andor-wrap')) setOpenAndOr(null);
      if (!t.closest('.fltm-filterbtn') && !t.closest('.fltm-dropdown')) setDropOpen(false);
      if (!t.closest('.fltm-chip') && !t.closest('.fltm-andor-wrap')) setOpenMenu(null);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  const toggleDrop = () => setDropOpen((v) => !v);
  const openCatMenu = (cat) => { setOpenMenu(cat); setSearchText(''); setOpenAndOr(null); };
  const toggleAndOr = (id) => setOpenAndOr((cur) => (cur === id ? null : id));
  const pickCatOp = (cat, v) => { setCatOps((m) => ({ ...m, [cat]: v })); setOpenAndOr(null); };
  const pickBarOp = (v) => { setChipBarOp(v); setOpenAndOr(null); };

  // Picking a category adds its chip and opens its menu.
  const addCategory = (cat) => {
    setAdded((arr) => (arr.includes(cat) ? arr : [...arr, cat]));
    openCatMenu(cat);
    setDropOpen(false);
  };

  const toggleChipMenu = (cat) => {
    setOpenMenu((cur) => (cur === cat ? null : cat));
    setSearchText('');
    setOpenAndOr(null);
  };

  const removeChip = (cat) => {
    setAdded((arr) => arr.filter((c) => c !== cat));
    setSel((m) => { const n = { ...m }; delete n[cat]; return n; });
    setOpenMenu((cur) => (cur === cat ? null : cur));
  };

  const toggleOption = (cat, name) => {
    setSel((m) => {
      const cur = m[cat] || [];
      const next = cur.includes(name) ? cur.filter((x) => x !== name) : [...cur, name];
      return { ...m, [cat]: next };
    });
  };

  // "Clear all" — wipe every applied filter (chips + selections).
  const clearAll = () => { setAdded([]); setSel({}); setOpenMenu(null); setOpenAndOr(null); };

  // A category's menu, anchored under its chip (Figma 122:15030 menus).
  const renderMenu = (c, isOpen) => {
    const cat = c.name;
    const selected = selectedFor(cat);
    const opts = c.search
      ? OPTIONS[cat].filter((o) => o.name.toLowerCase().includes(searchText.trim().toLowerCase()))
      : OPTIONS[cat];
    const op = catOps[cat] || 'And';
    return (
      <div className={`fltm-pop fltm-chipmenu${isOpen ? ' fltm-pop--open' : ''}`}>
        <div className="fltm-submenu">
          {selected.length > 0 && (
            <div className="fltm-selcontainer">
              {selected.map((item, idx) => (
                <Fragment key={item.name}>
                  {idx > 0 && (
                    <AndOr
                      op={op}
                      onChange={(v) => pickCatOp(cat, v)}
                      isOpen={openAndOr === `sub-${cat}-${idx}`}
                      onToggle={() => toggleAndOr(`sub-${cat}-${idx}`)}
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
            {c.search && (
              <div className="fltm-search-wrap">
                <div className="fltm-menusearch">
                  <Icon name="navSearch" box={12.8} />
                  <input
                    className="fltm-menusearch__input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            )}
            {opts.map((item) => {
              const isChecked = (sel[cat] || []).includes(item.name);
              return (
                <div key={item.name} className="fltm-checkitem" onClick={() => toggleOption(cat, item.name)} role="button" tabIndex={0}>
                  <Icon name={isChecked ? 'checkboxChecked' : 'checkboxUnchecked'} box={14.4} />
                  {item.name} {item.count}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

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
              className={`fltm-filterbtn${dropOpen ? ' fltm-filterbtn--open' : ''}${activeCount ? ' fltm-filterbtn--count' : ''}${hinted ? '' : ' fltm-filterbtn--hint'}`}
              onClick={() => { setHinted(true); toggleDrop(); }}
              onMouseEnter={() => setHinted(true)}
              onFocus={() => setHinted(true)}
              role="button"
              tabIndex={0}
            >
              <span className="fltm-filterbtn__glyph"><FilterGlyph blue={!!activeCount} /></span>
              <span className="fltm-filterbtn__label">{activeCount ? `Filter (${activeCount})` : 'Filter'}</span>
            </div>
          </div>

          {/* ---- Active-filter bar (in flow; chips push the table down) ---- */}
          <div className={`fltm-filterbar${chips.length ? ' fltm-filterbar--active' : ''}`}>
            {chips.map((c, idx) => {
              const isOpen = openMenu === c.name;
              const valueText = selectedFor(c.name).map((o) => o.name).join(', ');
              return (
                <Fragment key={c.name}>
                  {idx > 0 && (
                    <AndOr
                      op={chipBarOp}
                      onChange={pickBarOp}
                      isOpen={openAndOr === `bar-${idx}`}
                      onToggle={() => toggleAndOr(`bar-${idx}`)}
                    />
                  )}
                  <div className="fltm-chip fltm-chip--active">
                    <div className="fltm-chip__main" onClick={() => toggleChipMenu(c.name)} role="button" tabIndex={0}>
                      <CatIconBlue name={c.icon} box={12.8} />
                      <span className="fltm-chip__text">
                        <b>{c.name}{valueText ? ':' : ''}</b>
                        {valueText && <span>{valueText}</span>}
                      </span>
                      <span className="fltm-chip__arrow" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}><Icon name="chipArrow" box={12.8} /></span>
                    </div>
                    <div className="fltm-chip__close" onClick={() => removeChip(c.name)} role="button" tabIndex={0} title="Remove"><Icon name="chipClose" box={12.8} /></div>
                    {renderMenu(c, isOpen)}
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
                    <img loading="lazy" decoding="async" className="bg" src={Iconsrc('typeBg')} width={19.2} height={19.2} alt="" />
                    <img loading="lazy" decoding="async" className="glyph" src={Iconsrc('typeRecipe')} width={9.64} height={10.29} alt="" />
                  </span>
                  <span className="fltm-name">{r.n}</span>
                  <span className={`fltm-status fltm-status--${r.s}`}>
                    <span className="fltm-status__dot" />
                    <span className="fltm-status__label">{STATUS[r.s]}</span>
                  </span>
                  <span><img loading="lazy" decoding="async" className="fltm-avatar" src={avatar} alt="" /></span>
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
                const isActive = added.includes(c.name);
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
              className={`fltm-clearall${hasFilters ? ' fltm-clearall--active' : ''}`}
              onClick={hasFilters ? clearAll : undefined}
              role="button"
              tabIndex={0}
            >
              Clear all
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
