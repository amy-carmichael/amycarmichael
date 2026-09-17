import meezIcon from '../../assets/meez-icon.png';

// Served from public/, so referenced by URL rather than imported.
const faviconIcon = '/favicon.png';

export const EXPERIENCE = [
  {
    title: 'Product Design Consultant',
    sub: 'Garden Grove Nissan',
    dates: 'Jun 2026 – Present',
    span: '3 mos',
    icon: faviconIcon,
    bullets: [
      'Built an AI-assisted discovery workflow that connected Google Analytics engagement data, Meta campaign performance, CRM sales outcomes and website UX audit findings to produce prioritized redesign requirements.',
      'Spearheaded the redesign of a car dealership’s digital retail website, defining its information architecture and responsive shopping journeys to increase qualified lead submissions by 18%.',
    ],
  },
  {
    title: 'Senior Product Designer',
    sub: 'meez',
    dates: 'Feb 2023 – Jun 2026',
    span: '3 yrs 5 mos',
    icon: meezIcon,
    bullets: [
      'Owned end-to-end product design function in a fast-moving B2B SaaS environment, translating open-ended user problems into requirements, user flows, polished interfaces and shipped features through close collaboration with Product and Engineering.',
      'Established the product’s inaugural design system by leading a wide audit of the codebase and coordinating a sequenced refactor to upgrade MUI versions and remove deprecated styling code. Designed and implemented a semantic token system and a component library that was compatible with MCP agents.',
      'Conducted deep user research to identify growth opportunities and user retention strategy. Created agentic skills to aggregate quantitative user data and synthesize findings to drive design discovery.',
      'Designed and shipped an AI-assisted recipe creation tool that converted files into structured content, balancing automation with warnings, correction paths and user review for nondeterministic output.',
      'Redesigned Search and Filtering features and grounded the new interaction model in user research, leading to a 26% increase in user interaction within the first month of release.',
      'Integrated AI to optimize design workflow, using it to build working prototypes, analyze codebase patterns, and reason through permissions, inherited data, and conditional states before implementation.',
    ],
  },
  {
    title: 'Digital Designer',
    sub: 'Freelance',
    dates: 'Jan – Dec 2022',
    mark: 'F',
    bullets: [
      'Led visual design execution for client brand and web relaunches, building marketing site pages in HTML, CSS and JavaScript and creating logo graphics and launch-ready assets across digital and print channels.',
      'Moved beyond static design into how pages behaved, structuring layouts, states and interactions.',
    ],
  },
  {
    title: 'Assistant to Showrunner/Executive Producer',
    sub: 'Netflix',
    dates: 'Apr – Nov 2021',
    mark: 'N',
    bullets: [
      'Worked closely with the showrunner and episodic directors to design storyboards and concept art used to build shotlists and oneliners.',
      'Reviewed scripts across the season for narrative continuity, tracking how each scene, setup and payoff connected across episodes.',
    ],
  },
];

export const EDUCATION = [
  { title: 'University of California, Santa Barbara', sub: 'Film & Media Studies; English' },
];

export const CERTIFICATIONS = [
  { title: 'Fullstory', sub: 'Fundamental Product Certification' },
  { title: 'General Assembly', sub: 'HTML, CSS, and JavaScript Circuit' },
  { title: 'Google', sub: 'UX Design Certificate' },
];

export const SKILLS = [
  "Functional Prototyping",
  "AI-Assisted Design",
  "User Research",
  "Design Systems",
  "Responsive Web Design",
];
