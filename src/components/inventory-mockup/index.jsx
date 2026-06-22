import React from 'react';
import '../../styles/inventory-mockup.css';
import {
  InventoryListScreen,
  SheetTemplateScreen,
  CountScreen,
  CountMobileScreen,
} from './screens';

// Hi-fi mockups of the meez Inventory feature. Self-contained (own stylesheet +
// Circular CustCapNum font); these intentionally don't share the site's styling.

// Just the Inventory list ("landing page") — used at the top of the case study.
export const InventoryListMock = () => (
  <div className="invm">
    <InventoryListScreen />
  </div>
);

// Mobile count screen — the concluding mobile mockup.
export const InventoryMockups = () => (
  <div className="invm invm-stack">
    <CountMobileScreen />
  </div>
);

// Sheet template editor — shown on its own inside the interactive-prototype frame.
export const InventorySheetTemplateMock = () => (
  <div className="invm">
    <SheetTemplateScreen />
  </div>
);

export { InventoryListScreen, SheetTemplateScreen, CountScreen, CountMobileScreen };
