import introBg from '../../assets/meez-pg-assets/intro-bg.jpg';
import meezLogoWhite from '../../assets/meez-pg-assets/meez-logo-white.png';
import introC0 from '../../assets/meez-pg-assets/intro-collage-0.jpg';
import introC1 from '../../assets/meez-pg-assets/intro-collage-1.jpg';
import introC2 from '../../assets/meez-pg-assets/intro-collage-2.jpg';
import introC4 from '../../assets/meez-pg-assets/intro-collage-4.jpg';
import introC5 from '../../assets/meez-pg-assets/intro-collage-5.jpg';
import filters1Bg from '../../assets/meez-pg-assets/filters-bg-1.jpg';
import mFilters1 from '../../assets/meez-pg-assets/filter-landing-page-mockup.png';
import filter2Bg from '../../assets/meez-pg-assets/filter-2-bg.jpg';
import mFilters2 from '../../assets/meez-pg-assets/filter-collage.png';
import serverCardBg from '../../assets/meez-pg-assets/server-card-img.png';
import mSc1a from '../../assets/meez-pg-assets/server-card-mockup-1.1.png';
import mSc2a from '../../assets/meez-pg-assets/server-card-mockup-2.1.png';
import mSc2b from '../../assets/meez-pg-assets/server-card-mockup-2.2.png';
import mInvA from '../../assets/meez-pg-assets/inventory-mockup-1.1.png';
import mInvB from '../../assets/meez-pg-assets/inventory-mockup-1.2.png';
import designSystemBg from '../../assets/meez-pg-assets/design-system-bg.png';
import mDs from '../../assets/meez-pg-assets/design-system-mockup-2.1.png';
import mDs2 from '../../assets/meez-pg-assets/design-system-mockup-2.2.png';
import mFilters3 from '../../assets/meez-pg-assets/filters-mockup-3.png';
import fPg3a from '../../assets/meez-pg-assets/filters-pg3-1.jpg';
import fPg3b from '../../assets/meez-pg-assets/filters-pg3-1.2.jpg';
import fPg3c from '../../assets/meez-pg-assets/filters-pg3-1.3.jpg';
import scPg1Bg from '../../assets/meez-pg-assets/server-card-pg1-bg.jpg';
import mScCreate from '../../assets/meez-pg-assets/server-card-mockup-pg2.png';
import scPg2Bg from '../../assets/meez-pg-assets/server-cards-pg2-bg.jpg';
import scPg2a from '../../assets/meez-pg-assets/server-card-pg2-1.jpg';
import scPg2b from '../../assets/meez-pg-assets/server-card-pg2-1.2.jpg';
import scPg3a from '../../assets/meez-pg-assets/server-card-pg3-1.jpg';
import scPg3b from '../../assets/meez-pg-assets/server-card-pg3-2.png';
import invPg1Bg from '../../assets/meez-pg-assets/inventory-pg1-bg.jpg';
import invPg1a from '../../assets/meez-pg-assets/inventory-pg1-1.jpg';
import invPg2a from '../../assets/meez-pg-assets/inventory-pg2-1.jpg';
import invPg2b from '../../assets/meez-pg-assets/inventory-pg2-2.jpg';

export const IMG = {
  filters1Bg, mFilters1, filter2Bg, mFilters2,
  serverCardBg, mSc1a, mSc2a, mSc2b,
  mInvA, mInvB, designSystemBg, mDs, mDs2,
  introBg, meezLogoWhite, introC0, introC1, introC2, introC4, introC5,
  mFilters3, fPg3a, fPg3b, fPg3c,
  scPg1Bg, mScCreate, scPg2Bg, scPg2a, scPg2b, scPg3a, scPg3b,
  invPg1Bg, invPg1a, invPg2a, invPg2b,
};

export const INTRO = {
  body:
    'Designing one intuitive product for every role in the kitchen, with a workflow that moves as fluidly as the people using it.',
  pills: ['B2B', 'SaaS', 'Restaurant tech'],
  role: 'Senior Product Designer',
  year: '2023–present',
};

export const COPY = {
  // Filters
  filtersWhy:
    "meez's object lists are large and table-heavy, and the flat tables are hard to scan, so users had no fast way to narrow a list to a relevant subset. Existing navigation patterns encouraged users to think in disconnected content types, making it difficult to find the information needed to complete the task at hand.",
  filtersProcess:
    'I redesigned search and filtering as a scalable system, introducing structured filter categories, logical grouping, and support for complex query combinations. The work included defining filter architecture, establishing AND/OR behavior, improving discoverability, and creating a framework that could scale across multiple content types and workflows.',
  filtersOutcome:
    'The redesign transformed search from a simple retrieval tool into an operational workflow tool, enabling users to quickly identify issues such as missing costs, missing purchase information, allergens, and incomplete records. It established a foundation for more efficient data management across the platform and reduced the effort required to navigate large datasets.',
  filtersFuture:
    'While the redesign established a scalable filtering framework, the next iteration is focused on expanding search and filtering into a more proactive workflow tool. Future opportunities include surfacing variable recommendations, saved views, and contextual shortcuts that help users resolve operational issues faster.',
  // Server Cards
  serverWhy:
    "Front-of-house staff need quick, reliable references for allergens, menu descriptions, and guest-facing information, but meez's existing system was built for BOH operations. Restaurants were forced to rely on training, memory, and manager handoffs, creating inconsistency and increasing the risk of inaccurate allergen communication.",
  serverProcess:
    'A key focus of the project was reducing the amount of manual setup required to create and maintain server cards. Instead of introducing a separate workflow with its own content structure, I leveraged existing menu items as a reusable source of truth for recipe and ingredient groupings. This enabled users to create server cards from existing menu content and create menu items from existing server cards, reducing duplicate data entry while creating a stronger relationship between previously disconnected areas of the product. Throughout the design process, I used Claude to rapidly prototype and iterate on the flat, editor, and print-layout experiences.',
  serverNext:
    'Future focus would be on understanding how teams adopt server cards in day-to-day operations and where additional automation can reduce maintenance overhead. Future opportunities include expanding integrations with adjacent menu-management workflows and exploring new ways to distribute and consume server card content across both digital and physical touchpoints.',
  // Inventory
  inventoryProblem:
    'Inventory management was disconnected from adjacent workflows, requiring users to move between recipes, ingredients, purchasing, and inventory to understand stock levels and make operational decisions. This fragmentation increased cognitive load and made it difficult for kitchens to maintain an accurate view of both inventory and costs.',
  inventoryOutcome:
    "The feature became a new acquisition driver for Meez, attracting a distinct segment of operators focused on inventory control and operational efficiency. It also strengthened the platform's ecosystem by creating tighter connections between inventory, costing, and recipe management.",
  inventoryNext:
    'The project reinforced the importance of designing around operational workflows rather than product objects. Connecting inventory to the broader kitchen ecosystem created more value than treating it as a standalone feature and influenced how I approached later cross-feature initiatives.',
  inventoryProcess:
    'I led the end-to-end design of the inventory experience, mapping relationships between recipes, ingredients, and purchasing workflows. The solution introduced flexible count sheets, flexible counting by unit of measure, ingredient and recipe-based counting, and improved navigation pathways between inventory and related product areas.',
  designSystem:
    "Meez was built with MUI components and built-in theme styling, but as the product was passed down from developer to developer and designer to designer, the link between theme styling and components loosened over time. Before proposing a solution, I did some digging and uncovered several blocking problems: two theme systems were running in parallel, MUI v4 and v6 were simultaneously installed, and our semantic tokens weren't being correctly referenced. This led to engineers hardcoding styling values independently, each time.",
};

export const DS_STATS = [
  { label: 'Hardcoded px values', value: '118 instances · 53 files' },
  { label: 'Theme files', value: '2 parallel files referenced' },
  { label: 'Legacy pattern', value: 'withStyles · 442 files' },
  { label: 'Typography migration', value: '~188 usages · 70 files' },
];

export const DS_CAPTION = '213 hard coded color values became 41 color tokens.';

export const PAGES = [
  { id: 'intro',          section: 'intro',         tone: 'light' },
  { id: 'filters-1',      section: 'filters',       tone: 'light' },
  { id: 'filters-2',      section: 'filters',       tone: 'dark'  },
  { id: 'filters-3',      section: 'filters',       tone: 'dark'  },
  { id: 'server-cards-1', section: 'server-cards',  tone: 'dark'  },
  { id: 'server-cards-2', section: 'server-cards',  tone: 'dark'  },
  { id: 'server-cards-3', section: 'server-cards',  tone: 'dark'  },
  { id: 'inventory-1',    section: 'inventory',     tone: 'light' },
  { id: 'inventory-2',    section: 'inventory',     tone: 'light' },
  { id: 'design-system',  section: 'design-system', tone: 'dark'  },
  { id: 'design-tokens',  section: 'design-system', tone: 'dark'  },
];

export const SECTIONS = [
  { id: 'intro',         title: 'Intro' },
  { id: 'filters',       title: 'Filters' },
  { id: 'server-cards',  title: 'Server Cards' },
  { id: 'inventory',     title: 'Inventory' },
  { id: 'design-system', title: 'Design System' },
].map((s) => ({ ...s, firstPage: PAGES.findIndex((p) => p.section === s.id) }));
