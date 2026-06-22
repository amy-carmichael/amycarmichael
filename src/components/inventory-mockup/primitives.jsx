import React from 'react';
import avatarPng from '../../assets/inventory/avatar.png';
import {
  MenuIcon, SearchIcon, PlusIcon, HelpIcon, BellIcon, SortDownIcon,
  AutoGraphIcon, DeleteIcon, DragIcon, RecipeGlyph, IngredientGlyph,
} from './icons';

/* Flat full-bleed app-screen shell for a desktop screen. */
export const BrowserFrame = ({ children, className = '' }) => (
  <div className={`invm-frame ${className}`}>{children}</div>
);

/* West Village location avatar (PNG asset). */
export const Avatar = ({ size = 70, className = '' }) => (
  <img src={avatarPng} alt="" width={size} height={size} className={`invm-avatar ${className}`} />
);

/* Desktop global nav bar — two equal halves (matches Figma):
   left  = hamburger + breadcrumb
   right = elastic search field + New + Help + Notifications */
export const DesktopNav = ({ crumbs }) => (
  <nav className="invm-nav">
    <div className="invm-nav__left">
      <span className="invm-icon-btn"><MenuIcon size={24} /></span>
      <div className="invm-breadcrumb">
        {crumbs.map((c, i) => (
          <React.Fragment key={c}>
            {i > 0 && <span className="invm-breadcrumb__sep">/</span>}
            <span className="invm-breadcrumb__crumb">{c}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
    <div className="invm-nav__right">
      <div className="invm-searchfield"><span className="invm-icon"><SearchIcon size={16} /></span> Search</div>
      <button className="invm-new-btn"><PlusIcon size={18} /> New</button>
      <div className="invm-iconbtn-group">
        <span className="invm-icon-btn"><HelpIcon size={24} /></span>
        <span className="invm-icon-btn"><BellIcon size={24} /></span>
      </div>
    </div>
  </nav>
);

/* The 1024px content column below the nav bar. */
export const Content = ({ children }) => <div className="invm-content">{children}</div>;

/* A "View report" link with its trailing auto_graph icon. */
export const ViewReport = () => (
  <span className="invm-link">View report <span className="invm-icon"><AutoGraphIcon size={16} /></span></span>
);

/* Inline location chip (small avatar + name) used in sub-headers. */
export const LocationChip = ({ name }) => (
  <span className="invm-loc-chip">
    <Avatar size={18} />
    {name}
  </span>
);

export const Dot = () => <span className="invm-sub-dot">·</span>;

/* Full-width content search bar (sheet template / count screens). */
export const SearchBar = ({ placeholder }) => (
  <div className="invm-searchbar"><span className="invm-icon"><SearchIcon size={16} /></span> {placeholder}</div>
);

/* Type icon — recipe (book) or ingredient (sprout). */
export const TypeIcon = ({ type }) => (
  <span className={`invm-typeicon invm-typeicon--${type}`}>
    {type === 'recipe' ? <RecipeGlyph /> : <IngredientGlyph />}
  </span>
);

/* Item name cell with its leading type icon. */
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

/* A sortable table-header cell (label + optional sort arrow). */
export const Th = ({ label, sort = false, style }) => (
  <div className="invm-th" style={style}>
    {label}{sort && <span className="invm-icon"><SortDownIcon size={14} /></span>}
  </div>
);

/* Trailing delete + drag controls on template rows. */
export const RowActions = () => (
  <div className="invm-row-actions">
    <span className="invm-icon-btn invm-del-btn"><DeleteIcon size={22} /></span>
    <span className="invm-icon-btn invm-drag-btn"><DragIcon size={20} /></span>
  </div>
);
