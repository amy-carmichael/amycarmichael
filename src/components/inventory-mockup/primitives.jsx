import React from 'react';
import avatarPng from '../../assets/inventory/avatar.png';
import {
  MenuIcon, SearchIcon, AddIcon, HelpIcon, BellIcon, SortDownIcon,
  AutoGraphIcon, DeleteIcon, DragIcon, RecipeGlyph, IngredientGlyph,
} from './icons';

/* Flat full-bleed app-screen shell for a desktop screen (1024-wide artboard). */
export const BrowserFrame = ({ children, className = '' }) => (
  <div className={`invm-frame ${className}`}>{children}</div>
);

/* West Village location logo (PNG asset). */
export const Avatar = ({ size = 56, className = '' }) => (
  <img loading="lazy" decoding="async" src={avatarPng} alt="" width={size} height={size} className={`invm-avatar ${className}`} />
);

/* Desktop global nav bar (Figma navbar 705:1893) — two equal halves:
   left  = hamburger + breadcrumb
   right = elastic search field + New + Help + Notifications */
export const DesktopNav = ({ crumbs }) => (
  <nav className="invm-nav">
    <div className="invm-nav__side">
      <span className="invm-iconbtn"><MenuIcon size={19.2} /></span>
      <div className="invm-breadcrumb">
        {crumbs.map((c, i) => (
          <React.Fragment key={c}>
            {i > 0 && <span className="invm-breadcrumb__sep">{'  /  '}</span>}
            <span className="invm-breadcrumb__crumb">{c}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
    <div className="invm-nav__side">
      <div className="invm-search"><SearchIcon size={13.5} /> Search</div>
      <button className="invm-new"><AddIcon size={14.4} /> New</button>
      <span className="invm-iconbtn-group">
        <span className="invm-iconbtn"><HelpIcon size={19.2} /></span>
        <span className="invm-iconbtn"><BellIcon size={19.2} /></span>
      </span>
    </div>
  </nav>
);

/* "View report" link with its trailing auto_graph mark. */
export const ViewReport = () => (
  <span className="invm-link">View report <AutoGraphIcon size={12} /></span>
);

/* Inline location chip (small logo + name) used in sub-headers. */
export const LocationChip = ({ name }) => (
  <span className="invm-loc-chip">
    <Avatar size={14.4} />
    {name}
  </span>
);

export const Dot = () => <span className="invm-sub-dot">·</span>;

/* Full-width content search bar (sheet template / count screens). */
export const SearchBar = ({ placeholder }) => (
  <div className="invm-searchbar"><SearchIcon size={13.5} /> {placeholder}</div>
);

/* Type icon — 16px circle: recipe (navy book) or ingredient (green sprout). */
export const TypeIcon = ({ type }) => (
  <span className={`invm-type invm-type--${type}`}>
    {type === 'recipe' ? <RecipeGlyph /> : <IngredientGlyph />}
  </span>
);

/* Item-name cell content (leading type icon + label). */
export const ItemName = ({ type, name }) => (
  <span className="invm-item">
    <TypeIcon type={type} />
    <span className="invm-item__name">{name}</span>
  </span>
);

/* Status pill (dot + label). status: 'saved' | 'pending' | 'not-started'. */
const STATUS_LABEL = { saved: 'Saved', pending: 'Pending', 'not-started': 'Not started' };
export const Status = ({ status }) => (
  <span className={`invm-status invm-status--${status}`}>
    <span className="invm-status__dot" />
    {STATUS_LABEL[status]}
  </span>
);

/* A sortable table-header label (+ optional sort arrow). */
export const Th = ({ label, sort = false, className = '' }) => (
  <div className={`invm-th ${className}`}>
    {label}{sort && <SortDownIcon size={12.8} />}
  </div>
);

/* Trailing delete + drag controls on template rows. */
export const RowActions = () => (
  <div className="invm-row-actions">
    <span className="invm-iconbtn invm-del-btn"><DeleteIcon size={19.2} /></span>
    <span className="invm-iconbtn invm-drag-btn"><DragIcon size={19.2} /></span>
  </div>
);
