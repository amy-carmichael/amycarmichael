import React from 'react';
import { WindowScene } from '../components/home/WindowScene';

export const HomePage = () => (
  <section className="relative flex w-full items-center justify-center h-[calc(100dvh-var(--header-h))]">
    <WindowScene />
  </section>
);
