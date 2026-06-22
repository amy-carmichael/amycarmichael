import React from 'react';
import meezIconPng from '../../assets/inventory/meez_icon.png';
import {
  BrowserFrame, DesktopNav, ViewReport, LocationChip, Dot,
  SearchBar, ItemName, Status, Th, RowActions, TypeIcon, Avatar,
} from './primitives';
import { MenuIcon, SearchIcon, BellIcon } from './icons';

/* Column templates — fr units so the tables stay fluid as the frame shrinks. */
const LIST_COLS = 'minmax(0,5fr) minmax(0,2fr) minmax(0,2fr)';
const TEMPLATE_COLS = 'minmax(0,4fr) minmax(0,3fr) 70.4px';
const COUNT_COLS = 'minmax(0,4fr) minmax(0,2fr) minmax(0,3fr)';

/* ------------------------------------------------------------------ Screen 1
   Inventory list — "West Village" location overview (Figma 705:1892). */
const LIST_ROWS = [
  { area: 'Prep island', items: 89, status: 'saved' },
  { area: 'Walk-in cooler', items: 44, status: 'pending' },
  { area: 'Equipment storage', items: 40, status: 'pending' },
  { area: 'Reach-in freezer', items: 38, status: 'saved' },
  { area: 'Dry storage', items: 102, status: 'pending' },
  { area: 'Linen cabinet', items: 119, status: 'not-started' },
];

export const InventoryListScreen = () => (
  <BrowserFrame className="invm-screen-list">
    <DesktopNav crumbs={['Home', 'Inventory']} />
    <div className="invm-list-body">
      <header className="invm-col invm-list-header">
        <Avatar size={56} />
        <div className="invm-list-header__main">
          <div className="invm-title-block">
            <h1 className="invm-title">West Village</h1>
            <div className="invm-subtitle">
              Last submitted: Aug 06, 2025 <Dot /> <ViewReport />
            </div>
          </div>
          <button className="invm-pill-btn">Post count</button>
        </div>
      </header>

      <div className="invm-col invm-table">
        <div className="invm-thead invm-thead--list" style={{ gridTemplateColumns: LIST_COLS }}>
          <Th label="Sheet to Shelf Area" sort className="invm-th--pad" />
          <Th label="Total Items" />
          <Th label="Status" />
        </div>
        {LIST_ROWS.map((r) => (
          <div key={r.area} className="invm-row invm-row--list" style={{ gridTemplateColumns: LIST_COLS }}>
            <div className="invm-cell invm-cell--pad">{r.area}</div>
            <div className="invm-cell">{r.items}</div>
            <div className="invm-cell invm-cell--status"><Status status={r.status} /></div>
          </div>
        ))}
      </div>
    </div>
  </BrowserFrame>
);

/* ------------------------------------------------------------------ Screen 2
   Sheet template editor — "Walk-in cooler" (Figma 705:1967). */
const TEMPLATE_ROWS = [
  { type: 'recipe', name: 'Salsa verde', unit: 'quart' },
  { type: 'ingredient', name: 'Lime, whole', unit: 'each' },
  { type: 'ingredient', name: 'Onion, yellow', unit: '33lb-case' },
  { type: 'recipe', name: 'Chicharrón', unit: 'kg' },
  { type: 'ingredient', name: 'Crema', unit: '10lb-case' },
  { type: 'recipe', name: 'Pico de gallo', unit: 'g' },
  { type: 'recipe', name: 'Salsa Roja', unit: 'g' },
  { type: 'ingredient', name: 'Queso Cotija', unit: 'case' },
];

export const SheetTemplateScreen = () => (
  <BrowserFrame className="invm-screen-template">
    <DesktopNav crumbs={['Inventory', 'Walk-in cooler']} />
    <div className="invm-doc-body">
      <header className="invm-col invm-sheet-header">
        <div className="invm-sheet-name"><h1 className="invm-sheet-title">Walk-in cooler</h1></div>
        <div className="invm-subtitle">
          <LocationChip name="New York" /> <Dot /> Last submitted: Jan 28, 2024 <Dot /> <ViewReport />
        </div>
        <p className="invm-helper">
          If there is an ongoing count at this location, any modifications made to the sheet template
          will be applied after the count is ended.
        </p>
      </header>

      <div className="invm-col"><SearchBar placeholder="Search recipes or ingredients to add" /></div>

      <div className="invm-col invm-table">
        <div className="invm-thead invm-thead--cells" style={{ gridTemplateColumns: TEMPLATE_COLS }}>
          <Th label="Item Name" className="invm-th--pad" />
          <Th label="Unit of Count" className="invm-th--pad" />
          <span />
        </div>
        <div className="invm-rowgroup invm-rowgroup--gap">
          {TEMPLATE_ROWS.map((r) => (
            <div key={r.name} className="invm-row invm-row--bordered" style={{ gridTemplateColumns: TEMPLATE_COLS }}>
              <div className="invm-cell invm-cell--pad invm-cell--divider"><ItemName type={r.type} name={r.name} /></div>
              <div className="invm-cell invm-cell--pad invm-cell--divider invm-field">{r.unit}</div>
              <RowActions />
            </div>
          ))}
        </div>
      </div>
    </div>
  </BrowserFrame>
);

/* ------------------------------------------------------------------ Screen 3
   Active count — "Walk-in cooler" (Figma 705:2080). */
const COUNT_ROWS = [
  { type: 'ingredient', name: 'Blueberries', qty: 12, unit: 'case(12/16oz-fl)' },
  { type: 'ingredient', name: 'Shredded lettuce', qty: 10, unit: 'lb' },
  { type: 'recipe', name: 'Lemon curd', qty: 9, unit: 'jar' },
  { type: 'ingredient', name: 'Whole milk', qty: 12, unit: 'fl-oz' },
  { type: 'ingredient', name: 'Butter', qty: 5, unit: 'lb' },
  { type: 'ingredient', name: 'Heavy whipping cream', qty: 18, unit: 'CASE(17LB)' },
  { type: 'ingredient', name: '72% Dark chocolate', qty: 44, unit: 'CASE(2/5LB)' },
  { type: 'recipe', name: 'Cream puffs', qty: 44, unit: 'CASE(2/3LB)' },
  { type: 'ingredient', name: 'Mandarins', qty: 44, unit: 'CASE(12/20OZ)' },
  { type: 'ingredient', name: 'Lemon juice', qty: 222, unit: 'case(2/50ea)' },
];

export const CountScreen = () => (
  <BrowserFrame className="invm-screen-count">
    <DesktopNav crumbs={['Inventory', 'Walk-in cooler']} />
    <div className="invm-doc-body invm-doc-body--padb">
      <header className="invm-col invm-sheet-header">
        <div className="invm-sheet-name"><h1 className="invm-sheet-title">Walk-in cooler</h1></div>
        <div className="invm-subtitle">
          <LocationChip name="New York" /> <Dot /> Last submitted: Sept 08, 2024 <Dot /> <ViewReport />
        </div>
      </header>

      <div className="invm-col"><SearchBar placeholder="Search recipes or ingredients to add" /></div>

      <div className="invm-col invm-table">
        <div className="invm-thead invm-thead--cells" style={{ gridTemplateColumns: COUNT_COLS }}>
          <Th label="Item Name" className="invm-th--pad" />
          <Th label="Quantity" className="invm-th--pad" />
          <Th label="Unit of Count" className="invm-th--pad" />
        </div>
        <div className="invm-rowgroup">
          {COUNT_ROWS.map((r) => (
            <div key={r.name} className="invm-row invm-row--bordered" style={{ gridTemplateColumns: COUNT_COLS }}>
              <div className="invm-cell invm-cell--pad invm-cell--divider"><ItemName type={r.type} name={r.name} /></div>
              <div className="invm-cell invm-cell--pad invm-cell--divider invm-field invm-cell--qty">{r.qty}</div>
              <div className="invm-cell invm-cell--pad invm-field">{r.unit}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="invm-submit-row">
        <button className="invm-submit-btn">Submit count</button>
      </div>
    </div>
  </BrowserFrame>
);

/* ------------------------------------------------------------------ Screen 4
   Mobile count — "Walk-in refrigerator" (Figma 705:2175). */
const MOBILE_ROWS = COUNT_ROWS.slice(0, 6);

export const CountMobileScreen = () => (
  <div className="invm-frame invm-frame--mobile">
    <nav className="invm-mnav">
      <div className="invm-mnav__left">
        <span className="invm-iconbtn invm-mnav__menu"><MenuIcon size={19.2} /></span>
        <img src={meezIconPng} alt="meez" className="invm-mnav__logo" />
      </div>
      <div className="invm-mnav__right">
        <SearchIcon size={19.2} />
        <BellIcon size={19.2} />
      </div>
    </nav>

    <div className="invm-mbody">
      <div className="invm-mhead">
        <div className="invm-msheet-name"><h1 className="invm-mtitle">Walk-in refrigerator</h1></div>
        <div className="invm-msearch">
          <SearchIcon size={19.2} />
          <span className="invm-msearch__text">Search recipes or ingredients to add</span>
        </div>
      </div>

      <div className="invm-mrows">
        {MOBILE_ROWS.map((r, i) => (
          <div key={i} className="invm-mcard">
            <div className="invm-mcard__name">
              <TypeIcon type={r.type} />
              {r.name}
            </div>
            <div className="invm-mcard__fields">
              <div className="invm-mcard__qty">{r.qty}</div>
              <div className="invm-mcard__unit">{r.unit}</div>
            </div>
          </div>
        ))}
      </div>

      <button className="invm-msubmit">Submit count</button>
    </div>
  </div>
);
