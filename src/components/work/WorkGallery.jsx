import React from 'react';
import { IMG } from '../meez/meezPageData';
import netflixThumb from '../../assets/netflix-gallery-web/IMG_0027.jpg';
import inventoryThumb from '../../assets/inventory/inventory-device-mockup.png';
import filterActiveMenu from '../../assets/filter-active-menu.png';
import serverCardThumb from '../../assets/server cards/server-card-mockup.png';
import dsThumbBg from '../../assets/design system/thumbnail-bg.jpg';
import dsColorSystem from '../../assets/design system/Meez color system.png';
import menusThumbBg from '../../assets/menus/MenusThumbnailBackground.png';
import menusThumbDevice from '../../assets/menus/MenusThumbnail.png';

const GALLERY = [
  { route: 'work/filters',       title: 'Filters',       desc: 'Scalable search and filtering',      img: IMG.filters1Bg,     imgClass: 'object-cover', overlay: filterActiveMenu, scrim: 'from-black/75 via-black/5 to-transparent' },
  { route: 'work/menus',         title: 'Menus',         desc: 'Menu engineering and profitability analysis',  img: menusThumbBg,       imgClass: 'object-cover', device: menusThumbDevice, scrim: 'from-black/70 via-black/10 to-transparent' },
  { route: 'work/server-cards',  title: 'Server Cards',  desc: 'Service and training interface for front-of-house staff',  img: serverCardThumb,    imgClass: 'object-cover object-top' },
  { route: 'work/inventory',     title: 'Inventory',     desc: 'Connected inventory and costing',     img: inventoryThumb,     imgClass: 'object-cover object-[50%_22%]', scrim: 'from-black/85 via-black/40 to-transparent' },
  { route: 'work/design-system', title: 'Design System', desc: "Creating meez's first design system",             img: dsThumbBg,          imgClass: 'object-cover', poster: dsColorSystem, scrim: 'from-black/70 via-black/10 to-transparent' },
  { route: 'netflix',            title: 'Netflix',       desc: "Showrunner's assistant",      img: netflixThumb,       imgClass: 'object-cover object-[50%_-40px]' },
];

export const WorkGallery = ({ showPage }) => (
  <section className="pb-6 md:pb-20">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      {GALLERY.map((p) => (
        <button
          key={p.route}
          type="button"
          onClick={() => showPage(p.route)}
          className="group relative block overflow-hidden rounded-md border border-[var(--color-bg-secondary)] text-left shadow-[var(--shadow-sm)] transition-all duration-200 hover:shadow-[var(--shadow-lg)]"
        >
          <img
            src={p.img}
            alt={`${p.title} project`}
            loading="lazy"
            decoding="async"
            className={`block aspect-[16/10] w-full transition-transform duration-300 group-hover:scale-[1.03] ${p.imgClass} ${p.overlay ? 'brightness-[0.95] saturate-[1.05]' : ''}`}
          />
          {p.overlay && (
            <div className="pointer-events-none absolute inset-0">
              {/* App-window crop: header + filter chips are the hero; table clips off the bottom */}
              <div className="absolute left-[7%] right-[7%] top-[9%] overflow-hidden rounded-lg shadow-[-9px_26px_50px_-14px_rgba(0,0,0,0.55)] ring-1 ring-black/10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02]">
                <img
                  src={p.overlay}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[9/4] w-full object-cover object-top"
                />
              </div>
            </div>
          )}
          {p.poster && (
            <div className="pointer-events-none absolute inset-0">
              {/* Color-token sheet floats as a poster on the soft gradient; top swatches read as the hero */}
              <div className="absolute left-1/2 top-[8%] w-[64%] -translate-x-1/2 overflow-hidden rounded-lg bg-white shadow-[0_18px_45px_-12px_rgba(0,0,0,0.5)] ring-1 ring-black/10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02]">
                <img
                  src={p.poster}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[7/5] w-full object-cover object-top"
                />
              </div>
            </div>
          )}
          {p.device && (
            <div className="pointer-events-none absolute inset-0">
              {/* Transparent device render floats on the gradient; the screen is the hero, the stand crops off behind the scrim */}
              <img
                src={p.device}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute left-1/2 top-[8%] w-[92%] -translate-x-1/2 drop-shadow-[0_18px_40px_rgba(0,0,0,0.32)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02]"
              />
            </div>
          )}
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${p.scrim || 'from-black/70 via-black/15 to-transparent'}`} />
          <div className="absolute bottom-0 left-0 p-5 md:p-6">
            <h2 className="headline-medium text-white">{p.title}</h2>
            <p className="body-medium text-white/80">{p.desc}</p>
          </div>
        </button>
      ))}
    </div>
  </section>
);
