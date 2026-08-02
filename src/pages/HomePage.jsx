import React from 'react';
import { TypingTagline } from '../components/home/TypingTagline';
import { WorkGallery } from '../components/work/WorkGallery';

export const HomePage = ({ showPage }) => (
  <>
    <section className="w-full h-[calc(100dvh/3)] flex flex-col items-center justify-center">
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

    <WorkGallery showPage={showPage} />
  </>
);
