import React from 'react';
import { TypingTagline } from '../components/home/TypingTagline';

export const HomePage = () => (
  <section className="w-full h-[calc(100dvh-var(--header-h))] flex items-center justify-center">
    <TypingTagline />
  </section>
);
