import React from 'react';
import meezHomepage from '../assets/meez-homepage.png';
import netflixThumb from '../assets/netflix-gallery-web/IMG_0027.jpg';

export const WorkPage = ({ showPage }) => (
  <section className="pt-6 pb-6 md:pt-10 md:pb-20 max-w-[1024px] mx-auto">
    <div className="flex flex-col justify-between gap-8 mb-6 md:hidden">
      <h1 className="headline-small md:hidden">Work</h1>
    </div>
    <div className="flex flex-col gap-4 md:gap-8">
      <div
        className="group relative cursor-pointer overflow-hidden rounded-md border border-[var(--color-bg-secondary)] bg-[#fbfbfb] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-all duration-200 hover:shadow-lg"
        onClick={() => showPage('meez')}
      >
        <div className="overflow-hidden rounded-md">
          <img
            src={meezHomepage}
            alt="meez case study"
            className="block aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            className="cursor-pointer whitespace-nowrap rounded-[100px] px-8 pt-2 pb-3 text-xl font-normal text-[var(--color-accent-secondary)] bg-[var(--color-bg-white)] shadow-[0_2px_6px_rgba(0,0,0,0.2)] transition-colors duration-200 group-hover:bg-[var(--color-accent-secondary)] group-hover:text-[var(--color-bg-white)] md:text-3xl"
          >
            meez
          </button>
        </div>
      </div>

      <div
        className="group relative cursor-pointer overflow-hidden rounded-md border border-[var(--color-bg-secondary)] bg-[#fbfbfb] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-all duration-200 hover:shadow-lg"
        onClick={() => showPage('netflix')}
      >
        <div className="overflow-hidden rounded-md">
          <img
            src={netflixThumb}
            alt="Showrunner's Assistant case study"
            className="block aspect-[16/10] w-full object-cover object-[50%_-40px] transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            className="cursor-pointer whitespace-nowrap rounded-[100px] px-8 pt-2 pb-3 text-xl font-normal text-[var(--color-accent-secondary)] bg-[var(--color-bg-white)] shadow-[0_2px_6px_rgba(0,0,0,0.2)] transition-colors duration-200 group-hover:bg-[var(--color-accent-secondary)] group-hover:text-[var(--color-bg-white)] md:text-3xl"
          >
            Netflix
          </button>
        </div>
      </div>
    </div>
  </section>
);