import React from 'react';
import '../../styles/color-system.css';

// The meez color token library — eight families.
// The family "anchor" dot is the darkest token in the family, which is also the
// swatch the family reads as at a glance.
const FAMILIES = [
  { name: 'Blue', swatches: [
    ['blue50', '#F8FAFE'], ['blue100', '#F1F5FE'], ['blue150', '#DBE4FF'], ['blue200', '#647DF8'],
    ['blue300', '#3D5DF6'], ['blue350', '#1236E1'], ['blue400', '#001992'], ['blue550', '#3C4679'],
    ['blue575', '#202962'], ['blue600', '#050841'] ] },
  { name: 'Grey', swatches: [
    ['white', '#FFFFFF'], ['grey25', '#FBFBFB'], ['grey50', '#F3F3F3'], ['grey100', '#ECECEC'],
    ['grey200', '#DADADA'], ['grey350', '#CCCCCC'], ['grey400', '#B5B5B5'], ['grey450', '#95969C'],
    ['grey600', '#757677'], ['grey700', '#4C4C4C'], ['black', '#000000'] ] },
  { name: 'Grey Blue', swatches: [
    ['greyBlue100', '#A5A9C1'], ['greyBlue200', '#8283A0'], ['greyBlue300', '#4D5481'] ] },
  { name: 'Green', swatches: [
    ['green100', '#ABDDD1'], ['green200', '#40B49A'], ['green250', '#20AB85'], ['green300', '#3F908A'] ] },
  { name: 'Red', swatches: [
    ['red50', '#FFF5F6'], ['red100', '#FFCCCC'], ['red200', '#FF9C94'], ['red300', '#F63D48'],
    ['red400', '#E00001'], ['red500', '#BC0020'] ] },
  { name: 'Orange', swatches: [['orange300', '#F3A642']] },
  { name: 'Purple', swatches: [['purple400', '#6234F2']] },
  { name: 'Pink', swatches: [['pink50', '#FBF7FA'], ['pink200', '#FFD2F5']] },
];

export const ColorSystem = () => (
  <div className="mzc">
    <div className="mzc__inner">
      <h2 className="mzc__title">Colors</h2>

      {FAMILIES.map(({ name, swatches }) => (
        <section key={name} className="mzc__family">
          <div className="mzc__head">
            <div className="mzc__id">
              <span className="mzc__anchor" style={{ background: swatches[swatches.length - 1][1] }} />
              <h3 className="mzc__name">{name}</h3>
            </div>
            <span className="mzc__count">
              {swatches.length === 1 ? '1 token' : `${swatches.length} tokens`}
            </span>
          </div>

          <div className="mzc__grid">
            {swatches.map(([token, hex]) => (
              <div key={token}>
                <div className="mzc__block" style={{ background: hex }} />
                <div className="mzc__token">{token}</div>
                <div className="mzc__value">{hex}</div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  </div>
);
