export const IMAGES = {
  portrait: '/src/assets/images/girish_portrait_1794995565925.jpg',
  heroBackdrop: '/src/assets/images/hero_abstract_studio_1794995565852.jpg',
  gbCoder: '/src/assets/images/work_gb_coder_1794995565573.jpg',
  lsPdf: '/src/assets/images/work_ls_pdf_1794995565925.jpg',
  bharatLand: '/src/assets/images/work_bharat_land_1794995566029.jpg',
  gameHub: '/src/assets/images/work_gamehub_canvas_1794995567518.jpg',
  blogSimplicity: '/src/assets/images/blog_simplicity_design_1794995567415.jpg',
  kineticSculpture: '/src/assets/images/services_kinetic_sculpture_1794995567448.jpg',
} as const;

export const PROFILE = {
  name: 'Girish Balaso Lade',
  displayName: 'Girish Lade',
  brand: 'LadeStack™',
  role: 'UI/UX Designer · Full-Stack Developer · Founder of LadeStack',
  location: 'Pune, Maharashtra, India',
  email: 'admin@ladestack.in',
  since: '2021',
  availability: '3 Slots Open — 2026',
  philosophy:
    'Engineer by training. Product builder by choice. Turning complex systems into effortless, privacy-conscious digital experiences.',
  socials: [
    { label: 'GitHub', handle: 'girishlade111', url: 'https://github.com/girishlade111' },
    { label: 'LinkedIn', handle: 'girish-lade', url: 'https://www.linkedin.com/in/girish-lade/' },
    { label: 'Instagram', handle: 'girish_lade_', url: 'https://www.instagram.com/girish_lade_/' },
    { label: 'CodePen', handle: 'Girish-Lade-the-looper', url: 'https://codepen.io/Girish-Lade-the-looper' },
  ],
  education: [
    "Bachelor of Engineering in Mechanical Engineering — Fabtech Technical Campus",
    "Engineering Foundations — SVERI's College of Engineering",
  ],
} as const;

export type ProjectCategory =
  | 'All'
  | 'Developer Tools'
  | 'Document Utilities'
  | 'Interactive Apps'
  | 'Regional Tools';

export interface ProjectCaseStudy {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  category: Exclude<ProjectCategory, 'All'>;
  year: string;
  liveUrl: string;
  repoUrl: string;
  image: string;
  rotateDeg: number;
  featured: boolean;
  stack: string[];
  metrics: { label: string; value: string }[];
  challenge: string;
  architecture: string;
  stateExecution: string;
  interfaceDesign: string;
  outcomes: string[];
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: 'gb-coder',
    index: '01',
    title: 'GB Coder',
    tagline: 'In-browser IDE powered by Monaco Editor and WebContainer Node.js runtimes.',
    category: 'Developer Tools',
    year: '2026',
    liveUrl: 'https://code.ladestack.in/',
    repoUrl: 'https://github.com/girishlade111',
    image: IMAGES.gbCoder,
    rotateDeg: -1.8,
    featured: true,
    stack: ['React 19', 'TypeScript', 'Monaco Editor', 'WebContainers', 'JSZip'],
    metrics: [
      { label: 'Boot Time', value: '< 1.4s' },
      { label: 'Execution', value: 'In-Browser Node' },
      { label: 'Export', value: 'Full ZIP Bundle' },
    ],
    challenge:
      'Developers prototyping multi-file JavaScript and TypeScript utilities often lose momentum configuring local environments or fighting sluggish cloud sandboxes that drop connection mid-edit.',
    architecture:
      'GB Coder pairs a custom virtual file-tree abstraction with WebContainers to run an isolated Node.js process directly inside the user browser tab, keeping editor latency indistinguishable from desktop VS Code.',
    stateExecution:
      'File buffers, unsaved diffs, and terminal stdout streams synchronize through deterministic event queues so hot preview panes reflect code edits without blocking Monaco keystrokes.',
    interfaceDesign:
      'High-contrast obsidian surfaces reduce visual glare during extended coding sessions, while clean split-pane dividers and tabular file counters preserve spatial orientation.',
    outcomes: [
      'Zero-setup instant coding workspace with multi-file directory tree and live terminal.',
      'One-click JSZip archive export preserving clean project structure for local Git commits.',
      'Complete client-side execution eliminating server spin-up queues.',
    ],
  },
  {
    slug: 'ls-pdf',
    index: '02',
    title: 'LS PDF',
    tagline: '17-in-1 privacy-first client-side PDF manipulation and security suite.',
    category: 'Document Utilities',
    year: '2025',
    liveUrl: 'https://pdf.ladestack.in/',
    repoUrl: 'https://github.com/girishlade111',
    image: IMAGES.lsPdf,
    rotateDeg: 1.6,
    featured: true,
    stack: ['TypeScript', 'PDF.js', 'pdf-lib', 'Web Workers', 'IndexedDB'],
    metrics: [
      { label: 'Utilities', value: '17 Tools' },
      { label: 'Uploads', value: '0 Server Bytes' },
      { label: 'Privacy', value: '100% Local' },
    ],
    challenge:
      'Most online PDF utilities force users to upload sensitive contracts, tax filings, and identity records to opaque remote servers just to merge two pages or rotate a scan.',
    architecture:
      'LS PDF compiles document parsing, page reordering, watermarking, compression, and AES encryption directly onto the client thread using Web Workers and pdf-lib binary streams.',
    stateExecution:
      'Large multi-megabyte documents are chunked into transferable ArrayBuffers inside dedicated background workers, keeping thumbnail drag-and-drop smooth at 60fps.',
    interfaceDesign:
      'Each of the 17 document workflows shares a unified dropzone grammar, instant thumbnail grids, and clear file-size delta readouts before download.',
    outcomes: [
      '17 local document tools running completely offline-capable after initial load.',
      'Eliminated server bandwidth bottlenecks and third-party document retention risks.',
      'Zero paywalls, zero watermarks, and instant binary output.',
    ],
  },
  {
    slug: 'md2pdf',
    index: '03',
    title: 'MD2PDF',
    tagline: 'Markdown-to-PDF book and technical documentation publisher with KaTeX math.',
    category: 'Document Utilities',
    year: '2025',
    liveUrl: 'https://md2pdf.ladestack.in/',
    repoUrl: 'https://github.com/girishlade111',
    image: IMAGES.blogSimplicity,
    rotateDeg: -1.4,
    featured: true,
    stack: ['React', 'TypeScript', 'KaTeX', 'Unified/Remark', 'Print CSS'],
    metrics: [
      { label: 'Math Engine', value: 'KaTeX' },
      { label: 'Pagination', value: 'A4 / Letter' },
      { label: 'Themes', value: 'Editorial Print' },
    ],
    challenge:
      'Technical writers and engineering students struggle to turn multi-chapter Markdown repositories containing equations and code blocks into print-ready PDFs without wrestling with LaTeX toolchains.',
    architecture:
      'MD2PDF parses CommonMark and GFM ASTs in real time, renders mathematical expressions via KaTeX, applies syntax highlighting, and compiles multi-file chapters into clean paged media.',
    stateExecution:
      'Debounced AST transformation keeps split-pane scroll positions synchronized between raw Markdown source and live paginated print preview.',
    interfaceDesign:
      'Designed around a calm editorial 65ch reading measure with customizable typography presets, header/footer running marks, and distraction-free focus mode.',
    outcomes: [
      'Multi-file book compilation with automatic table of contents generation.',
      'Crisp vector math typesetting and code block wrapping for print output.',
      'Instant browser export with zero external conversion queues.',
    ],
  },
  {
    slug: 'bharat-land-converter',
    index: '04',
    title: 'Bharat Land Converter',
    tagline: 'Region-aware Indian land measurement converter across 28+ local units.',
    category: 'Regional Tools',
    year: '2024',
    liveUrl: 'https://land.ladestack.in/',
    repoUrl: 'https://github.com/girishlade111',
    image: IMAGES.bharatLand,
    rotateDeg: 1.5,
    featured: true,
    stack: ['TypeScript', 'React', 'Precision Decimal Math', 'Tailwind CSS'],
    metrics: [
      { label: 'Regional Units', value: 'Guntha / Bigha / Kattha' },
      { label: 'Precision', value: '6 Decimal Places' },
      { label: 'States', value: 'State-Aware' },
    ],
    challenge:
      'Indian land measurements vary dramatically by state—a Bigha in Maharashtra differs from Uttar Pradesh or West Bengal—causing costly calculation errors for surveyors, farmers, and buyers.',
    architecture:
      'Built a deterministic state-indexed conversion matrix anchored to exact square-meter and square-foot base constants so regional units translate accurately across every Indian jurisdiction.',
    stateExecution:
      'All unit pairings update bi-directionally in a single synchronous pass using precision decimal arithmetic to prevent floating-point drift on large acreages.',
    interfaceDesign:
      'Clean tabular numerals, clear state selectors, and side-by-side comparison cards make complex agricultural and plot conversions effortless on mobile field devices.',
    outcomes: [
      'Accurate conversions across Guntha, Bigha, Biswa, Kattha, Acre, Hectare, and Sq. Ft.',
      'State-contextual disambiguation eliminating common regional multiplier mistakes.',
      'Fast mobile-first interface built for field use even on low-bandwidth connections.',
    ],
  },
  {
    slug: 'swift-resume',
    index: '05',
    title: 'Swift Resume',
    tagline: 'Structured ATS-friendly resume builder with real-time A4 preview.',
    category: 'Document Utilities',
    year: '2025',
    liveUrl: 'https://resume.ladestack.in/',
    repoUrl: 'https://github.com/girishlade111',
    image: IMAGES.heroBackdrop,
    rotateDeg: -1.5,
    featured: false,
    stack: ['React', 'TypeScript', 'LocalStorage', 'Print Engine'],
    metrics: [
      { label: 'Parser Safety', value: '100% ATS Clean' },
      { label: 'Preview', value: 'Live A4 Scale' },
      { label: 'Signup', value: 'None Required' },
    ],
    challenge:
      'Job seekers get locked behind aggressive subscription paywalls after spending an hour filling out resume builders, or export over-styled PDFs that Applicant Tracking Systems fail to parse.',
    architecture:
      'Swift Resume stores structured JSON career schemas locally in browser persistence and maps them to semantic, single- and two-column print layouts engineered for clean text extraction.',
    stateExecution:
      'Reorderable experience blocks and instant margin adjustments re-flow the live A4 preview container cleanly without layout thrash.',
    interfaceDesign:
      'Left-hand structured editor paired with a crisp right-hand A4 sheet preview, allowing candidates to inspect exact page breaks before exporting.',
    outcomes: [
      'Instant client-side PDF generation with selectable vector text for ATS parsers.',
      'Zero account walls or surprise export fees.',
      'Reusable JSON profile export/import for versioned role tailoring.',
    ],
  },
  {
    slug: 'ls-image-compressor',
    index: '06',
    title: 'LS Image Compressor',
    tagline: 'Local batch image optimizer with WebP conversion and EXIF stripping.',
    category: 'Document Utilities',
    year: '2025',
    liveUrl: 'https://img.ladestack.in/',
    repoUrl: 'https://github.com/girishlade111',
    image: IMAGES.kineticSculpture,
    rotateDeg: 1.4,
    featured: false,
    stack: ['TypeScript', 'Canvas API', 'OffscreenCanvas', 'JSZip'],
    metrics: [
      { label: 'Formats', value: 'WebP / JPEG / PNG' },
      { label: 'Privacy', value: 'EXIF Stripped' },
      { label: 'Batching', value: 'Multi-File ZIP' },
    ],
    challenge:
      'Content teams and web developers frequently compress product assets through remote services that log original photos and retain embedded GPS EXIF metadata.',
    architecture:
      'Uses browser Canvas and OffscreenCanvas pipelines to decode, resize, re-encode to WebP/JPEG at calibrated quality thresholds, and automatically strip sensitive EXIF headers.',
    stateExecution:
      'Queue workers process image batches sequentially with live byte-savings telemetry and split-slider visual inspection.',
    interfaceDesign:
      'Minimal drag-and-drop workspace displaying exact before/after kilobyte deltas and percentage reductions in clean tabular numerals.',
    outcomes: [
      'Up to 80% payload reduction for web imagery with zero server upload.',
      'Automatic EXIF metadata removal for privacy-safe publishing.',
      'Single-click ZIP download for optimized asset batches.',
    ],
  },
  {
    slug: 'gamehub',
    index: '07',
    title: 'GameHub',
    tagline: 'Interactive arcade portal hosting 33 instant-play browser canvas games.',
    category: 'Interactive Apps',
    year: '2025',
    liveUrl: 'https://games-ladestack.vercel.app/',
    repoUrl: 'https://github.com/girishlade111',
    image: IMAGES.gameHub,
    rotateDeg: -1.6,
    featured: false,
    stack: ['Next.js 15', 'React 19', 'HTML5 Canvas', 'Tailwind CSS'],
    metrics: [
      { label: 'Library', value: '33+ Games' },
      { label: 'Frame Target', value: '60 FPS Canvas' },
      { label: 'Startup', value: 'Instant Play' },
    ],
    challenge:
      'Casual browser game portals are notoriously cluttered with intrusive ad overlays, slow Flash-era wrappers, and inconsistent mobile touch controls.',
    architecture:
      'GameHub standardizes 33 custom HTML5 Canvas games—from classic strategy boards to reflex arcades—under a unified React 19 shell with shared input bindings and score persistence.',
    stateExecution:
      'Deterministic requestAnimationFrame loops decoupled from React state ensure silky 60fps gameplay without garbage-collection stutters.',
    interfaceDesign:
      'Clean dark gallery layout with category filtering, keyboard/touch control hints, and zero ad clutter.',
    outcomes: [
      '33+ self-contained canvas games running smoothly across desktop and mobile.',
      'Instant cold-start transitions between titles via Next.js App Router.',
      'High replayability with local high-score tracking.',
    ],
  },
  {
    slug: 'ladestack-platform',
    index: '08',
    title: 'LadeStack Ecosystem Hub',
    tagline: 'Central multi-utility platform built on Astro with 9-language i18n architecture.',
    category: 'Developer Tools',
    year: '2026',
    liveUrl: 'https://ladestack.in/',
    repoUrl: 'https://github.com/girishlade111',
    image: IMAGES.portrait,
    rotateDeg: 1.2,
    featured: false,
    stack: ['Astro', 'TypeScript', '9-Language i18n', 'JSON-LD SEO', 'Tailwind CSS'],
    metrics: [
      { label: 'Locales', value: '9 Languages' },
      { label: 'Lighthouse', value: '99+ Performance' },
      { label: 'Architecture', value: 'Zero-JS Static' },
    ],
    challenge:
      'Unifying eight standalone developer and document tools under one cohesive global platform required near-instant page loads and authentic multilingual discoverability.',
    architecture:
      'Engineered on Astro static generation with typed i18n dictionaries across 9 languages, automated hreflang alternate mapping, and structured Schema.org JSON-LD metadata.',
    stateExecution:
      'Zero unnecessary client JavaScript on content routes keeps Time to Interactive practically instantaneous on mid-range mobile hardware.',
    interfaceDesign:
      'Swiss grid clarity, consistent dark/light contrast pairs, and unified tool navigation tying the entire LadeStack suite together.',
    outcomes: [
      '9-language localized directory connecting users directly to every LadeStack utility.',
      'Sub-second First Contentful Paint and clean semantic search indexing.',
      'Scalable template architecture for launching future privacy-first tools.',
    ],
  },
];

export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  image: string;
  deliverables: {
    name: string;
    detail: string;
  }[];
}

export const SERVICES: ServiceOffering[] = [
  {
    id: '01',
    title: 'Web Application Engineering',
    description:
      'Next.js, Astro, React, and TypeScript applications engineered for sub-second speed, semantic clarity, and clean modular architecture.',
    image: IMAGES.gbCoder,
    deliverables: [
      {
        name: 'Next.js & React 19 Architecture',
        detail: 'App Router applications with strict TypeScript contracts, clean state boundaries, and resilient error handling.',
      },
      {
        name: 'Design Systems & Component Libraries',
        detail: 'Accessible, token-driven UI primitives supporting seamless light and dark theme switching.',
      },
      {
        name: 'Performance Optimization',
        detail: 'Bundle splitting, asset preloading, and layout stability tuned for 99+ Core Web Vitals.',
      },
      {
        name: 'Full-Stack API Integration',
        detail: 'Type-safe REST/RPC endpoints, PostgreSQL/Supabase schemas, and clean validation layers.',
      },
      {
        name: 'Codebase Modernization',
        detail: 'Refactoring legacy spaghetti frontends into maintainable, tested TypeScript modules.',
      },
    ],
  },
  {
    id: '02',
    title: 'UI/UX & Design Systems',
    description:
      'Swiss-inspired typography, deliberate spacing math, WCAG AA accessibility, and tactile Framer Motion micro-interactions.',
    image: IMAGES.blogSimplicity,
    deliverables: [
      {
        name: 'Product Interface Design',
        detail: 'High-clarity user flows from wireframe structure to production-ready interactive prototypes.',
      },
      {
        name: 'Typographic & Grid Systems',
        detail: 'Editorial hierarchy, tabular numeric alignment, and responsive 12-column spatial grids.',
      },
      {
        name: 'Motion Choreography',
        detail: 'GPU-composited transitions, spring physics, and purposeful scroll reveals using Motion.',
      },
      {
        name: 'Accessibility Audits (WCAG 2.2 AA)',
        detail: 'Keyboard navigation, focus-visible rings, semantic landmarks, and contrast verification.',
      },
      {
        name: 'Interactive Prototyping',
        detail: 'Real browser prototypes to test usability and interaction latency before full build-out.',
      },
    ],
  },
  {
    id: '03',
    title: 'In-Browser DevTools',
    description:
      'Monaco Editor integrations, WebContainer Node.js environments, sandboxed virtual workspaces, and client-side project bundling.',
    image: IMAGES.gbCoder,
    deliverables: [
      {
        name: 'Monaco Editor Workspaces',
        detail: 'Custom language diagnostics, multi-tab buffers, and responsive code-editing shells.',
      },
      {
        name: 'WebContainer Runtimes',
        detail: 'Running Node.js servers, package installs, and live terminals natively inside the browser.',
      },
      {
        name: 'Virtual File Systems',
        detail: 'In-memory directory trees with instant rename, diffing, and IndexedDB persistence.',
      },
      {
        name: 'Live Preview Sandboxes',
        detail: 'Isolated iframe compilation panes with zero-flicker update pipelines.',
      },
      {
        name: 'Client-Side Archive Export',
        detail: 'Packaging multi-file workspaces into clean, downloadable ZIP bundles via JSZip.',
      },
    ],
  },
  {
    id: '04',
    title: 'Local-First Utilities',
    description:
      'Zero-server data manipulation using IndexedDB, Web Workers, PDF.js, OffscreenCanvas, and client-side WebAssembly routines.',
    image: IMAGES.lsPdf,
    deliverables: [
      {
        name: 'Client-Side PDF Pipelines',
        detail: 'Merging, splitting, compressing, and encrypting documents locally via pdf-lib and PDF.js.',
      },
      {
        name: 'Canvas & Image Processing',
        detail: 'Lossless/WebP compression, dimension scaling, and EXIF metadata stripping in-browser.',
      },
      {
        name: 'Web Worker Offloading',
        detail: 'Keeping main UI threads responsive at 60fps during heavy binary transformations.',
      },
      {
        name: 'Offline-Ready Persistence',
        detail: 'Structured IndexedDB storage so user drafts survive refreshes without cloud lock-in.',
      },
      {
        name: 'Privacy-By-Architecture Audits',
        detail: 'Eliminating unnecessary telemetry and remote file uploads from utility workflows.',
      },
    ],
  },
  {
    id: '05',
    title: 'AI Workflows & Agents',
    description:
      'Multi-LLM orchestrations, BYOK architectures, structured output pipelines, and practical developer productivity tooling.',
    image: IMAGES.kineticSculpture,
    deliverables: [
      {
        name: 'BYOK AI Tooling',
        detail: 'User-controlled API key architectures with transparent token usage and zero lock-in.',
      },
      {
        name: 'Structured Extraction Pipelines',
        detail: 'Schema-validated JSON outputs turning unstructured inputs into reliable application state.',
      },
      {
        name: 'Developer Productivity Assistants',
        detail: 'Context-aware code transformation and documentation generation tools.',
      },
      {
        name: 'Multi-Provider Routing',
        detail: 'Clean adapter layers supporting Gemini, Claude, and OpenAI models interchangeably.',
      },
      {
        name: 'Evaluation & Guardrails',
        detail: 'Deterministic validation harnesses verifying AI workflow accuracy before production.',
      },
    ],
  },
  {
    id: '06',
    title: 'Technical SEO & i18n',
    description:
      'Static Astro HTML architectures, 9-language localization, structured JSON-LD schema, and sub-second global edge delivery.',
    image: IMAGES.bharatLand,
    deliverables: [
      {
        name: 'Multilingual i18n Routing',
        detail: 'Typed locale dictionaries, localized URL structures, and automated hreflang tags.',
      },
      {
        name: 'Schema.org JSON-LD Graph',
        detail: 'Rich structured data for software applications, articles, and creator profiles.',
      },
      {
        name: 'Static Edge Publishing',
        detail: 'Astro and static-first builds shipping minimal JavaScript for instant global loads.',
      },
      {
        name: 'Semantic Information Architecture',
        detail: 'Clean heading hierarchies, canonical rules, and crawlable internal linking.',
      },
      {
        name: 'Core Web Vitals Engineering',
        detail: 'Zero CLS font loading, responsive image sizing, and sub-100ms server responses.',
      },
    ],
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  featured?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Girish approaches frontend architecture like a mechanical engineer—every state transition, spacing ratio, and edge case is accounted for before a single component ships.',
    name: 'Rohan Deshmukh',
    role: 'Engineering Lead',
    company: 'Kinetix Cloud Systems',
    featured: true,
  },
  {
    quote:
      'Working with LadeStack transformed our cluttered internal utilities into a calm, local-first web suite our team actually enjoys opening every morning.',
    name: 'Ananya Kulkarni',
    role: 'Product Director',
    company: 'Veridian Labs',
  },
  {
    quote:
      'Rarely do you find a builder who understands both crisp Swiss visual restraint and low-level browser runtimes like WebContainers and Web Workers.',
    name: 'Vikramaditya Nair',
    role: 'Co-Founder',
    company: 'DevPulse India',
  },
];

export interface JournalArticle {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: 'the-power-of-simplicity',
    title: 'The power of simplicity in modern real brand design',
    date: 'November 11, 2025',
    category: 'Design Systems',
    image: IMAGES.blogSimplicity,
    excerpt:
      'Why removing decorative noise, enforcing strict typographic spacing, and designing around clear purpose builds products users trust.',
    sections: [
      {
        heading: 'Why Simplicity Matters',
        paragraphs: [
          'In a web ecosystem saturated with floating gradients, badge clutter, and unnecessary modals, simplicity has become the clearest competitive advantage in software design. Focused interfaces let users accomplish their task in seconds instead of deciphering ornamental chrome.',
          'Simplicity is never about stripping away capability. At LadeStack, whether building a 17-tool PDF suite or an in-browser IDE, the discipline lies in hiding mechanical complexity behind calm, predictable interactions.',
        ],
      },
      {
        heading: 'Clarity Over Complexity',
        paragraphs: [
          'Strong digital products rely on well-proportioned typography, deliberate whitespace, and restrained contrast. By removing redundant borders and keeping metadata scannable, every button and readout earns its place on screen.',
        ],
      },
      {
        heading: 'Engineering Discipline Meets Visual Craft',
        paragraphs: [
          'Coming from a Mechanical Engineering background, I view interface design like tolerance engineering: every extra moving part introduces friction and potential failure. Clean Swiss grids, consistent radius math, and deterministic states make software feel solid.',
        ],
      },
      {
        heading: 'Less, But More Meaningful',
        paragraphs: [
          'When each element serves a single clear function, users immediately feel the difference. Products feel faster, more trustworthy, and built to last beyond passing visual trends.',
        ],
      },
    ],
  },
  {
    slug: 'local-first-web-utilities',
    title: 'Why local-first computing is the future of web utilities',
    date: 'October 14, 2025',
    category: 'Architecture',
    image: IMAGES.lsPdf,
    excerpt:
      'How Web Workers, IndexedDB, and client-side binary libraries eliminate server queues and protect user privacy by default.',
    codeSnippet: {
      filename: 'pdf-worker.ts',
      language: 'typescript',
      code: `self.onmessage = async (event: MessageEvent<{ buffer: ArrayBuffer }>) => {
  const bytes = new Uint8Array(event.data.buffer);
  const processed = await transformDocumentLocally(bytes);
  self.postMessage({ result: processed.buffer }, [processed.buffer]);
};`,
    },
    sections: [
      {
        heading: 'The Hidden Cost of Server Round-Trips',
        paragraphs: [
          'Every time a user uploads a 40MB PDF or batch of product photos just to resize or merge them, two things break: latency spikes over mobile networks, and sensitive files leave the user device unnecessarily.',
          'Modern browsers already carry powerful multi-threaded runtimes. By moving binary processing into Web Workers and transferring ArrayBuffers cleanly, the user device becomes an instant, zero-cost compute engine.',
        ],
      },
      {
        heading: 'Privacy as an Architectural Guarantee',
        paragraphs: [
          'A privacy policy written in legal prose is weaker than an architecture that physically never transmits user bytes over the wire. When LS PDF or LS Image Compressor runs entirely in client memory, trust is verifiable directly in the browser network tab.',
        ],
      },
    ],
  },
  {
    slug: 'building-gb-coder-webcontainers',
    title: 'Building an in-browser IDE with Monaco Editor and WebContainers',
    date: 'August 22, 2025',
    category: 'Developer Tools',
    image: IMAGES.gbCoder,
    excerpt:
      'Lessons from pairing Monaco buffers with WebContainer Node.js runtimes to achieve sub-second feedback inside a browser tab.',
    codeSnippet: {
      filename: 'virtual-fs-sync.ts',
      language: 'typescript',
      code: `export async function syncBufferToContainer(
  instance: WebContainerHandle,
  path: string,
  contents: string
): Promise<void> {
  await instance.fs.writeFile(path, contents, 'utf-8');
}`,
    },
    sections: [
      {
        heading: 'Bridging Editor Latency and Runtime Execution',
        paragraphs: [
          'The core challenge of any browser IDE is keeping editor keystrokes instantaneous while synchronizing a live virtual filesystem with an executing Node.js environment.',
          'In GB Coder, decoupling Monaco model state from container file writes via micro-batched queues prevents main-thread stalls even during rapid multi-file refactors.',
        ],
      },
      {
        heading: 'Clean Export Back to Local Git',
        paragraphs: [
          'A browser sandbox should never trap user code. Pairing the virtual file tree with JSZip lets developers prototype anywhere and export a clean repository ready for local commits in one click.',
        ],
      },
    ],
  },
  {
    slug: 'scaling-multilingual-astro-i18n',
    title: 'Scaling multilingual architecture with Astro: a 9-language blueprint',
    date: 'June 18, 2025',
    category: 'SEO & Performance',
    image: IMAGES.bharatLand,
    excerpt:
      'Structuring typed translation dictionaries, hreflang graphs, and zero-JS static routes across nine languages without maintenance chaos.',
    sections: [
      {
        heading: 'Why Static HTML Wins for Global Utility Hubs',
        paragraphs: [
          'When users search for a land converter or document utility across regional languages, shipping heavy hydration bundles penalizes mobile devices immediately. Astro lets LadeStack serve clean semantic HTML with zero unnecessary client JS.',
        ],
      },
      {
        heading: 'Type-Safe Translation Keys',
        paragraphs: [
          'Every UI string is checked against a strict TypeScript locale schema at build time so missing translations or broken route alternates fail loudly before deployment.',
        ],
      },
    ],
  },
  {
    slug: 'mechanical-engineering-to-software',
    title: 'From mechanical engineering to software architecture',
    date: 'April 05, 2025',
    category: 'Philosophy',
    image: IMAGES.kineticSculpture,
    excerpt:
      'How studying tolerances, stress analysis, and physical systems at Fabtech and SVERI shaped my approach to resilient web software.',
    sections: [
      {
        heading: 'Tolerances, Constraints, and Real-World Load',
        paragraphs: [
          'In mechanical engineering, you never design for ideal frictionless assumptions—you design for peak load, fatigue, and clear failure margins. Software interfaces deserve the exact same rigor.',
          'When designing Bharat Land Converter or Swift Resume, thinking in tolerances means handling malformed input gracefully, respecting slow networks, and eliminating ambiguous states.',
        ],
      },
      {
        heading: 'First-Principles Product Building',
        paragraphs: [
          'Transitioning from mechanical CAD and thermodynamics into TypeScript and browser runtimes taught me to strip problems down to physics: inputs, transformations, and measurable output quality.',
        ],
      },
    ],
  },
];

export const ABOUT_TENETS = [
  {
    index: '01',
    title: 'Utility Before Hype',
    description:
      'Real utility and immediate usability over superficial tech trends. Every LadeStack tool solves a concrete friction point without ceremony.',
  },
  {
    index: '02',
    title: 'Privacy by Architecture',
    description:
      'Keep user documents, resumes, images, and code on their local device whenever technically feasible through Web Workers and client runtimes.',
  },
  {
    index: '03',
    title: 'Accessible by Default',
    description:
      'Build fast, responsive tools with zero paywalls, no mandatory signups, keyboard-friendly navigation, and clear visual hierarchy.',
  },
];

export const ABOUT_PRINCIPLES = [
  {
    title: 'Zero-Server Privacy',
    description:
      'Documents and images are processed directly inside browser memory via pdf-lib, OffscreenCanvas, and Web Workers—never uploaded to opaque queues.',
  },
  {
    title: 'Mechanical Precision',
    description:
      'Applying engineering tolerances and stress-testing discipline to UI state machines, decimal math, and responsive grid geometry.',
  },
  {
    title: 'Instant Utility',
    description:
      'No onboarding walls or bloated landing funnels. Open a tool and get immediate execution in under two seconds.',
  },
  {
    title: 'Client-Side Performance',
    description:
      'Careful bundle budgets, GPU-composited Motion transitions, and decoupled animation loops tuned for smooth 60fps feedback.',
  },
  {
    title: 'Transparent Craft',
    description:
      'Open-source repositories, clean TypeScript foundations, and verifiable architecture across all eight flagship products.',
  },
];

export const TECH_STACK_MATRIX = [
  {
    group: 'Languages & Runtimes',
    items: ['TypeScript', 'JavaScript (ES2024)', 'Node.js', 'WebAssembly', 'Web Workers'],
  },
  {
    group: 'Frontend & Motion',
    items: ['React 19', 'Next.js 15', 'Astro', 'Tailwind CSS', 'Framer Motion', 'Monaco Editor'],
  },
  {
    group: 'Client Storage & Media',
    items: ['WebContainers', 'IndexedDB', 'PDF.js & pdf-lib', 'OffscreenCanvas', 'JSZip', 'KaTeX'],
  },
  {
    group: 'Cloud, DB & AI',
    items: ['Supabase', 'PostgreSQL', 'Vercel & Edge', 'Gemini API', 'Claude & OpenAI BYOK'],
  },
];

export const QUANTIFIED_HIGHLIGHTS = [
  { value: '33+', label: 'Browser Games Engineered', context: 'GameHub Canvas Suite' },
  { value: '17+', label: 'Local Document Utilities', context: 'LS PDF Client Suite' },
  { value: '9', label: 'Languages Supported', context: 'LadeStack Global i18n' },
  { value: '100%', label: 'Client-Side Execution', context: 'Zero-Upload Privacy Focus' },
];
