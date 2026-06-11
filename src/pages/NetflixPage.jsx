import React from 'react';

const modules = import.meta.glob('../assets/netflix-gallery-web/*.jpg', {
  eager: true,
  import: 'default',
});

const images = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({ key: path, src }));

export const NetflixPage = () => (
  <section className="pt-6 pb-6 md:pt-10 md:pb-20 max-w-[1024px] mx-auto">
    <div className="mb-6 flex flex-col gap-2 md:mb-10">
      <h1 className="headline-medium text-[var(--color-text-primary)]">Showrunner's Assistant – Netflix, 2022</h1>
    </div>

    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {images.map((img) => (
        <img
          key={img.key}
          src={img.src}
          alt=""
          loading="lazy"
          className="mb-4 block w-full break-inside-avoid rounded-[8px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
        />
      ))}
    </div>
  </section>
);
