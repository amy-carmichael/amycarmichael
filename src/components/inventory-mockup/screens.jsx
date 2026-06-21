import React from 'react';
import meezIconPng from '../../assets/inventory/meez_icon.png';
import {
  BrowserFrame, DesktopNav, Content, ViewReport, LocationChip, Dot,
  SearchBar, ItemName, Status, Th, RowActions, TypeIcon, Avatar,
} from './primitives';
import { MenuIcon, SearchIcon, BellIcon } from './icons';

/* Column templates (content width 1024) */
const LIST_COLS = '1fr 220px 220px';
const TEMPLATE_COLS = '1fr 360px 96px';
const COUNT_COLS = '4fr 2fr 3fr';

// Count table cells: each cell pads itself (row has no outer padding); the first
// two cells carry a right divider, the last has none. Header has no dividers.
const countHead = { padding: '0 16px' };
const countCellDiv = { display: 'flex', alignItems: 'center', height: '100%', padding: '0 16px', minWidth: 0, borderRight: '1px solid var(--invm-border)' };
const countCell = { display: 'flex', alignItems: 'center', height: '100%', padding: '0 16px', minWidth: 0 };
const gridReset = { padding: 0 };

/* ------------------------------------------------------------------ Screen 1
   Inventory list — "West Village" location overview. */
const LIST_ROWS = [
  { area: 'Prep island', items: 89, status: 'saved' },
  { area: 'Walk-in cooler', items: 44, status: 'pending' },
  { area: 'Equipment storage', items: 40, status: 'pending' },
  { area: 'Reach-in freezer', items: 38, status: 'saved' },
  { area: 'Dry storage', items: 102, status: 'pending' },
  { area: 'Linen cabinet', items: 119, status: 'not-started' },
];

export const InventoryListScreen = () => (
  <BrowserFrame className="invm-frame--tall">
    <DesktopNav crumbs={['Home', 'Inventory']} />
    <Content>
      <header className="invm-header">
        <div className="invm-header__top">
          <div className="invm-loc">
            <Avatar size={70} />
            <div>
              <h1 className="invm-title">West Village</h1>
              <div className="invm-subtitle">
                Last submitted: Aug 06, 2025 <Dot /> <ViewReport />
              </div>
            </div>
          </div>
          <button className="invm-pill-btn">Post count</button>
        </div>
      </header>

      <div className="invm-table">
        <div className="invm-thead" style={{ display: 'grid', gridTemplateColumns: LIST_COLS }}>
          <Th label="Sheet to Shelf Area" sort />
          <Th label="Total Items" />
          <Th label="Status" />
        </div>
        {LIST_ROWS.map((r) => (
          <div key={r.area} className="invm-row" style={{ display: 'grid', gridTemplateColumns: LIST_COLS }}>
            <div className="invm-cell">{r.area}</div>
            <div className="invm-cell">{r.items}</div>
            <div className="invm-cell"><Status status={r.status} /></div>
          </div>
        ))}
      </div>
    </Content>
  </BrowserFrame>
);

/* ------------------------------------------------------------------ Screen 2
   Sheet template editor — "Walk-in cooler". */
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
  <BrowserFrame>
    <DesktopNav crumbs={['Inventory', 'Walk-in cooler']} />
    <Content>
      <header className="invm-header">
        <h1 className="invm-title invm-title--sheet">Walk-in cooler</h1>
        <div className="invm-subtitle">
          <LocationChip name="New York" /> <Dot /> Last submitted: Jan 28, 2024 <Dot /> <ViewReport />
        </div>
        <p className="invm-helper">
          If there is an ongoing count at this location, any modifications made to the sheet template
          will be applied after the count is ended.
        </p>
      </header>

      <SearchBar placeholder="Search recipes or ingredients to add to inventory sheet" />

      <div className="invm-table">
        <div className="invm-thead" style={{ display: 'grid', gridTemplateColumns: TEMPLATE_COLS, ...gridReset }}>
          <Th label="Item Name" style={countHead} />
          <Th label="Unit of Count" style={countHead} />
          <span />
        </div>
        {TEMPLATE_ROWS.map((r) => (
          <div key={r.name} className="invm-row" style={{ display: 'grid', gridTemplateColumns: TEMPLATE_COLS, ...gridReset }}>
            <div style={countCellDiv}><ItemName type={r.type} name={r.name} /></div>
            <div style={countCellDiv}>{r.unit}</div>
            <RowActions />
          </div>
        ))}
      </div>
    </Content>
  </BrowserFrame>
);

/* ------------------------------------------------------------------ Screen 3
   Active count — "Walk-in cooler". */
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
  <BrowserFrame>
    <DesktopNav crumbs={['Inventory', 'Walk-in cooler']} />
    <Content>
      <header className="invm-header">
        <h1 className="invm-title invm-title--sheet">Walk-in cooler</h1>
        <div className="invm-subtitle">
          <LocationChip name="New York" /> <Dot /> Last submitted: Sept 08, 2024 <Dot /> <ViewReport />
        </div>
      </header>

      <SearchBar placeholder="Search recipes or ingredients to add to inventory sheet" />

      <div className="invm-table">
        <div className="invm-thead" style={{ display: 'grid', gridTemplateColumns: COUNT_COLS, ...gridReset }}>
          <Th label="Item Name" style={countHead} />
          <Th label="Quantity" style={countHead} />
          <Th label="Unit of Count" style={countHead} />
        </div>
        {COUNT_ROWS.map((r) => (
          <div key={r.name} className="invm-row" style={{ display: 'grid', gridTemplateColumns: COUNT_COLS, ...gridReset }}>
            <div style={countCellDiv}><ItemName type={r.type} name={r.name} /></div>
            <div style={countCellDiv}>{r.qty}</div>
            <div style={countCell}>{r.unit}</div>
          </div>
        ))}
      </div>

      <div className="invm-submit-row">
        <button className="invm-submit-btn">Submit count</button>
      </div>
    </Content>
  </BrowserFrame>
);

/* ------------------------------------------------------------------ Screen 4
   Mobile count — "Walk-in cooler" (same data as the desktop count screen). */
export const CountMobileScreen = () => (
  <div className="invm-frame invm-frame--mobile">
    <nav className="invm-mnav">
      <div className="invm-mnav__left">
        <span className="invm-icon-btn"><MenuIcon size={24} /></span>
        <img src={meezIconPng} alt="meez" className="invm-mnav__logo" />
      </div>
      <div className="invm-mnav__right">
        <span className="invm-icon-btn"><SearchIcon size={24} /></span>
        <span className="invm-icon-btn"><BellIcon size={24} /></span>
      </div>
    </nav>

    <div className="invm-mbody">
      <h1 className="invm-mtitle">Walk-in cooler</h1>
      <div className="invm-msearch">
        <span className="invm-icon"><SearchIcon size={18} /></span>
        Search recipes or ingredients to add
      </div>

      <div className="invm-mrows">
        {COUNT_ROWS.map((r, i) => (
          <div key={i} className="invm-mcard">
            <div className="invm-mcard__name">
              <TypeIcon type={r.type} />
              {r.name}
            </div>
            <div className="invm-mcard__fields">
              <div className="invm-mcard__field">{r.qty}</div>
              <div className="invm-mcard__field">{r.unit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="invm-msubmit">
      <button className="invm-submit-btn invm-submit-btn--block">Submit count</button>
    </div>
  </div>
);
