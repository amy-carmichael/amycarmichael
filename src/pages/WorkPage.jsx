import React from 'react';
import { IMG } from '../components/meez/meezPageData';
import netflixThumb from '../assets/netflix-gallery-web/IMG_0027.jpg';
import inventoryThumb from '../assets/inventory/inventory-device-mockup.png';
import filterActiveMenu from '../assets/filter-active-menu.png';

const GALLERY = [
  { route: 'work/filters',       title: 'Filters',       desc: 'Scalable search and filtering',      img: IMG.filters1Bg,     imgClass: 'object-cover', overlay: filterActiveMenu, scrim: 'from-black/75 via-black/5 to-transparent' },
  { route: 'work/server-cards',  title: 'Server Cards',  desc: 'Front-of-house allergen references',  img: IMG.scPg1Bg,        imgClass: 'object-cover' },
  { route: 'work/inventory',     title: 'Inventory',     desc: 'Connected inventory and costing',     img: inventoryThumb,     imgClass: 'object-cover object-[50%_14%]', scrim: 'from-black/85 via-black/40 to-transparent' },
  { route: 'work/design-system', title: 'Design System', desc: 'Tokens for a unified UI',             img: IMG.designSystemBg, imgClass: 'object-cover' },
  { route: 'netflix',            title: 'Netflix',       desc: "Showrunner's assistant concept",      img: netflixThumb,       imgClass: 'object-cover object-[50%_-40px]' },
];

export const WorkPage = ({ showPage }) => (
  <section className="pt-6 pb-6 md:pt-10 md:pb-20 max-w-[1200px] mx-auto">
    <h1 className="headline-small mb-6 md:hidden">Work</h1>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      {GALLERY.map((p) => (
        <button
          key={p.route}
          type="button"
          onClick={() => showPage(p.route)}
          className="group relative block overflow-hidden rounded-md border border-[var(--color-bg-secondary)] text-left shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-all duration-200 hover:shadow-lg"
        >
          <img
            src={p.img}
            alt={`${p.title} project`}
            className={`block aspect-[16/10] w-full transition-transform duration-300 group-hover:scale-[1.03] ${p.imgClass} ${p.overlay ? 'brightness-[0.95] saturate-[1.05]' : ''}`}
          />
          {p.overlay && (
            <div className="pointer-events-none absolute inset-0">
              {/* App-window crop: header + filter chips are the hero; table clips off the bottom */}
              <div className="absolute left-[7%] right-[7%] top-[9%] overflow-hidden rounded-lg shadow-[-9px_26px_50px_-14px_rgba(0,0,0,0.55)] ring-1 ring-black/10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02]">
                <img
                  src={p.overlay}
                  alt=""
                  className="block aspect-[9/4] w-full object-cover object-top"
                />
              </div>
            </div>
          )}
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${p.scrim || 'from-black/70 via-black/15 to-transparent'}`} />
          <div className="absolute bottom-0 left-0 p-5 md:p-6">
            <h2 className="title-large text-white">{p.title}</h2>
            <p className="body-small text-white/80">{p.desc}</p>
          </div>
        </button>
      ))}
    </div>
  </section>
);
