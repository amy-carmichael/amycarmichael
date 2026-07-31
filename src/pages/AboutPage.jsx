import React from 'react';
import portrait from '../assets/amy_carmichael_portrait.jpg';
import { ResumeSurface } from '../components/resume/ResumeSurface';
import { StarDivider } from '../components/about/StarDivider';

export const AboutPage = () => (
  <section className="pt-6 pb-6 md:pt-10 md:pb-20">
    <h1 className="headline-small mb-6 md:hidden">About me</h1>
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-start">
      <img
        src={portrait}
        alt="Amy Carmichael, Senior Product Designer"
        decoding="async"
        fetchPriority="high"
        className="rounded-lg flex-shrink-0 max-w-[240px] h-auto"
      />
      <div className="space-y-6 flex-1 min-w-0">
        <p className="body-medium text-[var(--color-text-primary)]">
          I'm a Senior Product Designer specializing in complex B2B SaaS products. I bring together
          user needs, business goals and technical constraints to create products that are cohesive and built to scale.
        </p>
        <p className="body-medium text-[var(--color-text-primary)]">
          Over the past several years, I've led product initiatives from discovery through launch,
          partnering closely with product managers and engineers to define requirements, shape workflows,
          architect systems, and deliver production-ready experiences. My work spans information
          architecture, design systems, growth and monetization, operational tooling, and platform
          strategy, with a focus on connecting fragmented features into unified product ecosystems.
        </p>
        <p className="body-medium text-[var(--color-text-primary)]">
          I focus on creating products that are easier to use, easier to scale, and harder to outgrow.
        </p>
      </div>
    </div>

    <StarDivider />
    <ResumeSurface />
  </section>
);