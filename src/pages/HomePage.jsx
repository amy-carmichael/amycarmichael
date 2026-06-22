import React from 'react';
import { TypingTagline } from '../components/home/TypingTagline';

export const HomePage = () => (
  <section className="w-full h-[calc(100dvh-var(--header-h))] flex flex-col items-center justify-start pt-[32vh]">
    {/* Visually hidden, but read by search engines and screen readers so the
        default landing view has a real heading with the name + role. */}
    <h1 className="sr-only">Amy Carmichael — Senior Product Designer for B2B SaaS</h1>
    <p className="sr-only">
      Portfolio of Amy Carmichael, a Senior Product Designer specializing in complex B2B SaaS
      products, design systems, information architecture, and end-to-end platform design for
      technical workflows.
    </p>
    <TypingTagline />
  </section>
);
