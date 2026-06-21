import React from 'react';

// Real Figma SVGs (fetched from the dev server). Each entry's [w, h] is the
// glyph's exact rendered size from its Figma viewBox — DO NOT rescale.
import navHamburger from '../../assets/filter-mockup/nav-hamburger.svg';
import navChevron from '../../assets/filter-mockup/nav-chevron.svg';
import navSearch from '../../assets/filter-mockup/nav-search.svg';
import navAdd from '../../assets/filter-mockup/nav-add.svg';
import navHelp from '../../assets/filter-mockup/nav-help.svg';
import navBell from '../../assets/filter-mockup/nav-bell.svg';
import pillRecipes from '../../assets/filter-mockup/pill-recipes.svg';
import pillIngredients from '../../assets/filter-mockup/pill-ingredients.svg';
import pillMenus from '../../assets/filter-mockup/pill-menus.svg';
import pillRecipebooks from '../../assets/filter-mockup/pill-recipebooks.svg';
import pillDocs from '../../assets/filter-mockup/pill-docs.svg';
import pillPurchase from '../../assets/filter-mockup/pill-purchase.svg';
import filterBar1 from '../../assets/filter-mockup/filter-bar1.svg';
import filterBar2 from '../../assets/filter-mockup/filter-bar2.svg';
import filterBar3 from '../../assets/filter-mockup/filter-bar3.svg';
import filterBar1Blue from '../../assets/filter-mockup/filter-bar1-blue.svg';
import filterBar2Blue from '../../assets/filter-mockup/filter-bar2-blue.svg';
import filterBar3Blue from '../../assets/filter-mockup/filter-bar3-blue.svg';
import checkboxUnchecked from '../../assets/filter-mockup/checkbox-unchecked.svg';
import checkboxChecked from '../../assets/filter-mockup/checkbox-checked.svg';
import typeBg from '../../assets/filter-mockup/type-bg.svg';
import typeRecipe from '../../assets/filter-mockup/type-recipe.svg';
import more from '../../assets/filter-mockup/more.svg';
import sortArrow from '../../assets/filter-mockup/sort-arrow.svg';
import catNeedsAttention from '../../assets/filter-mockup/cat-needs-attention.svg';
import catAdd from '../../assets/filter-mockup/cat-add.svg';
import catAllergens from '../../assets/filter-mockup/cat-allergens.svg';
import catCreatedby from '../../assets/filter-mockup/cat-createdby.svg';
import catPrepstations from '../../assets/filter-mockup/cat-prepstations.svg';
import catIngredients from '../../assets/filter-mockup/cat-ingredients.svg';
import catTags from '../../assets/filter-mockup/cat-tags.svg';
import chipInfo from '../../assets/filter-mockup/chip-info.svg';
import chipArrow from '../../assets/filter-mockup/chip-arrow.svg';
import chipClose from '../../assets/filter-mockup/chip-close.svg';

export const IC = {
  navHamburger: [navHamburger, 14.4, 9.6],
  navChevron: [navChevron, 9.6, 5.55],
  navSearch: [navSearch, 9.1, 9.1],
  navAdd: [navAdd, 8.4, 8.4],
  navHelp: [navHelp, 19.2, 19.2],
  navBell: [navBell, 19.2, 19.2],
  pillRecipes: [pillRecipes, 9.6, 10.24],
  pillIngredients: [pillIngredients, 9.6, 12],
  pillMenus: [pillMenus, 10.35, 10.18],
  pillRecipebooks: [pillRecipebooks, 8.75, 10.37],
  pillDocs: [pillDocs, 10.55, 10.37],
  pillPurchase: [pillPurchase, 5.28, 10.56],
  checkboxUnchecked: [checkboxUnchecked, 10.8, 10.8],
  checkboxChecked: [checkboxChecked, 10.8, 10.8],
  typeBg: [typeBg, 19.2, 19.2],
  typeRecipe: [typeRecipe, 9.64, 10.29],
  more: [more, 2.67, 10.67],
  sortArrow: [sortArrow, 8.09, 8.31],
  catNeedsAttention: [catNeedsAttention, 16, 16],
  catAdd: [catAdd, 9.33, 9.33],
  catAllergens: [catAllergens, 11.24, 12],
  catCreatedby: [catCreatedby, 10.67, 10.67],
  catPrepstations: [catPrepstations, 16, 16],
  catIngredients: [catIngredients, 16, 16],
  catTags: [catTags, 16, 16],
  chipInfo: [chipInfo, 10.67, 10.67],
  chipArrow: [chipArrow, 5.96, 3.51],
  chipClose: [chipClose, 7.03, 7.03],
};

// Renders an icon at its exact glyph size, centered inside an optional `box`.
export const Icon = ({ name, box, style }) => {
  const [src, w, h] = IC[name];
  const img = <img src={src} width={w} height={h} alt="" style={{ display: 'block' }} />;
  if (!box) return img;
  return (
    <span style={{ width: box, height: box, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none', ...style }}>
      {img}
    </span>
  );
};

// The 3-bar "tune" filter glyph (Figma composes 3 vectors, rotated -90 + flipped).
// `blue` swaps to the #3D5DF6 bars used by the active "Filter (1)" state.
export const FilterGlyph = ({ blue = false }) => {
  const bars = blue ? [filterBar1Blue, filterBar2Blue, filterBar3Blue] : [filterBar1, filterBar2, filterBar3];
  return (
    <span style={{ width: 19.2, height: 19.2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 0.667, transform: 'rotate(-90deg) scaleY(-1)' }}>
        {bars.map((s, i) => (
          <img key={i} src={s} width={3.33} height={12} alt="" style={{ display: 'block' }} />
        ))}
      </span>
    </span>
  );
};
