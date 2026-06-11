import React from 'react';
import portrait from '../assets/amy_carmichael_portrait.jpg';
import resumePdf from '../assets/amy-carmichael-resume.pdf';
import { ResumeSurface } from '../components/resume/ResumeSurface';

export const AboutPage = () => (
  <section className="pt-6 pb-6 md:pt-10 md:pb-20 max-w-[1024px] mx-auto">
    <h1 className="headline-small mb-6 md:hidden">About me</h1>
    <div className="flex flex-col lg:flex-row gap-12">
      <img
        src={portrait}
        alt="Amy Carmichael"
        className="rounded-lg flex-shrink-0"
        style={{ maxWidth: '240px', height: 'auto' }}
      />
      <div className="space-y-6 flex-1 min-w-0">
        <p className="body-medium text-[var(--color-text-primary)]">
          I'm a Senior Product Designer specializing in complex B2B SaaS products. I bring together
          user needs, business goals, and technical constraints to create products that feel cohesive,
          intuitive, and built to scale.
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
      <div className="flex flex-col gap-4 flex-shrink-0 min-w-[120px]">
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            title="Open resume in new tab"
            className="inline-flex items-center gap-2 body-medium text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent-secondary)]"
          >
            Resume
            {/* MUI OpenInNewRounded */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0" style={{ width: '1rem', height: '1rem' }}>
              <path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/amy-carms/"
            target="_blank"
            rel="noopener noreferrer"
            title="View LinkedIn profile"
            className="inline-flex items-center gap-2 body-medium text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent-secondary)]"
          >
            LinkedIn
            {/* MUI LinkedIn */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0" style={{ width: '1rem', height: '1rem' }}>
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 11.002-3.096 1.548 1.548 0 01-.002 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.527-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" />
            </svg>
          </a>
      </div>
    </div>

    {/* Resume — all sections grouped in one surface */}
    <div className="mt-16 pt-12 border-t border-[var(--color-border)]">
      <ResumeSurface />
    </div>
  </section>
);